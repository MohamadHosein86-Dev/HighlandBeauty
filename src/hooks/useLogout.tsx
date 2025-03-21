import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../servises/AthenacationApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate(); // هدایت به صفحه لاگین

    const { mutate: logout } = useMutation({
        mutationFn: async () => {
            await logoutApi(); // اجرای لاگ‌اوت
        },
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["user"] }); // حذف کش کاربر
            toast.success("شما با موفقیت خارج شدید از حسابتون");
            navigate("/", { replace: true }); // هدایت به صفحه لاگین
        },
    });

    return { logout };
}
