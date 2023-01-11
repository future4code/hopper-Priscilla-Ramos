export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
 };
 
export interface post {
    postId: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 };
