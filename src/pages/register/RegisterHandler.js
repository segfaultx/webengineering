import Config from "../../config"

/**
 * Method to send a post request to server in an attempt to register the user,
 * returns true if success, else false
 * @param username
 * @param pass
 * @returns {Promise<boolean>}
 */
async function registerUser(username, pass) {
    let response = await fetch(`${Config.serverUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify({"username": username, "password": pass})
    })
    return response.status === 200;
}

export default registerUser