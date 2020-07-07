import React, {useContext, useState} from "react"
import {BoughtUpgradeContext,BoughtUpgradeContextProvider} from "./boughtUpgradesContext"
import {fireEvent,render,screen} from "@testing-library/react"

describe("boughtUpgradesContext",()=>{
    it("length of BoughtUpgradeList change after buy Button clicked",()=>{
        const currentLength=0
        const expectedLength=currentLength+1

        const TestComponent=()=>{
            const {boughtUpgrades,setBoughtUpgrades}=useContext(BoughtUpgradeContext)

            return <>
                <div data-testid={"upgradeAmount"}>{boughtUpgrades.length}</div>
                <button onClick={()=>setBoughtUpgrades([...boughtUpgrades,"lala"])}>Upgrade kaufen</button>
                </>
        }
        render(<BoughtUpgradeContextProvider>
            <TestComponent/>
        </BoughtUpgradeContextProvider>)
        fireEvent.click(screen.getByText("Upgrade kaufen"))
        expect(screen.getByTestId("upgradeAmount").textContent).toBe(expectedLength.toString())
    })
})
