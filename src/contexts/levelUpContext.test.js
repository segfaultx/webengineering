import React, {useContext, useState} from "react"
import {LevelUpContext,LevelUpContextProvider} from "./levelUpContext"
import {fireEvent,render,screen} from "@testing-library/react"
import {monsterList} from "./levelUpConfig"


describe('levelUpContext',()=>{
    it('sets currentMonster to level4Monster', ()=>{

        const expectedImage=monsterList.monsterImages[3]
        const TestComponent=()=>{
            const {monsterImage}=useContext(LevelUpContext)
            const [testUpgradeAmount,setUpgradeAmount]=useState(2)

            return <>
                <div data-testid={"monsterImageName"}>{monsterImage.monsterImages[testUpgradeAmount]}</div>
                <button onClick={()=>setUpgradeAmount(3)}>Upgrade kaufen</button>
                </>
        }
        render(
            <LevelUpContextProvider>
                <TestComponent/>
            </LevelUpContextProvider>)
            fireEvent.click(screen.getByText("Upgrade kaufen"))
            expect(screen.getByTestId("monsterImageName").textContent).toBe(expectedImage)



    })

})