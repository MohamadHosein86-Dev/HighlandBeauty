import { ProductType } from "./getProdcts"


export interface LogInPropType {
 email:string
  password:string
  name?:string
}
export interface NewUserType {
  email:string
  password:string
  name:string,
  
}
export interface UserType {
    id: string,
    email:string
    password:string
    name:string,
    orders:orderType[]
    favarits:ProductType[]
}
interface orderType {
    name:string
    lastname:string
    phone:string
    ostsan:string
    city:string
    street:string
    totalPricePost:string
    toPay:string
    numberOfProduct:string,
    idOrder:number,
    postOfname:string
    postOfPrice:number,
    numberpost:string,
    orderDate:string
    products:ProductType,
    statusOrder:string
}
interface addOrderToUserType{
  id:string,
  order:object
}
interface addfavaritToUserType{
  id:string,
  proudct:ProductType
}



export async function signUp  ({email , password , name  }: NewUserType)  {

  const response1 = await fetch("https://67d5c4f5286fdac89bc05a75.mockapi.io/users");


  const response10 = await response1.json();
  const users = response10 as UserType[];

  const isUserLoged = users.some((res)=> res.email == email );
  
  
  if(isUserLoged){
    throw new Error(" این ایمیل قلبلا در سایت ثبت شده  ");
  }

  try {
    const response = await fetch("https://67d5c4f5286fdac89bc05a75.mockapi.io/users",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
  
      body:JSON.stringify({
        email ,
        password ,
        name ,
      })
    });
    
    const response1 = await response.json() as UserType;
    
    return response1 ;
    
  } 
  catch (error) {
    console.error(error)
  }
};

export async function getOrdersUser(id:string) {
  
  
  try {
      const response = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
          
      return data as UserType ;
  }
  
   catch (error) {
      console.error('Error:', error);
  }
}

export const logIn = async ({email , password }:LogInPropType) => {

  const response = await fetch("https://67d5c4f5286fdac89bc05a75.mockapi.io/users");
  
  if(!response.ok){
      throw new Error(" there was Error In Login");
  }

  const response1 =await response.json();
  const users= response1 as UserType[];

  const user = users.find((res)=>res.email == email && res.password === password);


  return user ;
};


export async function addOrderToUser({ id, order }: addOrderToUserType) {

  
  
  try {
    // دریافت اطلاعات کامل کاربر
    const userResponse = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`);
    
    if (!userResponse.ok) {
      throw new Error(`Error fetching user: ${userResponse.status}`);
    }
    
    const userData = await userResponse.json();
    
    // **اضافه کردن سفارش جدید به `orders`**
    const updatedOrders = Array.isArray(userData.orders) ? [...userData.orders, order] : [order];
    
    // **استفاده از `PUT` و ارسال کل اطلاعات کاربر**
    const response = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData, // ✅ ارسال کل اطلاعات کاربر
        orders: updatedOrders, // 🆕 به‌روزرسانی لیست سفارشات
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Error updating user: ${response.status}`);
    }
    
    const updatedUser = await response.json();

    return updatedUser as UserType;
  } catch (error) {
    console.error("Error updating user orders:", error);
    throw error;
  }
}

export async function addFavaritToUser({id, proudct}:addfavaritToUserType) {
  try {
    // دریافت اطلاعات کاربر
    const userResponse = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`);

    if (!userResponse.ok) {
      throw new Error(`Error fetching user: ${userResponse.status}`);
    }

    const userData = await userResponse.json();

    // بررسی وجود orders و مقداردهی پیش‌فرض به آرایه
    const updateData = Array.isArray(userData.favarits) ? [...userData.favarits, proudct] : [proudct];

    // به‌روزرسانی کاربر
    const response = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData ,
        favarits: updateData,
      }),
    });

    const updatedUser = await response.json();

    return updatedUser as addOrderToUserType;


  } 
  catch (error) {
        console.error("Error updating user orders:", error);
        throw error;
  }
}

export async function removeFavaritTOUser({id, proudct}:addfavaritToUserType) {
  try {
    // دریافت اطلاعات کاربر
    const userResponse = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`);

    if (!userResponse.ok) {
      throw new Error(`Error fetching user: ${userResponse.status}`);
    }

    const userData = await userResponse.json();

    // بررسی وجود favarits و فیلتر کردن محصول مورد نظر
    const updatedFavarits = Array.isArray(userData.favarits)
      ? userData.favarits.filter((item:ProductType) => item.id !== proudct?.id)
      : [];

    // به‌روزرسانی اطلاعات کاربر
    const response = await fetch(`https://67d5c4f5286fdac89bc05a75.mockapi.io/users/${id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData ,
        favarits: updatedFavarits,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error updating user favarits: ${response.status}`);
    }

    const updatedUser = await response.json();

    return updatedUser as addOrderToUserType;
  } catch (error) {
    console.error("Error removing item from favarits:", error);
    throw error;
  }
}


export async function getCurrentUser  () {
  const storageUser = localStorage.getItem("user");
  if(!storageUser) return null;

  const paresedUser = JSON.parse(storageUser);

  
  return paresedUser as UserType;
  
};

export const logout = async () => {
  localStorage.clear();
}