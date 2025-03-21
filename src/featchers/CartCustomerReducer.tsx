import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../servises/getProdcts";


const initialState = {
    cartProducts : [] as ProductType[],
    favariteProducts : [],
    totalPrice :0 ,
    ProductLength : 0 ,
    IDorder:"" as number | "",
    idUser:""
};

const CartCustomerReducer = createSlice({
    name:"CartCustomer",
    initialState ,
     reducers:{
        addToCart:(state = initialState , action:PayloadAction<ProductType>)=>{

            const existingProduct = state.cartProducts.find((res:ProductType)=>res.id === action.payload.id  );     
            if(!existingProduct){
                state.cartProducts.push({...action.payload , quantity : 1});
            }
            state.totalPrice = state.cartProducts.reduce((total, product:ProductType) => {
                const discount = product.discount / 100; // تبدیل 10 به 0.1 و 15 به 0.15
                const discountAmount = product.price * discount;
                const finalPrice = product.price - discountAmount;
                return total + finalPrice * product.quantity;
            }, 0);
            state.ProductLength = state.cartProducts.reduce((total , product:ProductType)=> total + product.quantity , 0);
        },
        updatequantity: (state = initialState, action:PayloadAction<ProductType>) => {
            const productIndex = state.cartProducts.findIndex((res: ProductType) => res.id === action.payload.id);
            console.log("سبد خرید:", JSON.stringify(state.cartProducts));
            if (productIndex > -1) {
                state.cartProducts = state.cartProducts.map((product, index) =>
                    index === productIndex  ?  { ...product, quantity: product.quantity + 1 }  : product 
                );
            }

            state.totalPrice = state.cartProducts.reduce((total, product:ProductType) => {
                const discount = product.discount / 100; // تبدیل 10 به 0.1 و 15 به 0.15
                const discountAmount = product.price * discount;
                const finalPrice = product.price - discountAmount;
                return total + finalPrice * product.quantity;
            }, 0);
            state.ProductLength = state.cartProducts.reduce((total , product:ProductType)=> total + Number(product.quantity) , 0);
        },
        munesquantity:(state = initialState , action:PayloadAction<ProductType>)=>{
            const existingProduct = state.cartProducts.find((res:ProductType)=>res.id === action.payload.id  ); 

            if(existingProduct && existingProduct.quantity > 1 ){
                existingProduct.quantity -= 1;
            }

            state.totalPrice = state.cartProducts.reduce((total, product:ProductType) => {
                const discount = product.discount / 100; // تبدیل 10 به 0.1 و 15 به 0.15
                const discountAmount = product.price * discount;
                const finalPrice = product.price - discountAmount;
                return total + finalPrice * product.quantity;
            }, 0);
            state.ProductLength = state.cartProducts.reduce((total , product:ProductType)=> total + product.quantity , 0);
        },
        deleteProduct:(state = initialState , action)=>{

            state.cartProducts = state.cartProducts.filter((res) => res.id !== action.payload.id );

            state.totalPrice = state.cartProducts.reduce((total, product:ProductType) => {
                const discount = product.discount / 100; // تبدیل 10 به 0.1 و 15 به 0.15
                const discountAmount = product.price * discount;
                const finalPrice = product.price - discountAmount;
                return total + finalPrice * product.quantity;
            }, 0);
            state.ProductLength = state.cartProducts.reduce((total , product:ProductType)=> total + product.quantity , 0);
        },
        deleteAllProduct:(state = initialState )=>{

            state.cartProducts = [];

            state.totalPrice = 0; // تنظیم قیمت کل به صفر
            state.ProductLength = 0; // تنظیم تعداد محصولات به صفر
        },
        addToId:(state = initialState ,action)=>{
            state.IDorder = action.payload ;
        },
        addIduser:(state = initialState ,action)=>{
            state.idUser =action.payload
        }
       
     }
});
export const {addToCart ,deleteProduct ,addToId ,deleteAllProduct , updatequantity  , munesquantity} = CartCustomerReducer.actions;
export default CartCustomerReducer.reducer;