import { NumberCollection } from './NumberCollection'

interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;


}

export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    // constructor(public collection: Sortable) {
    //     // this.collection = collection;

    // }
    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {


                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }


                /* //if collection is a string, do this logic instead
                // logic to compare and swap characters a string
                if (typeof (this.collection) == 'string') {

                }
 */

            }
        }

    }
}