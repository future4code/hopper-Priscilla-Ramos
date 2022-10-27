import { post } from "../model/PostDTO";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase {

    public insertPost = async (post: post) => {
        
        const newPost: post = await PostDataBase.connection("labook_posts")
            .insert({
                id: post.postId,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId
            })

        return newPost
    };

    public getPosts = async (id: string) => {

        const queryResult: any = await PostDataBase.connection("labook_posts")
            .select("*")
            .where({ id })


        const post: post = {
            postId: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        }

        return post
    };
}