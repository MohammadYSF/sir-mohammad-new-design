import posts from "../../data/posts.json";
import { PostCard } from "../home-page-post-card/PostCard";
interface propsType {

}
export const PostsArchive: React.FC<propsType> = (props: propsType) => {
    return (
        <>
            {posts.map((post) => {
                return (
                    <PostCard {...post} />
                );
            })}
        </>
    );
}