import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Applayout from "./ui/Applayout";
import Homepage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProudctPage from "./pages/ProudctPage";
import { Provider } from "react-redux";
import store, { persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ShopPage from "./pages/ShopPage";
import { Toaster } from "react-hot-toast";
import Account from "./ui/Account";
import Cart from "./ui/Cart";
import Checkout from "./ui/Checkout";
import OrderReceived from "./ui/OrderReceived";
import Orders from "./ui/Orders";
import PageOrder from "./ui/PageOrder";
import Favarit from "./ui/Favarit";
import ContactUs from "./ui/ContactUs";
import Blog1 from "./ui/Blog1";
import Blog2 from "./ui/Blog2";
import Blog3 from "./ui/Blog3";

const queryClinet = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 0 
    }
  }
});


const router = createBrowserRouter([
  {element:<Applayout /> , children:[
    { element :<Homepage />, path:"/"},
    {element :<AboutUsPage/> , path:"/about-us" },
    {element :<ContactUs/> , path:"/contact-us" },
    {element :<Blog1/> , path:"/blog1" },
    {element :<Blog2/> , path:"/blog2" },
    {element :<Blog3/> , path:"/blog3" },
    {element:<ProudctPage /> , path:"/product/:id"},
    {element:<ShopPage /> , path:"/shop"},
    {element:<Account /> , path:"/my-account" ,children:[
      {element:<Orders/> , path:"orders"},
      {element:<PageOrder /> ,path:"view-order/:idOrder"},
      {element:<Favarit /> ,path:"favarit"}
    ] },
    {element:<Cart /> , path:"/cart" },
    {element:   <Checkout />   , path:"/checkout" },
    {element:  <OrderReceived /> , path:"/order-received" },
  ]}
]);


function App() {

  return (
    <Provider store={store}>
        <PersistGate  loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClinet} >
              <ReactQueryDevtools />
              <RouterProvider router={router} />
                 <Toaster position="top-center" gutter={12} containerStyle={{margin : "8px"}}
                    toastOptions={{
                    success:{
                      duration:3000  
                      },
                      error:{
                        duration:5000
                      }
                      ,
                      style : {
                        fontSize:"16x",
                        maxWidth:"500px",
                        padding:"16px 24px",
                        backgroundColor:"white",
                        color:"black"
                      }
                 }} />
            </QueryClientProvider>
        </PersistGate>
    </Provider>
  )
}

export default App

