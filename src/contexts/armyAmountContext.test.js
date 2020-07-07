import React, {useContext} from "react"
import {ArmyAmountContext, ArmyAmountProvider} from "./armyAmountContext"
import {fireEvent, render, screen} from "@testing-library/react"

describe("armyAmountContext", () => {
    it("sets armyAmount context to 10", () => {
        const expectedArmyAmount = 10
        const TestComponent = () => {
            const {armyAmount, setArmyAmount} = useContext(ArmyAmountContext)
            return <div>
                <div data-testid={"ArmyAmountCounter"}>{armyAmount}</div>
                <button onClick={() => setArmyAmount(expectedArmyAmount)}>Increase amount of Army</button>
            </div>
        }
        render(<ArmyAmountProvider>
            <TestComponent/>
        </ArmyAmountProvider>)
        fireEvent.click(screen.getByText("Increase amount of Army"))
        expect(screen.getByTestId("ArmyAmountCounter").textContent).toBe(expectedArmyAmount.toString())
    })
})