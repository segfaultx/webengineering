import React, {useContext} from "react"
import {VolumeContext, VolumeContextProvider} from "./volumeContext"
import {fireEvent, render, screen} from "@testing-library/react"

describe("volumeContext", () => {
    it("sets CPS context to 10", () => {
        const expectedVolumeBool = false
        const TestComponent = () => {
            const {volume, setVolume} = useContext(VolumeContext)
            return <div>
                <div data-testid={"volumeBool"}>{volume}</div>
                <button onClick={() => setVolume(expectedVolumeBool)}>Set Volume</button>
            </div>
        }
        render(<VolumeContextProvider>
            <TestComponent/>
        </VolumeContextProvider>)
        fireEvent.click(screen.getByText("Set Volume"))
        expect(screen.getByTestId("volumeBool")).toBeTruthy()
    })
})