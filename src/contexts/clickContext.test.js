import React, {useContext} from "react"
import {ClickContext, ClickContextProvider} from "./clickContext"
import {fireEvent, render, screen} from "@testing-library/react"

describe("clickContext", () => {
    it("sets CPS context to 10", () => {
        const expectedClicksAmount = 10
        const TestComponent = () => {
            const {clicks, setClicks} = useContext(ClickContext)
            return <div>
                <div data-testid={"clickCounter"}>{clicks}</div>
                <button onClick={() => setClicks(expectedClicksAmount)}>Increase Clicks</button>
            </div>
        }
        render(<ClickContextProvider>
            <TestComponent/>
        </ClickContextProvider>)
        fireEvent.click(screen.getByText("Increase Clicks"))
        expect(screen.getByTestId("clickCounter").textContent).toBe(expectedClicksAmount.toString())
    })
})