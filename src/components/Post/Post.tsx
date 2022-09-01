import React, { useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { PostType } from '../../types/PostType';
import moment from "moment-jalaali";
import { CommentType } from "../../types/CommentType";
import { useParams } from "react-router";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";

interface props {

}
const dataComment: CommentType[] = [
    {
        commentId: 1,
        postId: 1,
        commentText: 'سلام این عنوان یک کامنت است',
        commentDate: new Date(),
        commentAuthor: 'محمد یوسفیان'

    },
    {
        commentId: 2,
        postId: 1,
        commentText: 'سلام این عنوان یک کامنت است',
        commentDate: new Date(),
        commentAuthor: 'محمد یوسفیان'

    }
];

const dataPost: PostType = {
    postId: 1,
    postAuthorName: 'محمد یوسفیان',
    postCategoryName: 'نقد کتاب',
    postTitle: 'این یک عنوان تست برای مقاله است',
    postDescription: 'لئون تولستوی (یا لی یو تالستوی) و یک رمان جذاب که در خیلی از مواقع نمی توان کتاب را زمین گذاشت ( و بعضی مواقع نمی توان در دست نگه داشت)',
    postDate: new Date(),
    postText: 'آیا شخصی که خود گناهکار است ، می تواند مانع گناه دیگران بشود؟ اشخاصی که خود آلوده بودند ، خیال می کردند که می توانند آلودگی دیگران را از راه مجازات پاک کنند و نتیجه این بود که همه ، خواه توانا یا تنگدست کارشان نجات دیگران از راه مجازات بود و با این به اصطلاح اصلاخ باعث می شدند که خود منحرف تر و فاسد تر از آنچه بودند ، بشوند و مجازات شوندگان را فاسد تر از آنچه بودند بکنند\n' +
        '\n' +
        ' از آن جهت ملکوت آسمان پادشاهی را می ماند که با غلامان خود اراده محاسبه داشت\n' +
        '\n' +
        'و چون شروع به حساب نمود شخصی را نزد او آوردند که ده هزار قنطار به او بدهکار بود\n' +
        '\n',
    postKeywords: ['تفریح', 'لینوکس', 'جادی'],
    authorImageUrl: 'http://sirmohammad.ir/Images/Posts/MainImages/100x100/e24c4930-9a97-40a3-8e34-237e9bfb1c87.jpg',
    comments: dataComment,
    postImageUrl: 'http://sirmohammad.ir/Images/Posts/MainImages/OriginalSize/e24c4930-9a97-40a3-8e34-237e9bfb1c87.jpg',


}
const Post: React.FC<props> = (): JSX.Element => {
    const { id } = useParams();
    return (
        <div className={'row pb-5 pt-5'}>
            <article>
                <h1 className="text-center">
                    {dataPost.postTitle}
                </h1>

                <ListGroup horizontal={true} className="justify-content-center">
                    <ListGroup.Item className={'border-0 mt-1 text-success'}>{dataPost.postCategoryName}</ListGroup.Item>
                    <ListGroup.Item className={'border-0 px-0 mt-1'}>{new Intl.DateTimeFormat('fa-IR', { day: '2-digit', month: 'short', year: 'numeric' }).format(dataPost.postDate)}</ListGroup.Item>
                    <ListGroup.Item className={'border-0 pe-0 mt-1'}>{dataPost.postAuthorName}</ListGroup.Item>
                    <ListGroup.Item className={'border-0 ps-0'}><img src={dataPost.postImageUrl} alt={''} height={40} className='rounded-circle'
                        width={40} /></ListGroup.Item>
                </ListGroup>
                <p className="text-center">
                    <img src={`${dataPost.postImageUrl}`} className={'img-fluid'} alt="" />
                </p>
                <p>
                    {dataPost.postText}
                </p>
            </article>
            <Row>
                <Col md={7}>
                    <Comment name={'محمد یوسفیان'} date={new Date()} text={'سلام دنیا خوبی'} />
                    <Comment name={'محمد یوسفیان'} date={new Date()} text={'سلام دنیا خوبی'} />

                </Col>
                <Col md={5}>
                    <CommentForm />

                </Col>

            </Row>

        </div>
    );
}
export default Post;