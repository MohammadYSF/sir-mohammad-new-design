import {CommentType} from "./CommentType";

export interface PostType {
    postId: number,
    postTitle: string,
    postDescription: string,
    postText: string,
    postCategoryName: string,
    postAuthorName: string,
    postDate: Date,
    authorImageUrl:string,
    postImageUrl: string,
    postKeywords:string[]
    comments: CommentType[]
};