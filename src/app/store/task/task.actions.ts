import { CREATE_TASK, DELETE_TASK, TaskDto } from "../../shared/interface/task.dto";
import { TaskActionTypes } from "./task.types";

export function createTask(taskData: TaskDto): TaskActionTypes {
    return {
        type:CREATE_TASK,
        payload:taskData
    }
}

export function deleteTask(taskData: TaskDto): TaskActionTypes {
    return {
        type: DELETE_TASK,
        payload: taskData
    }
}