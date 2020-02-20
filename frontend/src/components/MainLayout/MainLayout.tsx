import React from "react";
import { Icon, Layout } from "antd";
import "./MainLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer";
import UserInfo from "../UserInfo/UserInfo";
import { User } from "../../models/User";
import { logout } from "../../api/authenticate";

const { Header, Content, Footer } = Layout;
// @ts-ignore
const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());
  const user = useSelector((state: RootState) => state.appState.user) as User;

  return (
    <Layout className="main-layout">
      <Header className="main-layout__header">
        <UserInfo user={user} onLogout={onLogout}>
          <a
            href="https://github.com/iczajkow/jira-web-timesheet"
            target="_blank"
          >
            <Icon type="github" style={{ fontSize: "24px" }} />
          </a>
        </UserInfo>
      </Header>
      <Content className="main-layout__content">{children}</Content>
    </Layout>
  );
};

export default MainLayout;