import { TaskDto, CREATE_TASK, DELETE_TASK, GET_TASKS, GET_TASK } from "../../shared/interface/task.dto";

export interface TaskState {
    tasks: TaskDto[];
}

export interface CreateTaskAction {
    type: typeof CREATE_TASK;
    payload: TaskDto;
}

export interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: TaskDto;
}

export interface GetTasksAction {
    type: typeof GET_TASKS;
}

export interface GetTaskAction {
    type: typeof GET_TASK;
}

export type TaskActionTypes = CreateTaskAction | DeleteTaskAction | GetTasksAction | GetTaskAction;
