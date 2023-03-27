
export interface ITaskServiceInterface {
    createTask(userId:string ,taskCreateDto: any): Promise<any>;
    getTasks(userId: string, page:number): Promise<any>;
    getTaskById(id: string, userId: string): Promise<any>;
    deleteTask(id: string, userId: string, taskDeleteDto:any): Promise<any>;
    updateTask(id: string, userId: string, taskUpdateDto:any): Promise<any>;
    updateTaskStatus(id: string, userId: string, taskUpdateStatusDto:any): Promise<any>;
}