import axios from 'axios'

const baseUrl = 'https://group-project-itc.herokuapp.com';

export async function getUsers() {
    const response = await axios.get(baseUrl + '/api/users')
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

export async function updateUser(userId='', user = {}) {
    const response = await axios.put(baseUrl + `/api/users/${userId}`, user)
    console.log(response);
    return response
}

export async function postLogin(user = {}) {
    const response = await axios.post(baseUrl + "/api/login/", user)
    console.log(response);
    return response
}