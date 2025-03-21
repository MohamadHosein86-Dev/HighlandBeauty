import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as sighUpApi } from "../servises/AthenacationApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
    
    const quryClient = useQueryClient();
    const navigate =useNavigate();

    const {mutate:signUpAp   }=useMutation({

        mutationFn:sighUpApi,
        onSuccess:(data)=>{
            quryClient.setQueryData(["user"],data);
            localStorage.setItem("user",JSON.stringify(data));
            toast.success(" با موفقیت حساب تان را ساختین");
            navigate("/shop");
        },
        onError:()=>{
            toast.error(" لطفا ایمیل و رمز درست وارد کنید ");
        }
    })

    return {signUpAp};
}
