import React from 'react';


export function elementCalculator(
    currentPosition: number,
    sectionPositionArray: IHeaderData[],
    startIndex: number,
    endIndex: number
): number {
    if (startIndex === endIndex) return startIndex;
    else if (startIndex === endIndex - 1) {
        if (
            Math.abs(
                sectionPositionArray[startIndex].ref.current.offsetTop -
                currentPosition
            ) <
            Math.abs(
                sectionPositionArray[endIndex].ref.current.offsetTop -
                currentPosition
            )
        )
            return startIndex;
        else return endIndex;
    } else {
        let nextNearest = ~~((startIndex + endIndex) / 2);
        let a = Math.abs(
            sectionPositionArray[nextNearest].ref.current.offsetTop -
            currentPosition
        );
        let b = Math.abs(
            sectionPositionArray[nextNearest + 1].ref.current.offsetTop -
            currentPosition
        );
        if (a < b) {
            return elementCalculator(
                currentPosition,
                sectionPositionArray,
                startIndex,
                nextNearest
            );
        } else {
            return elementCalculator(
                currentPosition,
                sectionPositionArray,
                nextNearest,
                endIndex
            );
        }
    }
}