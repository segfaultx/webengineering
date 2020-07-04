import registerUser from "./RegisterHandler"

test("registerUser from RegisterHandler", done => {
    function callback(response){
        expect(response).toBeTruthy()
        done()
    }
        registerUser(Math.random().toString(), Math.random().toString())
            .then(response => callback(response))
})