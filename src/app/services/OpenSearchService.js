import axios from 'axios'
import jsonp from 'jsonp'

export default class OpenSearchService {

  static get_suggestions(str, fn) {
    jsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${str}`, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        // Array length 4, this is what they give back
        fn(data[1]);
      }
    })
  }
}