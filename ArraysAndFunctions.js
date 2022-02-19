// working along with the labs

var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

for (let i=0; i<customerNames.length; i++) {
    console.log(customerNames[i]);
}

// why does this work? what is "name"

for(name of customerNames) {
    console.log(name);
}


function myFunction () {
    for (let i=0; i<100; i++) {
        console.log(i);
    }
}
myFunction();

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);

}
createFullName('Leah', 'Nassar');

let names = ['Jin','Jimin','Jungkook','V','RM','Suga','J-Hope'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 10);
console.log(sum);

names.forEach(function(element){
    console.log(element);
});

let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement);

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    printDVDName: function(){
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();


