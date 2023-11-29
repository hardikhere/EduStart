import axios from "axios";

const axiosSchoolAdminInstance = axios.create();
axiosSchoolAdminInstance.interceptors.request.use(async req => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    const token = localStorage.getItem("afmt")
    req.headers.Authorization = `Bearer `.concat(token);
    return req;
});


export default axiosSchoolAdminInstance;