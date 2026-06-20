export const site = {
  name: 'Wang Zupeng',
  nameZh: '王祖鹏',
  domain: '888049.xyz',
  github: 'https://github.com/wangzupeng12061',
  university: 'Huazhong University of Science and Technology',
};

export const interests = [
  { index: '01', title: 'Agent Memory', detail: 'Evolving, versioned and multi-representation memory infrastructure.' },
  { index: '02', title: 'KV Cache', detail: 'Reuse, invalidation and lifecycle management for LLM inference.' },
  { index: '03', title: 'Storage Systems', detail: 'Distributed storage, NFS, Ceph and data movement across tiers.' },
  { index: '04', title: 'Backend Systems', detail: 'Reliable data services and performance-oriented engineering.' },
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
