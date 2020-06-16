import { TaskDto, CREATE_TASK, DELETE_TASK } from "../../shared/interface/task.dto";

export interface TaskState {
    tasks:TaskDto[];
}

export interface CreateTaskAction{
    type:typeof CREATE_TASK;
    payload:TaskDto;
}

export interface DeleteTaskAction {
    type:typeof DELETE_TASK;
    payload: TaskDto;
}

export type TaskActionTypes = CreateTaskAction | DeleteTaskAction;
