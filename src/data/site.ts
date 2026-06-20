export const site = {
  name: 'Wang Zupeng',
  nameZh: '王祖鹏',
  domain: '888049.xyz',
  github: 'https://github.com/wangzupeng12061',
  university: 'Huazhong University of Science and Technology',
  universityZh: '华中科技大学',
};

export const interests = [
  { index: '01', title: 'Agent Memory', detail: 'Evolving, versioned and multi-representation memory infrastructure.' },
  { index: '02', title: 'KV Cache', detail: 'Reuse, invalidation and lifecycle management for LLM inference.' },
  { index: '03', title: 'Storage Systems', detail: 'Distributed storage, NFS, Ceph and data movement across tiers.' },
  { index: '04', title: 'Backend Systems', detail: 'Reliable data services and performance-oriented engineering.' },
];

export const interestsZh = [
  { index: '01', title: 'Agent 记忆', detail: '面向持续演化、版本化与多表示的记忆基础设施。' },
  { index: '02', title: 'KV Cache', detail: '大模型推理中的缓存复用、失效传播与生命周期管理。' },
  { index: '03', title: '存储系统', detail: '分布式存储、NFS、Ceph 与跨层数据移动。' },
  { index: '04', title: '后端系统', detail: '可靠的数据服务与面向性能的工程实践。' },
];

export const projects = [
  {
    slug: 'aicoin-backtesting',
    number: '01',
    title: 'AICoin Strategy Backtesting',
    role: 'Backend engineering',
    description: 'Backend components for strategy trading backtesting, including system and professional backtesting, community indicators, and short-term strategy data processing.',
    tags: ['Go', 'PHP', 'MongoDB', 'Redis'],
  },
  {
    slug: 'nfs-ganesha-analysis',
    number: '02',
    title: 'NFS-Ganesha Cache Analysis',
    role: 'Systems investigation',
    description: 'An investigation into cache hit-rate observability, request paths and measurement boundaries in NFS-Ganesha deployments.',
    tags: ['NFS-Ganesha', 'Linux', 'Metrics'],
  },
  {
    slug: 'personal-infrastructure',
    number: '03',
    title: 'Personal Web Infrastructure',
    role: 'Infrastructure',
    description: 'A compact static delivery stack built on Astro, Azure, Nginx and Cloudflare, with reproducible deployment from source.',
    tags: ['Astro', 'Azure', 'Nginx', 'Cloudflare'],
  },
];

export const projectsZh = [
  {
    slug: 'aicoin-backtesting',
    number: '01',
    title: 'AICoin 策略回测系统',
    role: '后端工程',
    description: '参与策略交易回测后端建设，涉及系统回测、专业回测、社区指标与短线策略数据处理。',
    tags: ['Go', 'PHP', 'MongoDB', 'Redis'],
  },
  {
    slug: 'nfs-ganesha-analysis',
    number: '02',
    title: 'NFS-Ganesha 缓存分析',
    role: '系统研究',
    description: '研究 NFS-Ganesha 部署中的缓存命中率可观测性、请求路径与指标测量边界。',
    tags: ['NFS-Ganesha', 'Linux', 'Metrics'],
  },
  {
    slug: 'personal-infrastructure',
    number: '03',
    title: '个人网站基础设施',
    role: '基础设施',
    description: '基于 Astro、Azure、Nginx 与 Cloudflare 构建的轻量静态交付链路，支持从源码复现部署。',
    tags: ['Astro', 'Azure', 'Nginx', 'Cloudflare'],
  },
];
