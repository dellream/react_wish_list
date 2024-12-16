import React from "react";
import {Layout} from "antd";
import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "./sections/Navbar/Navbar";
import {useAppSelector} from "store";
import {PATH} from "jsConstants";
import {Footer} from "./sections/Footer/Footer";

import styles from './styles.scss'

const {Content} = Layout;

const AppLayout: React.FC = () => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    const location = useLocation();

    const isLoginPage = location.pathname === PATH.LOGIN;

    return (
        <Layout>
            <div className={styles.layout}>
                <Navbar isAuthenticated={isAuthenticated}/>
                <div className={styles.content}>
                    <Content>
                        <Outlet/>
                    </Content>
                </div>
                {!isLoginPage && <Footer/>} {/* Футер скрывается на странице логина */}
            </div>
        </Layout>
    );
};

export default AppLayout;
