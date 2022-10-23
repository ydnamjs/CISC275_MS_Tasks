import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>

            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label={<p style={{ backgroundColor: "red" }}>red</p>}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label={<p style={{ backgroundColor: "orange" }}>orange</p>}
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label={<p style={{ backgroundColor: "yellow" }}>yellow</p>}
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label={<p style={{ backgroundColor: "green" }}>green</p>}
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label={<p style={{ backgroundColor: "blue" }}>blue</p>}
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-indigo"
                label={<p style={{ backgroundColor: "indigo" }}>indigo</p>}
                value="indigo"
                checked={color === "indigo"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-violet"
                label={<p style={{ backgroundColor: "violet" }}>violet</p>}
                value="violet"
                checked={color === "violet"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                label={<p style={{ backgroundColor: "pink" }}>pink</p>}
                value="pink"
                checked={color === "pink"}
            />
            <p>
                You have chosen{" "}
                {
                    <span
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </span>
                }
            </p>
        </div>
    );
}
