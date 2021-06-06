import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(async req => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    const token = localStorage.getItem("fmt")
    req.headers.Authorization = `Bearer `.concat(token);
    return req;
});


export default axiosInstance;