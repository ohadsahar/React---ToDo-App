import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { TaskReducer } from './task/task-reducer';

const rootReducer = combineReducers({
  task: TaskReducer,
})

export type RootState = ReturnType<typeof rootReducer>

//export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

