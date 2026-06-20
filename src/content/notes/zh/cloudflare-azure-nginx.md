---
title: "Cloudflare + Azure + Nginx 的静态站点交付链路"
description: "一条足够简单、可验证、可回滚的个人网站部署路径。"
published: 2026-06-05
category: "基础设施"
lang: zh
tags: ["Cloudflare", "Azure", "Nginx", "Astro"]
---

个人主页不需要复杂的运行时。对于 Astro 静态输出，一条短而清晰的链路通常更加可靠：源码由 Git 管理，本地或 CI 生成 `dist/`，Nginx 负责静态文件，Cloudflare 位于公网入口。

## 构建与发布分离

服务器只保存构建产物，不承担 Node.js 运行时。发布时先上传到临时目录，验证文件完整后再切换站点目录，可以减少半完成状态暴露给用户的概率。

```bash
npm ci
npm run build
rsync -az --delete dist/ server:/tmp/site-next/
```

Nginx 对 Astro 的静态路由使用目录索引即可。对于不存在的路径，应返回真正的 404，而不是一律回退到首页，这有利于搜索引擎和故障定位。

## 缓存策略

带内容哈希的 `/_astro/` 资源可以设置长期不可变缓存；HTML 则应采用较短缓存，确保内容更新及时可见。Cloudflare 和源站的规则必须一致，否则排查旧内容时会多出一层不确定性。

## 可回滚性

保留上一个发布目录，并用符号链接指向当前版本，是成本很低的回滚方案。部署的完成标准不是上传成功，而是通过公网域名检查状态码、关键页面和静态资源。
