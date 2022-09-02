import posts from '../../data/posts.json';
import { useState, useEffect } from 'react';
import { PostCard } from '../home-page-post-card/PostCard';
import { useParams } from 'react-router';
interface propsType {
}
export const PostsSearchResult: React.FC<propsType> = (props: propsType) => {
    const [count, setcount] = useState(0);
    const { searchText } = useParams();
    return (
        <>
            <h1 className='h3'><span className='search-count'>{count}</span>نوشته مرتبط با عبارت  <span className='search-text'>{searchText}</span> پيدا شد</h1>
            {posts.map((post) => {
                return (
                    <PostCard {...post} />
                );
            })}
        </>
    );
}