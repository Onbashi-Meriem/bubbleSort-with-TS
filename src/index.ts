import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numberCollection = new NumberCollection([0, -3, 10, -25])
// const sorter = new Sorter(numberCollection);
// sorter.sort();
numberCollection.sort()
console.log(numberCollection.data)

const charactersCollection = new CharacterCollection('aXyzbk');
// const sorterCharacter = new Sorter(charactersCollection);
// sorterCharacter.sort()
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorterLink = new Sorter(linkedList);
// sorterLink.sort();
linkedList.sort()
linkedList.print();




