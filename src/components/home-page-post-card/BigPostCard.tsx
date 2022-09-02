import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostType } from "../../types/PostType";

interface propsType extends PostType {

}
export const BigPostCard: React.FC<propsType> = (props: propsType) => {
    return (
        <>
            <Card className={`border-0  mt-4`}>


                <Card.Img className={`img-fluid rounded-0`}
                    src={props.postImageUrl}
                />


                <Card.Body className={`text-right card-body`}>
                    <Card.Title as={Link} to={`/posts/${props.postId}`} className={'h4 card-title'}>{props.postTitle}</Card.Title>
                    <Card.Text>{props.postDescription}</Card.Text>
                    <Card.Text><small className="text-muted">نوشته شده در
                        <span className="card-date">
                            {new Intl.DateTimeFormat('fa-IR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(props.postDate))}
                        </span>
                    </small></Card.Text>
                </Card.Body>


            </Card>
        </>
    );
}