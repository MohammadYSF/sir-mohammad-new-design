import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { PostType } from '../../types/PostType';
import moment from "moment-jalaali";
import { CommentType } from "../../types/CommentType";
import { useParams } from "react-router";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";
import posts from "../../data/posts.json";
import commentsData from "../../data/postComments.json";
interface props {

}
const Post: React.FC<props> = (): JSX.Element => {
    const { id } = useParams();
    const [post, setPost] = useState<PostType>({} as PostType);
    const [postDate,setPostDate] = useState<Date>(new Date());
    let comments: CommentType[] = commentsData;
    useEffect(() => {
        if (id != undefined) {
            let x = posts.find(a => a.postId == Number.parseInt(id));
            console.log("x is", x);
            if (x != undefined) {
                setPost(x);
                setPostDate(new Date(x.postDate));

            }
            else {
                alert("Error");
            }
        }
        else {
            alert("id parameter is not passed");
        }
    }, []);
    return (
        <div className={'row pb-5 pt-5'}>
            <article>
                <h1 className="text-center">
                    {post.postTitle}
                </h1>

                <ListGroup horizontal={true} className="justify-content-center">
                    <ListGroup.Item className={'border-0 mt-1 text-success'}>{post.postCategoryName}</ListGroup.Item>
                    <ListGroup.Item className={'border-0 px-0 mt-1'}>{new Intl.DateTimeFormat('fa-IR', { day: '2-digit', month: 'short', year: 'numeric' }).format(postDate)}</ListGroup.Item>
                    <ListGroup.Item className={'border-0 pe-0 mt-1'}>{post.postAuthorName}</ListGroup.Item>
                  
                </ListGroup>
                <p className="text-center">
                    <img src={`${post.postImageUrl}`} className={'img-fluid'} alt={post.postTitle} />
                </p>
                <p>
                    {post.postText}
                </p>
            </article>
            <Row>
                <Col md={7}>
                    {comments.map((item) => (
                        <Comment name={item.commentAuthor} date={new Date(item.commentDate)} text={item.commentText} />
                    ))}
                </Col>
                <Col md={5}>
                    <CommentForm />

                </Col>

            </Row>

        </div>
    );
}
export default Post;