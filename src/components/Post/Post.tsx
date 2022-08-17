import React from "react";
import {ListGroup} from "react-bootstrap";
import {PostType} from '../../types/PostType';
import moment from "moment-jalaali";

interface props extends PostType {

}

const Post: React.FC<props> = (props): JSX.Element => {

    return (
        <div className={'row'}>
            <article className={'col'}>
                <h1>                {props.postTitle}
                </h1>

            <ListGroup horizontal={true}>
                <ListGroup.Item className={'border-0 mt-1 text-success'}>{props.postCategoryName}</ListGroup.Item>
                <ListGroup.Item className={'border-0 px-0 mt-1'}>{new Intl.DateTimeFormat('fa-IR' , {day:'2-digit' , month:'short' , year:'numeric'}).format(props.postDate)}</ListGroup.Item>
                <ListGroup.Item className={'border-0 pe-0 mt-1'}>{props.postAuthorName}</ListGroup.Item>
                <ListGroup.Item className={'border-0 ps-0'}><img src={props.postImageUrl} alt={''} height={40} className='rounded-circle'
                                     width={40}/></ListGroup.Item>
            </ListGroup>
                <p>
                    <img src={`${props.postImageUrl}`} className={'img-fluid'} alt=""/>
                </p>
                <p>                    {props.postText}
                </p>
            </article>

        </div>
    );
}
export default Post;