import { CommentType } from "../../types/CommentType";
import { PostType } from "../../types/PostType";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";
import Post from "../Post/Post";
import posts from '../../data/posts.json';
import { PostCard } from "../home-page-post-card/PostCard";
import { BigPostCard } from "../home-page-post-card/BigPostCard";
export const Home = () => {
    return (
        <>
            <h1>به وب سایت من خوش آمدید !</h1>
             <BigPostCard {...posts[0]}/>
            {posts.map((post) => {
                return (
                    <PostCard {...post} />
                );
            })}

        </>
    );
}