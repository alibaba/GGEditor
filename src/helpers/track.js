/* global G6_VERSION, G6_EDITOR_VERSION, GG_EDITOR_VERSION */

import { toQueryString } from '@utils';

const BASE_URL = 'http://gm.mmstat.com/fsp.1.1';

const { location, navigator } = window;

const rels = {
  g6: G6_VERSION,
  'g6-editor': G6_EDITOR_VERSION,
  'gg-editor': GG_EDITOR_VERSION,
};

const track = (options) => {
  const image = new Image();
  const params = toQueryString({
    pid: 'ggeditor',
    code: '11',
    msg: 'syslog',
    ua: navigator.userAgent,
    hash: location.hash,
    query: location.search,
    page: location.host + location.pathname,
    rel: Object.keys(rels).map(key => `${key}@${rels[key]}`).join(';'),
    ...options,
  });

  image.src = `${BASE_URL}?${params}`;
};

export default options => setTimeout(track.bind(this, options), 1000);
