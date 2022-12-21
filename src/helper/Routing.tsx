import { BrowserRouter as Router, Routes, Route, createBrowserRouter, BrowserRouter }from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { useThemeContext } from './themeContext';
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/global";
import Home from '../pages/Home/Home';
import ArticleDetail from '../pages/Article/ArticleDetail';
import Articles from "../pages/Article/Articles";
import Login from "../pages/Login";
import WriteArticle from '../pages/Article/WriteArticle';
import SnsManage from '../pages/SnsManage';
import Layout from '../pages/Layout';
import Setting from '../pages/Setting';
import UserManage from '../pages/UserManage';

const Routing = () => {

    const { theme } = useThemeContext();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Routes>
                    <Route path="/yard-admin/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="articles" element={<Articles/>}/>
                        <Route path="articles/:articleId" element={<ArticleDetail/>}/>
                        <Route path="write" element={<WriteArticle />} />
                        <Route path="manage-sns" element={<SnsManage/>}/>
                        <Route path="manage-users" element={<UserManage/>}/>
                        <Route path="setting" element={<Setting />} />
                    </Route>
                    <Route path="/yard-admin/login" element={<Login />}/>
                </Routes>     
            </Router>
        </ThemeProvider>
    )
}

export default Routing;