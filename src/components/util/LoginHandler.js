const login = (username, pass) => {
    fetch("http://www.mocky.io/v2/5ebdbd303100005f00c5cd23", {
        method: "POST"
    })
        .then(result => {
            if (result.status === 200) {
                return result.json()
            } else {
                return null
            }
        })
        .then(jsondata => console.log(jsondata))
        .catch(error => console.error(error))
    console.log(username, pass)
}

export default login