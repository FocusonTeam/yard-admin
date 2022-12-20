import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import ArticleDetail from '../pages/ArticleDetail';
import Articles from "../pages/Articles";
import Login from "../pages/Login";
import styled from "styled-components";

const Routing = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/yard-admin/login" element={<Login />}/>
                    <Route path="/yard-admin/" element={<Home />}/>
                    <Route path="/yard-admin/articles" element={<Articles/>}/>
                    <Route path="/yard-admin/articles/:article" element={<ArticleDetail/>}/>
                        {/** Default Page */}
                    <Route path="/yard-admin/" element={<Home />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routing;

const Layout = styled.div`
width: 100%;
height: 100vh;
`;