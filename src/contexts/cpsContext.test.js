import React, {useContext} from "react"
import {CPSContext, CPSContextProvider} from "./cpsContext"
import {fireEvent, render, screen} from "@testing-library/react"

describe("cpsContext", () => {
    it("sets CPS context to 10", () => {
        const expectedCpsAmount = 10
        const TestComponent = () => {
            const {cps, setCPS} = useContext(CPSContext)
            return <div>
                <div data-testid={"cpsCounter"}>{cps}</div>
                <button onClick={() => setCPS(expectedCpsAmount)}>Increase CPS</button>
            </div>
        }
        render(<CPSContextProvider>
            <TestComponent/>
        </CPSContextProvider>)
        fireEvent.click(screen.getByText("Increase CPS"))
        expect(screen.getByTestId("cpsCounter").textContent).toBe(expectedCpsAmount.toString())
    })
})