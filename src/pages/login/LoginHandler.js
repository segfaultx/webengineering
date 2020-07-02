import Config from "../../config"
import Cookies from "js-cookie"

async function postLoginToServer(username, pass) {
    let requestBody = new URLSearchParams()
    requestBody.append("username", username)
    requestBody.append("password", pass)
    return await fetch(`${Config.serverUrl}/users/token`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        credentials: 'same-origin',
        body: requestBody
    })
        .then(result => {
            if (result.status === 200) {
                return result.json()
            }
            return null
        })
        .catch(error => {
            console.error(error)
            return null
        })
}

async function loginToServer(username, pass){
    return postLoginToServer(username, pass).then(response => {
        if (response){
            Cookies.set('token', response.access_token, {sameSite: "Strict", secure: false})
            Cookies.set('username', username)
            return true
        }
            return false
    })
}
export default loginToServer