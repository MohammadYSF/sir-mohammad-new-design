import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PostCard} from "./components/home-page-post-card/PostCard";
import CommentForm from "./components/Comment/CommentForm";
import Comment from "./components/Comment/Comment";
import { PostType } from "./types/PostType";
import { CommentType } from './types/CommentType';
import Post from "./components/Post/Post";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Login } from './components/Login/Login';
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import { CustomLayout } from './components/layout/CustomLayout';
import { PostsSearchResult } from './components/postsSearchResult/PostsSearchResult';
import { PostsArchive } from './components/postsArchive/PostsArchive';
function App() {
    return (
        <BrowserRouter>
            <CustomLayout>

                <Routes>
                    <Route path='/'  element={<Home />} />
                    <Route path='/login'  element={<Login />} />
                    <Route path='/posts/:id' element={<Post />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/search/:searchText' element={<PostsSearchResult />} />
                    <Route path='/postsArchive' element={<PostsArchive />} />
                </Routes>
            </CustomLayout>

        </BrowserRouter>
    );
}

export default App;
