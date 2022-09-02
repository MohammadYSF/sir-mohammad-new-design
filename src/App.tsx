import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePagePostCard from './components/home-page-post-card/PostCard';
import PostCard from "./components/home-page-post-card/PostCard";
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
function App() {
    return (
        <BrowserRouter>
            <CustomLayout>

                <Routes>
                    <Route path='/'  element={<Home />} />
                    <Route path='/login'  element={<Login />} />
                    <Route path='/post/:id' element={<Post />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </CustomLayout>

        </BrowserRouter>
    );
}

export default App;
