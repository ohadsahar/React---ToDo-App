import { TaskState, TaskActionTypes } from "./task.types";
import { CREATE_TASK, DELETE_TASK, GET_TASKS, GET_TASK } from "../../shared/interface/task.dto";


const initialState: TaskState = {
    tasks: []
}

export function TaskReducer(
    state = initialState,
    action: TaskActionTypes,
): TaskState {
    switch (action.type) {

        case CREATE_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: [...state.tasks]
            }
        case GET_TASK:
            return {
                ...state,
                tasks: [...state.tasks]
            }
        case DELETE_TASK:
            console.log(action.payload);
            return {
                ...state,
                tasks: [...state.tasks.filter((task) => task.id !== action.payload.taskName), action.payload]
            }
        default:
            return state;
    }
}