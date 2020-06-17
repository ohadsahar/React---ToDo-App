import { Action } from 'redux'

import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { createTask } from './task.actions'
import { TaskDto } from '../../shared/interface/task.dto'

export const thunkCreateTask = (taskData: TaskDto):
  ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    console.log(taskData);
    const asyncResp = await exampleAPI();
    dispatch(createTask(taskData));
  }

function exampleAPI() {
  console.log('here')
  return Promise.resolve('Async Chat Bot')
}