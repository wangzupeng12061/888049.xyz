export type Lang = 'en' | 'zh';

export function getLang(pathname: string): Lang {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function localizePath(path: string, lang: Lang): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'zh') return normalized === '/' ? '/zh/' : `/zh${normalized}`;
  return normalized.replace(/^\/zh(?=\/|$)/, '') || '/';
}

export function getLanguagePaths(pathname: string) {
  if (/^\/(?:zh\/)?404(?:\.html|\/)?$/.test(pathname)) {
    return { en: '/404.html', zh: '/zh/404/' };
  }
  const en = localizePath(pathname, 'en');
  return { en, zh: localizePath(en, 'zh') };
}
