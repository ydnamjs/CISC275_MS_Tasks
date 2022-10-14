import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibility, setVisible] = useState<boolean>(false);

    function invertVisibility(): void {
        setVisible(!visibility);
    }

    return (
        <div>
            {" "}
            <Button onClick={invertVisibility}>Reveal Answer</Button>
            {visibility && <div>42</div>}
        </div>
    );
}
