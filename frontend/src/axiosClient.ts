import  axios from "axios";

const axiosClient=axios.create({
    baseURL:"https://warehouse-management-system-pxu4.onrender.com",
    headers:{
        "content-type": "application/json"
    },
});

export default axiosClient;