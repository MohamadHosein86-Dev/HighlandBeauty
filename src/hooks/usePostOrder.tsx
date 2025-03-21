import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addOrderToUser as addOrderApi }from "../servises/AthenacationApi";

export default function useAddOrder() {
  const queryClient = useQueryClient();

  const { mutate: addOrder  } = useMutation({
    mutationFn: addOrderApi,
    onSuccess: (data) => {
       queryClient.invalidateQueries({ queryKey: ["user", data.id] });
       queryClient.setQueryData(["user", data.id], data);
      
      toast.success("سفارش با موفقیت ثبت شد!");
    },
    onError: () => {
      toast.error("خطا در ثبت سفارش، لطفاً دوباره تلاش کنید.");
    },
  });

  return { addOrder };
}