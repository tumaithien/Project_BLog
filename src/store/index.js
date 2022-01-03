import { applyMiddleware, createStore, combineReducers } from 'redux'

import authReducer from './auth/reducer'
import postReducer from './post/reducer'
import categoryReducer from './category/reducer'
import menuReducer from './menu/reducer'
import commentReducer from './comment/reducer'
import tagReducer from './tag/reducer'

import thunk from 'redux-thunk'
import logger from 'redux-logger'


const rootReducer = combineReducers({
    Post: postReducer,
    Authen: authReducer,
    Category: categoryReducer,
    Menu : menuReducer,
    Comment: commentReducer,
    Tag: tagReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

export default store