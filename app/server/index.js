import { jwt } from "../config/env";

const defaultHeader = new Headers();
defaultHeader.append("Access-Control-Allow-Origin", "*");

/**
 * Http get
 * @param {string} url url to call
 */
function get(url) {

    // Handle authentication
    const computedUrl = url + "?access_token=" + jwt;
    const request = new Request(computedUrl, {
        method: "GET",
        headers: defaultHeader
    })

    // Do the request
    return fetch(request).then((response) => {
        return handleResponse(response);
    }).catch(error => {
        return Promise.reject({ globalErrors: [error] });
    });
}

function handleResponse(response) {
    const contentType = response.headers.get("content-type");
    return response.json()
}

export { get };