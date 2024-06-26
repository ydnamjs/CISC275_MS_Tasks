/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }

    if (numbers.length == 1) {
        return [numbers[0], numbers[0]];
    }

    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newNumbers: number[] = numbers.map((n: number): number => n * 3);

    return newNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNumbers = numbers.map((word: string): number =>
        isNaN(parseInt(word)) ? 0 : parseInt(word)
    );

    return newNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // creates an array of strings: removed dollars, which has no dollar signs in the first characters.
    const removedDollars = amounts.map((word: string): string =>
        word[0] === "$" ? word.substring(1, word.length) : word
    );
    const numberedDolllars = stringsToIntegers(removedDollars);

    return numberedDolllars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let temp = messages.filter(
        (word: string): boolean => word[word.length - 1] !== "?"
    );

    temp = temp.map((word: string): string =>
        word[word.length - 1] === "!" ? word.toUpperCase() : word
    );
    return temp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const newColors = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );

    if (colors.length === newColors.length) {
        return true;
    }

    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    return sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //finds the first negative value in the array if one exists otherwise assigns -1
    const firstNegativeIndex = values.findIndex(
        (value: number): boolean => value < 0
    );
    //creates a clone of the array and removes every element after the negative if there is a negative
    const valuesReduced = [...values];
    if (firstNegativeIndex >= 0) {
        valuesReduced.splice(
            firstNegativeIndex,
            values.length - firstNegativeIndex
        );
    }
    //gets the sum of the subarray without the first negative or any elements after
    const sum = valuesReduced.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    //creates a clone of values and inserts the sum after the first negative if there is a first negative.
    //If there is not, it inserts the sum at the end of the list
    const sumAdded = [...values];
    if (firstNegativeIndex >= 0) {
        sumAdded.splice(firstNegativeIndex + 1, 0, sum);
    } else {
        sumAdded.splice(sumAdded.length + 1, 0, sum);
    }
    //returns the array with the sum added
    return sumAdded;
}
