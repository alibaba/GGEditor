import Global from '@/common/Global';
import { toQueryString } from '@/utils';
import { GraphType } from '@/common/constants';

const BASE_URL = 'http://gm.mmstat.com/fsp.1.1';

export function track(graphType: GraphType) {
  const version = Global.getVersion();
  const trackable = Global.getTrackable();

  if (!trackable) {
    return;
  }

  const { location, navigator } = window;
  const image = new Image();
  const params = toQueryString({
    pid: 'ggeditor',
    code: '11',
    msg: 'syslog',
    page: `${location.protocol}//${location.host}${location.pathname}`,
    hash: location.hash,
    ua: navigator.userAgent,
    rel: version,
    c1: graphType,
  });

  image.src = `${BASE_URL}?${params}`;
}
