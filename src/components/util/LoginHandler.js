import Config from "../../config"
import Cookie from "js-cookie"

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
    let token = null
    await postLoginToServer(username, pass).then(value => token = value)
    if (token !== null){
        Cookie.set("authorization", token.access_token, {httpOnly: true, authorization: "strict", secure:true})
        return true
    }
    return false
}
export default loginToServer