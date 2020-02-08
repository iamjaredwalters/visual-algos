import Sort from '../algorithms/sort/Sort';

describe('Bubble Sort', () => {
    it('sorts array from least to greatest', () => {
        const arr = [5, 8, 3, 1, 9, 2, 0, 4];
        const sorted = Sort.bubble(arr);

        expect(sorted).toEqual([0, 1, 2, 3, 4, 5, 8, 9]);
    });
});
