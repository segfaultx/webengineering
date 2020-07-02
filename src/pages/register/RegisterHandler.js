import Config from "../../config";
async function registerUser(username, pass) {
    let response = await fetch(`${Config.serverUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify({"username": username, "password": pass})
    })
    return response.status === 200;
}

export default registerUser