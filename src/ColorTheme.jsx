import { useState } from "react";

const Color = ()=> {
    const [bgColor, setBgColor] = useState("white")

    const ChangeColor = ()=> {

        if(bgColor === "white") {
            setBgColor("black")
        }
        else {
            setBgColor("white")
        }
    }

    return(
        <div
        style= {
            {backgroundColor: bgColor,
                height: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"

            }
        }>
        </div>
    )
}