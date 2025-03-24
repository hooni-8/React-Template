import axios from "axios";

const baseUrl = process.env.REACT_APP_API_GATEWAY;

export const get = async (path, opts) => {
    let result = {};

    await axios.get(baseUrl + path, {
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

export const post = async (path, payload) => {
    let result = {};

    await axios.post(baseUrl + path, payload, {

    }).then((response) => {
        if (response.status === 200) {
            result.data = response;
            result.status = response.status;
        }
    }).catch((error) => {
        result = error.response;
        console.log(error);
    })
    return result;
}