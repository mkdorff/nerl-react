import axios from 'axios'

export default class DatastoreService {

  // Explore Google Functions, use service account for that. hit that function to get what we need

  static get_node(node) {   
    return axios({
      method: 'get',
      url: ``
    }).then((res) => {
      return res.data
    })
  }
}

