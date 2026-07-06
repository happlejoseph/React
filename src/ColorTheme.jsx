import { useState } from "react";

const Color = ()=> {
    const [bgColor, setBgColor] = useState("white")

    const ChangeColor = ()=> {

        if(bgColor === "white") {
            setBgColor("black")
        }
    }
}