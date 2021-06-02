import { Sorter } from './Sorter'

export class NumberCollection extends Sorter {
    // data: number[];
    constructor(public data: number[]) {
        super();
        this.data = data;

    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]

    }
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    get length(): number {
        return this.data.length;
    }

}

const collection = new NumberCollection([1, 2, 3]);
collection.length;