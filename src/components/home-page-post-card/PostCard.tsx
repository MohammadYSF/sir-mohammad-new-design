import React from "react";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import classes from './styles.module.css';
import { PostType } from "../../types/PostType";
import { Link } from "react-router-dom";
interface propsType extends PostType {

}
export const PostCard: React.FC<propsType> = (props: propsType) => {
    return (
        <>
            <Card className={`border-0  mt-4`}>
                <Row>
                    <Col md={2}>
                        <Card.Img className={`img-fluid rounded-0`}
                            src={props.postImageUrl}
                        />
                    </Col>
                    <Col md={10}>

                        <Card.Body className={`text-right card-body`}>
                            <Card.Title as={Link} to={`/posts/${props.postId}`} className={'h5 card-title'}>{props.postTitle}</Card.Title>
                            <Card.Text>{props.postDescription}</Card.Text>
                            <Card.Text><small className="text-muted">نوشته شده در 
                                <span className="card-date">
                                {new Intl.DateTimeFormat('fa-IR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(props.postDate))}
                                </span>
                            </small></Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    );
}
