import axios from 'axios'

export default class DatastoreService {

  static get_node(node) {
    return axios({
      method: 'post',
      url: `https://us-central1-nerl-173717.cloudfunctions.net/WikipediaDatastoreQuery`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'node': node
      }
    }).then((res) => {
      // ds returns array
      return res.data[0];
    })
  }
}

