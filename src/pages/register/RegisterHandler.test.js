import registerUser from "./RegisterHandler"

test("registerUser from RegisterHandler", () => {
    expect(
        registerUser(Math.random().toString(), Math.random().toString())
    ).toBeTruthy()
})