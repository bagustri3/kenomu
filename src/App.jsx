import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import MenuPage from "./components/Menu/MenuPage";
import MenuDetailPage from "./components/Menu/MenuDetailPage";
import CartPage from "./components/Cart/CartPage";
import { CartStore, UserStore } from "./App/Store.jsx";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
function App() {
    return (
        <CartStore>
            <UserStore>
                <BrowserRouter>
                    <ConfigProvider
                        theme={{
                            components: {
                                Layout: {
                                    headerBg: "grey",
                                    headerColor: "white",
                                },
                                Menu :{
                                  colorText : "white"
                                }
                            },
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/menu" element={<MenuPage />} />
                            <Route
                                path="/menu/:id"
                                element={<MenuDetailPage />}
                            />
                            <Route path="/cart" element={<CartPage />} />
                        </Routes>
                    </ConfigProvider>
                </BrowserRouter>
            </UserStore>
        </CartStore>
    );
}

export default App;
