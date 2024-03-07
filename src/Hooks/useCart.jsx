import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cartsItems", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cartItems, refetch];
};

export default useCart;
