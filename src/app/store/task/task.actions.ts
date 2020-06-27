import { CREATE_TASK, DELETE_TASK, GET_TASKS, TaskDto, } from "../../shared/interface/task.dto";
import * as taskService from '../../shared/services/task.service';

export function createTask(taskData: TaskDto) {

    return async (dispatch: any) => {
        try {
            const result = taskService.createTask(taskData);
            dispatch({ type: CREATE_TASK, payload: result })
        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteTask(taskData: TaskDto) {
    return async (dispatch: any) => {
        try {
            const result = taskService.deleteTask(taskData);
            dispatch({ type: DELETE_TASK, payload: taskData });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTasks() {
    return async (dispatch: any) => {
        try {
            const result = taskService.getTasks();
            dispatch({ type: GET_TASKS });
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTask(id: string) {
    return async (dispatch: any) => {
        try {
            const result = taskService.getTask(id);
            dispatch({ type: GET_TASKS });
        } catch (error) {
            console.log(error);
        }
    }
}