import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-job-chi.vercel.app",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};

export default useAxiousPublic;
