import keys_prod from './prod';
import keys_dev from './dev';

let keys = {};
if (process.env.NODE_ENV === 'production') {
  keys = keys_prod;
} else {
  keys = keys_dev;
}

export default keys;
