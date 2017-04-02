import axios from 'axios'

const CLIEND_ID = 'ynsH1st6PtA5Ey3DBty58CKJm9RMe6Wp'
const DOMAIN_AUTH = 'https://smnodame.auth0.com'
const CONNECTION = 'Username-Password-Authentication'

export const signin = (email, password, callback) => {
    return axios.post(`${DOMAIN_AUTH}/oauth/ro`, {
            "client_id": CLIEND_ID,
            "username": email,
            "password": password,
            "connection": CONNECTION,
            "scope": "openid"
        })
        .then(function (response) {
            callback()
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const signup = (email, password, callback) => {
    return axios.post(`${DOMAIN_AUTH}/dbconnections/signup`, {
            "client_id": CLIEND_ID,
            "email": email,
            "password": password,
            "connection": CONNECTION
        })
        .then(function (response) {
            callback()
        })
        .catch(function (error) {
            console.log(error)
        })
}
