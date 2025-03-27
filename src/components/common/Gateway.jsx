import axios from "axios";
import axiosInstance from "./GatewayInstance";

const baseUrl = process.env.REACT_APP_API_GATEWAY;

const accessToken = localStorage.getItem('accessToken');

export const get = async (path, opts) => {
    let result = {};

    await axiosInstance.get(baseUrl + path, {
        params: opts,
    }).then((response) => {
        if (response.status === 200) {
            result = response;
            result.status = response.status;
        }
    }).catch((error) => {
        result = error.response;
        console.log(error);
    });
    return result;
}

// export const post = async (path, payload) => {
//     let result = {};
//
//     await axios.post(baseUrl + path, payload, {
//
//     }).then((response) => {
//         if (response.status === 200) {
//             result = response;
//             result.status = response.status;
//         }
//     }).catch((error) => {
//         result = error.response;
//         console.log(error);
//     })
//     return result;
// }

export const post = async (path, payload) => {
    let result = {};

    await axiosInstance.post(baseUrl + path, payload, {})
        .then((response) => {
            if (response.status === 200) {
                result = response;
                result.status = response.status;
            }
        })
        .catch((error) => {
            result = error.response;
            console.log(error);
        })
    return result;
}

export const session = async () => {
    let result = {userName: ''};

    await axios.post(baseUrl + "/auth/session", {accessToken})
        .then((response) => {
            const data = response.data;
            result = {userName: data}
        })
        .catch((error) => {
            console.log(error)
        })
    return result;
}