import axios from "axios";

const AxiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosPublic = () => {
  return AxiosPublic;
};

export default useAxiosPublic;
