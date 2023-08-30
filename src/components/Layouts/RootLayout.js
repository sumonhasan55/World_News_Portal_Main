import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  FormOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession()
  console.log(session)

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              WORLD_NEWS_PORTAL
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/allnews">
            <items>
              <ProfileOutlined />
              All News
            </items>
          </Link>
          <Link href="/create">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <FormOutlined />
              Create News
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>

          {
            session?.user ? (<items>
              <Button style={{
                  margin: "0px 25px",
                }} onClick={() => signOut()} type="primary" danger>
                Logout
              </Button>
            </items>) : (
              <Link style={{ textDecoration: "none", color: "white" }} href="/login">
                <items
                style={{
                  margin: "0px 25px",
                }}>
                   
                  Login</items>
                  
              </Link>
              
            )

          }
          {
            session?.user ?(
              <Avatar size={42} src={session?.user?.image} />
            ):
            <UserOutlined></UserOutlined>
          }
          
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          WORLD_NEWS_PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://myaccount.google.com">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        Copy Right © 2023 WORLD_NEWS_PORTAL
      </Footer>
    </Layout>
  );
};
export default RootLayout;
