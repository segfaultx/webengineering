import React from "react"
import {fireEvent, screen, render} from "@testing-library/react"
import CharacterFadeComponent from "./CharacterFadeInComponent"


test("CharacterFadeInComponent", () => {
    const mockCallbackFn = jest.fn()
    render(<CharacterFadeComponent callbackfn={mockCallbackFn}
                                   showCharacters={true}
                                   title={"The Archer"}
                                   img={null}
                                   text={""} type={"Archer"}/>)
    fireEvent.click(screen.getByText("Select this Character"))
    expect(mockCallbackFn).toHaveBeenCalledWith("Archer")
})