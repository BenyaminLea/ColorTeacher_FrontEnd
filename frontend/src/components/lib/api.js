import axios from 'axios'

const baseUrl = 'http://localhost:5000';

export async function getUsers(url) {
    const response = await axios.get(url)
    console.log(response);
    return response
}

export async function getScores(url) {
    const response = await axios.get(url)
    const data = response.data
    console.log(data);
    return data
}

export async function postSignUp(user = {}) {
    const response = await axios.post(baseUrl + "/api/users/", user)
    console.log(response);
    return response
}

export async function postLogin(user = {}) {
    const response = await axios.post(baseUrl + "/api/login/", user)
    console.log(response);
    return response
}