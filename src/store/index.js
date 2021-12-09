import { applyMiddleware, createStore, combineReducers } from 'redux'
import authReducer from './auth/reducer'
import postReducer from './post/reducer'
import categoryReducer from './category/reducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    Post: postReducer,
    Authen: authReducer,
    Category: categoryReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
export default store