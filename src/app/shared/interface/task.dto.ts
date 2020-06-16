
export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface TaskDto {
    id: string;
    taskName:string;
    taskDeadLine:string;
}
