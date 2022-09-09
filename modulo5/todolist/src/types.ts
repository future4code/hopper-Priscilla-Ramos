export type User = {
    id: number,
    name: string,
    nickname: string,
    email: string
};

export type Task = {
    id: number,
    title: string, 
    description: string, 
    limit_date: string, 
    creator_user_id: number
};

export enum STATUS {
    TODO = "todo",
    DOING = "doing",
    DONE = "done"
}

export type Body = {
    taskId: number,
	title: string,
	description: string,
	limitDate: string,
	status: STATUS,
    creatorUserId: string,
	creatorUserNickname: string
};

