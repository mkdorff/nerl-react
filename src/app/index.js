import React from 'react'
import { Provider } from 'react-redux' 
import { store } from './redux'
import './fonts/fonts.css'
import './app.css'

export default function App (props) {
  return (
    <Provider store={store}>
      <div>Hello NERL</div>
    </Provider>
  );
}
