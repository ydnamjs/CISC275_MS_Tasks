import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(event.target.value);
    }

    function addAttempts() {
        if (!isNaN(parseInt(attemptsRequested))) {
            setAttemptsRemaining(
                attemptsRemaining + parseInt(attemptsRequested)
            );
        }
    }

    function decreaseAttemptsRemainingByOne() {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Remaining: {attemptsRemaining}</p>
            <Button
                onClick={decreaseAttemptsRemainingByOne}
                disabled={attemptsRemaining < 1}
            >
                use
            </Button>
            <Button onClick={addAttempts}>gain</Button>
            <Form.Group>
                <Form.Label>How many attempts would you like?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
        </div>
    );
}
