import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5015",
  withCredentials: true,
});
const useAxiousPublic = () => {
  return axiosPublic;
};

export default useAxiousPublic;
