/* eslint-disable no-unused-vars */
import {
    Badge,
    Button,
    Card,
    Layout,
    Menu,
    Row,
    theme,
    Typography,
} from "antd";
import { useEffect, useState } from "react";
import { HomeOutlined, InboxOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CategoriesCard from "./CategoriesCard";
const { Header, Content } = Layout;
function MenuPage() {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    const gridStyle = {
        width: "25%",
        textAlign: "center",
    };

    const colStyle = {
        alignItems: "center",
        justifyContent: "center",
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const removeFromCart = (id) => {
        console.log("removeFromCart");
    };

    const reduceFromCart = (id) => {
        console.log("reduceFromCart");
    };

    const addToCart = (item) => {
        console.log("addToCart");
    };

    const getCategories = () => {
        console.log("getCategories");
    };

    const getItems = () => {
        console.log("getItems");
    };

    // It has to be working while calling the categories button
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const navigate = useNavigate();
    const onNavigate = (key) => {
        navigate(key, { replace: true });
    };

    useEffect(() => {
        getCategories();
        getItems();
    }, []);

    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    padding: "15px",
                }}
            >
                <div
                    className="demo-logo"
                    style={{ justifyContent: "flex-start", display: "flex" }}
                    onClick={() => onNavigate("/")}
                />
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    items={[
                        {
                            key: "categories",
                            label: "categories",
                            icon: <MenuOutlined />,
                            children: [
                                {
                                    key: "coffee",
                                    label: (
                                        <Typography.Link
                                            style={{ color: "black" }}
                                        >
                                            Coffee
                                        </Typography.Link>
                                    ),
                                },
                            ],
                        },
                    ]}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        backgroundColor: "grey",
                    }}
                />
                <Button
                    type="link"
                    style={{
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        backgroundColor: "grey",
                    }}
                    onClick={() => onNavigate("/cart")}
                >
                    <Badge count={5}>
                        <InboxOutlined
                            style={{ fontSize: "30px", color: "white" }}
                        />
                    </Badge>
                </Button>
            </Header>
            <Content
                style={{
                    padding: "0 10px",
                    minHeight: "calc(100vh - 64px - 24px - 24px)",
                }}
            >
                {/* <Breadcrumb
                        style={{
                            margin: "16px 0",
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                <div
                    style={{
                        marginTop: 15,
                        marginBottom: 16,
                        background: colorBgContainer,
                        minHeight: 280,
                        maxHeight: "auto",
                        padding: 15,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/* <CategoriesCard /> */}

                    {/* Todo for div below is for items it has to be dynamically following the data so it could be more efficient     */}
                    <div id={"items"}>
                        <Typography.Title level={4} style={{ marginTop: 3 }}>
                            Items
                        </Typography.Title>
                        <Row
                            style={{
                                marginTop: 8,
                            }}
                            gutter={{
                                xs: 2,
                                sm: 2,
                                md: 2,
                                lg: 4,
                            }}
                        >
                            {/* !!!!! */}
                            {/* Components for this is from CardItem.jsx user map to render each items */}
                            {/* !!!!! */}
                        </Row>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default MenuPage;
