import React from "react";
import { render, fireEvent, screen} from "@testing-library/react"
import UpgradeComponent from "./UpgradeComponent";
import {VolumeContextProvider} from "../../../contexts/volumeContext";
window.HTMLMediaElement.prototype.load = () => {}

test('Upgrade onClick', () => {
    const onClickMock = jest.fn()
    const testId = 3
    render(
        <VolumeContextProvider>
            <UpgradeComponent
                id={testId}
                multiplier={10}
                cost={0}
                order={3}
                buyUpgrade={onClickMock}
                boughtStatus={false}
                >
            </UpgradeComponent>
        </VolumeContextProvider>

    )
    fireEvent.click(
        screen.getByTestId(`${testId}_buyImg`)
    )
    expect(onClickMock).toHaveBeenCalledWith(testId)
})
