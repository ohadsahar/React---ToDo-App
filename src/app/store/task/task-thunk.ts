import { Action } from 'redux'

import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { createTask } from './task.actions'
import { TaskDto } from '../../shared/interface/task.dto'

export const thunkCreateTask = (taskData:TaskDto): 
ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    const taskData = {id:'1', taskName:'ohad', taskDeadLine:'123'};
  const asyncResp = await exampleAPI();
  console.log(asyncResp);
  dispatch(
    createTask(taskData)
  )
}

function exampleAPI() {
  return Promise.resolve('Async Chat Bot')
}