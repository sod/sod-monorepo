export function swapArrayPosition<T>(array: T[], indexA?: number, indexB?: number): T[] {
    if (indexA != null && indexA >= 0 && indexA < array.length && indexB != null && indexB >= 0 && indexB < array.length) {
        const clone = array.slice();
        const [element] = clone.splice(indexA, 1);
        clone.splice(indexB, 0, element);
        return clone;
    }
    return array;
}
