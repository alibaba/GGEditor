import { toQueryString } from '@utils';
import Global from '@common/Global';

const BASE_URL = 'http://gm.mmstat.com/fsp.1.1';
const rels = Global.get('versions');

const track = (options) => {
  if (!Global.get('trackable')) return;

  const { location, navigator } = window;
  const image = new Image();
  const params = toQueryString({
    pid: 'ggeditor',
    code: '11',
    msg: 'syslog',
    page: `${location.protocol}//${location.host}${location.pathname}`,
    hash: location.hash,
    ua: navigator.userAgent,
    rel: Object.keys(rels).map(key => `${key}@${rels[key]}`).join(';'),
    ...options,
  });

  image.src = `${BASE_URL}?${params}`;
};

export default options => setTimeout(track.bind(this, options), 1000);
