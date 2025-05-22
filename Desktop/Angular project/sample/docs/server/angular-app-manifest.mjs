
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AngularProject/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AngularProject"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 505, hash: '2bd454caf6726623eaaac9ba7ea8cfbb6f4ac284476937742b309eaa40573e6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '49afe7a125fedafff6de819c7c2e1ff434fb5150df4d36d769d041ef5593166e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20844, hash: 'a84d9d4852171de8a5e0e896860f36793f2292288346a752bf7bacd84ac9a627', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
