import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { logIn as loginApi } from "../servises/AthenacationApi";

export default function useLogin() {
    const quryClient = useQueryClient();
    const navigate =useNavigate();

    const {mutate:login }=useMutation({
        mutationFn:loginApi,

        onSuccess:(data)=>{
            
            if(!data){
                toast.error(" ایمیل یا رمز را اشتباه وارد کردین ");
            }
            else{
                quryClient.setQueryData(["user"] , data);
                localStorage.setItem("user", JSON.stringify(data));
                toast.success("شما با موفقیت وارد حسابتون شدید");
                navigate("/shop");
            }

        },
        onError:()=>{
            toast.error("پسورد یا ایمیل شما اشتباه هست");
        }
    })

    return { login };
}