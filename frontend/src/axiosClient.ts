import  axios from "axios";

const axiosClient=axios.create({
    baseURL:"http://localhost:8080/api/products",
    headers:{
        "content-type": "application/json"
    },
});

export default axiosClient;