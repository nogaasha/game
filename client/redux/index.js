import { createStore } from 'redux'

import createRootReducers from './reducers'

const initialState = {}
const store = createStore(createRootReducers(), initialState)

export default store
