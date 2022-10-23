import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            {answer === expectedAnswer && <div>✔️</div>}
            {answer !== expectedAnswer && <div>❌</div>}
            <Form.Group controlId="formMovieName">
                <Form.Label>Answer</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
        </div>
    );
}
