import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// importar reducers
import reducerPrincipal from './reducers'

// const initialState = {}

const middleware = [thunk]

// Agregar local Storage
const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : []

const store = createStore(reducerPrincipal, storageState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store
