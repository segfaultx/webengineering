const login = (username, pass) => {
    fetch("http://www.mocky.io/v2/5ebdbd303100005f00c5cd23", {
        method: "POST"
    })
        .then(result => {
            if (result.status === 200) {
                return result.json()
            }
                throw new Error("Invalid response")
        })
        .then(jsondata => {
            console.log(jsondata)
            return true
        })
        .catch(error => {
            console.error(error)
            return false
        })
}

export default login