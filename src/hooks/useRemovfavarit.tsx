import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import {  removeFavaritTOUser } from "../servises/AthenacationApi";


export default function useRemovfavarit() {
  const queryClient = useQueryClient();

  const { mutate: removfavarit } = useMutation({
    mutationFn: removeFavaritTOUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", updatedUser.id], updatedUser);

      toast.success("کالای شما با موفقیت از صفحه علاقه مندی حذف شد .");
    },
    onError: () => {
      toast.error("خطا در حذف علاقه مندی , لطفاً دوباره تلاش کنید.");
    },
  });

  return { removfavarit };
}