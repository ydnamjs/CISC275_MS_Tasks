import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Chinese New Year");

    function advanceByAlphabet(): void {
        if (holiday === "Banana Day") {
            setHoliday("Chinese New Year");
        } else if (holiday === "Chinese New Year") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Summer");
        } else if (holiday === "Summer") {
            setHoliday("Banana Day");
        }
    }

    function advanceByYear(): void {
        if (holiday === "Chinese New Year") {
            setHoliday("Banana Day");
        } else if (holiday === "Banana Day") {
            setHoliday("Summer");
        } else if (holiday === "Summer") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Chinese New Year");
        }
    }

    function convertHolidayToEmoji(): string {
        if (holiday === "Chinese New Year") {
            return "🐉";
        } else if (holiday === "Banana Day") {
            return "🍌";
        } else if (holiday === "Summer") {
            return "☀️";
        } else if (holiday === "Halloween") {
            return "🎃";
        }
        //christmas
        return "🎄";
    }

    return (
        <div>
            <div>Holiday: {convertHolidayToEmoji()}</div>
            <div>
                <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
