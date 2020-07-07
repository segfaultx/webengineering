import loginToServer from "./LoginHandler"

test("loginToServer from LoginHandler", done => {
    function callback(response){
        expect(response).toBeTruthy()
        done()
    }
    loginToServer("amatus", "amatus").then(result => callback(result))
})