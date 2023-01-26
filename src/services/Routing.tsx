import { BrowserRouter as Router, Routes, Route, useNavigate }from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { useThemeContext } from '../hooks/themeContext';
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Home from '../pages/Home/Home';
import ArticleDetail from '../pages/Article/ArticleDetail';
import Articles from "../pages/Article/Articles";
import Login from "../pages/Login";
import WriteArticle from '../pages/Article/WriteArticle';
import SnsManage from '../pages/Manage/SnsManage';
import Layout, { HeaderLayout } from '../pages/Layout';
import Setting from '../pages/Setting';
import ArticleEditor from 'pages/Article/ArticleEditor';
import { useReactiveVar } from '@apollo/client';
import { errorMessageVar, accessTokenVar, isLoggedVar } from '../models/fragmentVar';
import {useEffect, useState} from 'react';
import useLoginRefresh from '../hooks/useLoginRefresh';
import { getLoginToken } from '../utils/storageUtils';
import useLogout from 'hooks/useLogout';
import YardManage from 'pages/Manage/YardManage';
import UserManage from 'pages/Manage/UserManage';


const Routing = () => {

    const accessToken = getLoginToken('accessToken');
    const errMessageVar = useReactiveVar(errorMessageVar);
    const loggedInfoVar = useReactiveVar(isLoggedVar);
    const {loginWithRefreshToken, loginWithAccessToken} = useLoginRefresh();
    const {logout} = useLogout();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("routing", errMessageVar);
        if(errMessageVar === "Login Token Expired"){
            console.log(errMessageVar);
            loginWithRefreshToken();
        }
        if(errMessageVar === "Authentication Failed"){
            logout();
            navigate('/yard-admin/login');
        }
        if(errMessageVar === "Need Re Login"){
            logout();
            navigate('/yard-admin/login');
        }
    }, [errMessageVar, logout]);

    const { theme } = useThemeContext();

    useEffect(()=>{
        if(loggedInfoVar === false && accessToken !== null){
            loginWithAccessToken();
        }
    }, [loggedInfoVar]);

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Routes>
                <Route path="/yard-admin/login" element={<Login />}/>
            </Routes>
            <Routes>
                <Route path="/yard-admin/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="articles" element={<Articles/>}/>
                    <Route path="articles/:articleId" element={<ArticleDetail/>}/>
                    <Route path='article-edit/:articleId' element={<ArticleEditor />}/>
                    <Route path='manage-yard' element={<YardManage />}/>
                    <Route path="manage-sns" element={<SnsManage/>}/>
                    <Route path="manage-users" element={<UserManage/>}/>
                    <Route path="setting" element={<Setting />} />
                </Route>
                <Route path="/yard-admin/" element={<HeaderLayout/>}>
                    <Route path="write" element={<WriteArticle />}/>
                </Route>
            </Routes>  
        </ThemeProvider>
    )
}

export default Routing;