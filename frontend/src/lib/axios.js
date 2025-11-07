import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials:true //by adding this browser will send cookies to server along with simple requests
});
export default axiosInstance;