import React, { Component } from 'react'
import { Provider } from 'react-redux' 
import { store } from './redux'
import OpenSearchService from './services/OpenSearchService'
import DatastoreService from './services/DatastoreService'
import './fonts/fonts.css'
import './app.css'

// TODO:
// Visual Things
// upload suggestions to datastore, so only one query per node
// Input backspace bug

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      searchSuggestions: [],
      nodeData: null // {}
    }
  }

  _onInput = (e) => {
    // debounce
    // ---- OR ----
    // Add global listener on 'backspace' key that is a setTimeout(fn, ~200) that looks at the value of the input box
    if (e.target.value !== '') {
      OpenSearchService.get_suggestions(e.target.value, (data) => {
        this.setState({ searchSuggestions: data });
      });
    } else {
      this.setState({ searchSuggestions: [] });
    }
  }

  _onTopicSelect = (e) => {
    // refs are better
    console.log(e.target.innerText);
    DatastoreService.get_node(e.target.innerText).then((data) => {
      console.log(data);
      this.setState({
        nodeData: data,
        searchSuggestions: []
      });
    });
  }

  render() {
    const { nodeData } = this.state;
    return (
      <Provider store={store}>
        <div className="wrapper">
          <div>Hello NERL</div>
          <input onChange={this._onInput} type="text" placeholder="start typing..."/>
          {this.state.searchSuggestions.map((data, index) => (
            <div className="suggestion" key={index} onClick={this._onTopicSelect} style={{cursor: "pointer"}}>{data}</div>
          ))}
          {nodeData && (
            <div>
              <div>Node: {nodeData.node}</div>
              <div>Incoming Edges: {nodeData.incomingEdges}</div>
              <div>Outgoing Edges: {nodeData.outgoingEdges}</div>
              <div>Centrality: {nodeData.centrality}</div>
              <div>List of Edges:</div>
              <div>
                <ul>
                  {nodeData.edgesTo.map((edge, index) => (
                    <li key={index}>{edge}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="info-toggle">
            <div className="outer-circle"></div>
            <div className="inner-circle"></div>
            <div className="i">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
          </div>

        </div>
      </Provider>
    );
  }
}