import axios from 'axios'

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