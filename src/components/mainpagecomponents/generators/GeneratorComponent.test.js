import React from "react"
import {fireEvent, screen, render} from "@testing-library/react"
import GeneratorComponent from "./GeneratorComponent"
import {VolumeContextProvider} from "../../../contexts/volumeContext"
import generatorImages from "./generatorConfig"

window.HTMLMediaElement.prototype.load=()=>{}
window.HTMLMediaElement.prototype.play=()=>{}


test("GeneratorComponent", () => {
    const mockCallbackFn = jest.fn()
    const testId=2
    const testIncomeRate=10
    const testAmount=50
    const testPrice=100
    const stub={srcF: null,srcB:null, title: "Skelleton"}

    render(
        <VolumeContextProvider>
            <GeneratorComponent
            key = {testId}
            buyId={testId}
            image={stub}
            income_rate={testIncomeRate}
            amount={testAmount}
            price={testPrice}
            buyable = {true}
            onBuy={mockCallbackFn}/>
        </VolumeContextProvider>
        )
    fireEvent.click(screen.getByTestId(`${testId}_GeneratorTest`))
    expect(mockCallbackFn).toHaveBeenCalledWith(testId)
})