import React, {useContext} from "react"
import {GenerateArmyContext, GenerateArmyContextProvider} from "./generateArmyContext"
import {fireEvent, render, screen} from "@testing-library/react"

describe("generateArmyContext", () => {
    it("sets generateArmy context", () => {
        const stub={srcF: null,srcB:null, title: "Skelleton"}
        const testKey=Math.random()

        const inputInArmy=<img data-testid={testKey}
                               alt="none"
                               key={testKey}
                               style={{position:"absolute",
                                 bottom: 50 + Math.random()*10,
                                 left:450 + Math.random()*1000,
                                 zIndex:2}}
                               src={stub.srcF}/>

        const TestComponent = () => {
            const {army, setArmy} = useContext(GenerateArmyContext)
            return <div>
                <button onClick={() => setArmy(inputInArmy)}>Set Army</button>
                {army}
            </div>
        }

        render(<GenerateArmyContextProvider>
            <TestComponent/>
        </GenerateArmyContextProvider>)
        fireEvent.click(screen.getByText("Set Army"))
        expect(screen.getByTestId(testKey.toString()).getAttribute("data-testid")).toBe(testKey.toString())
    })
})