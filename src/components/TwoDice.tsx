import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [firstDie, setFirstDie] = useState<number>(1);
    const [secondDie, setSecondDie] = useState<number>(6);

    function rollLeft(): void {
        setFirstDie(d6());
    }

    function rollRight(): void {
        setSecondDie(d6());
    }

    return (
        <div>
            {" "}
            <div>
                {(firstDie === 1 && secondDie === 1 && <div>Lose</div>) ||
                    (firstDie !== 1 && firstDie === secondDie && (
                        <div>Win</div>
                    ))}
            </div>
            <div>
                <span data-testid="left-die">{firstDie}</span>
                <span data-testid="right-die">{secondDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
        </div>
    );
}
