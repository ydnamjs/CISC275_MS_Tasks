import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("YOUR NAME");

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateUserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>

            <Form.Check
                type="switch"
                id="isEditModeCheck"
                label="Edit-Mode"
                checked={isEditMode}
                onChange={updateEditMode}
            />
            {!isEditMode && (
                <div>
                    {userName} is {isStudent ? "" : "not"} a student
                </div>
            )}
            {isEditMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="isStudentCheck"
                        label="Student"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Group controlId="formStudentName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateUserName}
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
