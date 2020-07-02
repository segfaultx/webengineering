import Config from "../../config";
async function registerUser(username, pass) {
    return await fetch(`${Config.serverUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify({"username": username, "password": pass})
    })
        .then(result => {
            return result.status === 200;

        })
        .catch(error => {
            console.error(error)
            return false
        })
}

export default registerUser