import React, { Component } from 'react'
import { Provider } from 'react-redux' 
import { store } from './redux'
import OpenSearchService from './services/OpenSearchService'
import './fonts/fonts.css'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      suggestions: []
    }
  }

  _onInput = (e) => {
    // TODO: debounce
    if (e.target.value !== '') {
      OpenSearchService.get_suggestions(e.target.value, (data) => {
        this.setState({ suggestions: data });
      });
    } else {
      this.setState({ suggestions: [] });
    }
  }

  _onTopicSelect = (e) => {
    // refs are better
    console.log(e.target.innerText);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <div>Hello NERL</div>
          <input onChange={this._onInput} type="text" placeholder="start typing..."/>
          {this.state.suggestions.map((data, index) => (
            <div className="suggestion" key={index} onClick={this._onTopicSelect} style={{cursor: "pointer"}}>{data}</div>
          ))}
        </div>
      </Provider>
    );
  }
}