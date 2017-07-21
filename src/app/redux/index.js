import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk'


export const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware( thunk )
  )
)