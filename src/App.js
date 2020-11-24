import React from 'react'
import { Provider } from 'react-redux'
// Provider makes the Redux store available
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/todos'
import { List } from './components/List'

const reducer = combineReducers({ todos: todos.reducer })
const store = configureStore({ reducer })

export const App = () => {
  // We can't useDispatch here
  //  or useSelector
  // because App is not containted between the Provider tags.
  return (
    <Provider store={store}>
      <List />
    </Provider>
  )
}