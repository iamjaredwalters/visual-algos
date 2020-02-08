/**
 * Time complexity: O(n^2)
 */
const bubble = (items: Array<number>) => {
    for (let i = 0; i < items.length - 1; i++) {
        // If the array is not need changed in a given pass then it is already sorted
        let changed = false;
        // Because the largest number will bubble to the highest index of the array in each iteration,
        // use `j < items.length - (i + 1)` to avoid sorting the already sorted parts at the end of the array
        for (let j = 0; j < items.length - (i + 1); j++) {
            if (items[j] > items[j + 1]) {
                // use array destructuring to avoid temp variable
                [items[j], items[j + 1]] = [items[j + 1], items[j]];
                // A change was made this pass, so the array was not sorted prior to this pass
                changed = true;
            }
        }

        if (!changed) {
            break
        }
    }
    return items;
};

export { bubble }
