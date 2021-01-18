import axios from 'axios'

export async function getUsers(url) {
    const response = await axios.get(url)
    console.log(response);
    return response
}

export async function postSignUp (url = "", user = {}) {
    const response = await axios.post(url, user)
    console.log(response);
    return response
}

export async function postLogin (url = "", user = {}) {
    const response = await axios.post(url, user)
    console.log(response);
    return response
}