import axios from "axios";

const baseUrl = "http://localhost:8080";
// const baseUrl = process.env.REACT_APP_API_GATEWAY;

const defaultOptions = {
    withCredentials: "same-site"
}

export const get = async (path, opts) => {
    let result = {};

    await axios.get(baseUrl + path, {
        params: opts,
    }).then((response) => {
        if (response.status === 200) {
            result = response.data;
            result.status = response.status;
        }
    }).catch((error) => {
        result = error.response;
        console.log(error);
    });
    return result;
}

export const post = async (path, payload) => {
    let result = {};

    await axios.post(baseUrl + path, payload, {
        withCredentials: "same-site",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.status === 200) {
            result = response.data;
            result.status = response.status;
        }
    }).catch((error) => {
        result = error.response;
        console.log(error);
    })
    return result;
}