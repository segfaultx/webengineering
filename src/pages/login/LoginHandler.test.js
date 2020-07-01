import loginToServer from "./LoginHandler"

test("loginToServer from LoginHandler", () => {
    expect(
        loginToServer("amatus", "amatus")
    ).toBeTruthy()
})