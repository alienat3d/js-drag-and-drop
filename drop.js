const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone3 = document.querySelector('.zone-3');
const zone4 = document.querySelector('.zone-4');
const ufo = document.querySelector('#ufo');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone3.ondragover = allowDrop;
zone4.ondragover = allowDrop;

function allowDrop(event) {
    event.preventDefault();
}

ufo.ondragstart = drag;

function drag(event) {
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;
zone3.ondrop = drop;
zone4.ondrop = drop;

function drop(event) {
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
}