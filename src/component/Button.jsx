import { useState } from "react";
import './Button.css';

export default function Button(props) {
    const { color, disabled, children, handleClick } = props;

    const [isDisabled, setIsDisabled] = useState(disabled);
    const [colorState, setColorState] = useState(color);

    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: colorState }}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}