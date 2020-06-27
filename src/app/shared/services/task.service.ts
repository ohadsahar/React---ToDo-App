import { TaskDto } from "../interface/task.dto";
import { environment } from "../../config/enviorment";

const serverUrl = `${environment.serverUrl}/task`;

export const createTask = (taskData: TaskDto) => {
   return taskData;
}

export const deleteTask = (taskData: TaskDto) => {
   return taskData;
}

export const getTasks = () => {
   return true;
}

export const getTask = (taskId: string) => {
   return taskId;
}
