import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(4);

    function increaseAttemptsByOne(): void {
        setAttemptsRemaining(attemptsRemaining + 1);
    }

    function decreaseAttemptsByOne(): void {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function setInProgressToTrue(): void {
        setIsInProgress(true);
    }

    function setInProgressToFalse(): void {
        setIsInProgress(false);
    }

    //Handles the starting of the quiz
    //decreases attempts by one and sets inProgress to true if there are attempts left.
    function handleStartQuiz(): void {
        if (attemptsRemaining > 0) {
            decreaseAttemptsByOne();
            setInProgressToTrue();
        }
    }

    return (
        <div>
            <div>{attemptsRemaining}</div>
            <Button
                onClick={handleStartQuiz}
                disabled={isInProgress || attemptsRemaining <= 0}
            >
                Start Quiz
            </Button>
            <Button onClick={setInProgressToFalse} disabled={!isInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={increaseAttemptsByOne} disabled={isInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
