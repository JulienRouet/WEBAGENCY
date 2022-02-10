import React, {useContext} from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const BoutonToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className="btn-toggle">Toggle</button>
    )
}

export default BoutonToggle;