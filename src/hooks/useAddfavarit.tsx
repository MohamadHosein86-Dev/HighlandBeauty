import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addFavaritToUser } from "../servises/AthenacationApi";


export default function useAddfavarit() {
  const queryClient = useQueryClient();

  const { mutate: addfavarit } = useMutation({
    mutationFn: addFavaritToUser,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(["user", updatedUser.id], updatedUser);

      toast.success("کالای شما با موفقیت ب صفحه علاقه مندی ذخیره شد .");
    },
    onError: () => {
      toast.error("خطا در ثبت علاقه مندی , لطفاً دوباره تلاش کنید.");
    },
  });

  return { addfavarit };
}