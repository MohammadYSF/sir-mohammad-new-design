import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePagePostCard from './components/home-page-post-card/PostCard';
import PostCard from "./components/home-page-post-card/PostCard";
import CommentForm from "./components/Comment/CommentForm";
import Comment from "./components/Comment/Comment";
import NavbarCustom from "./components/NavbarCustom/NavbarCustom";
import {PostType} from "./types/PostType";
import  {CommentType} from './types/CommentType';
import Post from "./components/Post/Post";
const dataComment:CommentType[] = [
    {
        commentId:1,
        postId:1,
        commentText:'سلام این عنوان یک کامنت است',
        commentDate:new Date(),
        commentAuthor:'محمد یوسفیان'

    },
    {
        commentId:2,
        postId:1,
        commentText:'سلام این عنوان یک کامنت است',
        commentDate:new Date(),
        commentAuthor:'محمد یوسفیان'

    }
];

const dataPost: PostType = {
    postId: 1,
    postAuthorName: 'محمد یوسفیان',
    postCategoryName: 'نقد کتاب',
    postTitle: 'رستگاری : داستان تحول یک اشرافی',
    postDescription: 'لئون تولستوی (یا لی یو تالستوی) و یک رمان جذاب که در خیلی از مواقع نمی توان کتاب را زمین گذاشت ( و بعضی مواقع نمی توان در دست نگه داشت)',
    postDate: new Date(),
    postText: 'آیا شخصی که خود گناهکار است ، می تواند مانع گناه دیگران بشود؟ اشخاصی که خود آلوده بودند ، خیال می کردند که می توانند آلودگی دیگران را از راه مجازات پاک کنند و نتیجه این بود که همه ، خواه توانا یا تنگدست کارشان نجات دیگران از راه مجازات بود و با این به اصطلاح اصلاخ باعث می شدند که خود منحرف تر و فاسد تر از آنچه بودند ، بشوند و مجازات شوندگان را فاسد تر از آنچه بودند بکنند\n' +
        '\n' +
        ' از آن جهت ملکوت آسمان پادشاهی را می ماند که با غلامان خود اراده محاسبه داشت\n' +
        '\n' +
        'و چون شروع به حساب نمود شخصی را نزد او آوردند که ده هزار قنطار به او بدهکار بود\n' +
        '\n',
    postKeywords: ['تفریح', 'لینوکس', 'جادی'],
    authorImageUrl:'http://sirmohammad.ir/Images/Posts/MainImages/100x100/e24c4930-9a97-40a3-8e34-237e9bfb1c87.jpg',
    comments:dataComment,
    postImageUrl:'http://sirmohammad.ir/Images/Posts/MainImages/OriginalSize/e24c4930-9a97-40a3-8e34-237e9bfb1c87.jpg',


}

function App() {
    return (
        <div className="App">
            <NavbarCustom expand={'xl'}/>
            <CommentForm/>
                <Post {...dataPost}/>
            <Comment name={'محمد یوسفیان'} date={new Date()} text={'سلام دنیا خوبی'} cssClasses={['w-50']}/>
        </div>
    );
}

export default App;
