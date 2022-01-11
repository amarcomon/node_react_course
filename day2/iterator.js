let arr = ['pepe', 'tete', 'coco'];
let itr = arr[Symbol.iterator]();
// iterator is type safe pointer to a collection

for(let i=itr.next(); i.done!== true; i = itr.next()) {
    console.log(i.value);
}