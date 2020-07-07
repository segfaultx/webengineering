import React from "react"
import { render, fireEvent, screen} from "@testing-library/react"
import loginToServer from "../../../pages/login/LoginHandler"
import MainPageHeader from "./MainPageHeaderComponent"
import Cookies from "js-cookie"
import {VolumeContextProvider} from "../../../contexts/volumeContext"
import {ClickContextProvider} from "../../../contexts/clickContext"
import {CPSContextProvider} from "../../../contexts/cpsContext"
window.HTMLMediaElement.prototype.load = () => {}

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

test('Logout onClick',  done => {
    function callback() {
        const token = Cookies.get("token")
        expect(token).not.toBeUndefined()
        render(
            <CPSContextProvider>
                <ClickContextProvider>
                    <VolumeContextProvider>
                        <MainPageHeader/>
                    </VolumeContextProvider>
                </ClickContextProvider>
            </CPSContextProvider>
        )

        fireEvent.click(
            screen.getByText("Logout")
        )

        expect(Cookies.get("token")).toBeUndefined()

        done()
    }

    loginToServer("amatus", "amatus").then(response => callback())

})
