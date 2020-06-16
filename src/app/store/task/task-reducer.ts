import { TaskState, TaskActionTypes } from "./task.types";
import { CREATE_TASK, DELETE_TASK } from "../../shared/interface/task.dto";


const initialState: TaskState = {
    tasks: []
}

export function TaskReducer(
    state = initialState,
    action: TaskActionTypes,
): TaskState {
    switch (action.type) {
        case CREATE_TASK:
            return { tasks: [...state.tasks, action.payload] }
        case DELETE_TASK:
            return { tasks: [...state.tasks, action.payload] }
        default:
            return state;
    }
}