'use strict'

/* global */
const element = document.getElementById('DeusE')
const elementCount = element.childElementCount;
let iteration=0; /* iteration */
let delay= 0;
let timeout = setInterval(deus, 100);

function switchStatus(style, tumbler) {
    if(tumbler === 0){
        element.children[iteration].classList.add(style);
        iteration++;
    }
    else{
        element.children[iteration-1].classList.remove(style);
        iteration--;
    };
}

/*Deus*/

let tumblerForDeus=0; /* 0 = on and 1 = off and 2 = make next animation before */

function deus() {
    if(delay<90){
        delay++;
    }
    else
    if(delay === 90){
        switchStatus('DeusExx', tumblerForDeus)
        if(iteration === elementCount){
            tumblerForDeus++;
            delay=0;
        };
        if(iteration ===0){
            tumblerForDeus++;
            delay=0;
        };
        if(tumblerForDeus === 2) {
            clearTimeout(timeout)
            timeout = setInterval(mirror, 100)
            delay = 0
            tumblerForDeus = 0
            console.log(`stop timeoutDeus`)
            
        }
    } else {
        alert('error on Deus')
    }
};

/*Mirror*/


let tumblerForMirror=0; /* 0 = on and 1 = off and 2 = make next animation before */

function mirror(){
    if(delay < 130){
        delay++;
    }
    if(tumblerForMirror === 0 && delay === 100){
        for(let i = 0; i < elementCount; i++) {
            element.children[i].classList.add('MirrorSlide')
        }
    }
    if(tumblerForMirror === 0 && delay === 130){
        switchStatus('Mirror', tumblerForMirror)
        if(iteration === elementCount){
            tumblerForMirror = 1;
            delay=0;
        };
    }
    
    if(tumblerForMirror === 1 && delay === 100) {
        for (let i = 0; i < elementCount; i++) {
            element.children[i].classList.add('MirrorBackSlide')
            element.children[i].classList.remove('MirrorSlide');
            element.children[i].classList.remove('Mirror')
        }
        delay=0;
        tumblerForMirror = 2;
        iteration = 0
    }
    if(tumblerForMirror === 2 && delay === 130) {
        for (let i = 0; i < elementCount; i++) {
            element.children[i].classList.add('MirrorRevers');
            element.children[i].classList.remove('MirrorBackSlide');
        }
        tumblerForMirror = 3;
        delay = 0
    }
    if(tumblerForMirror === 3 && delay === 130) {
        for (let i = 0; i < elementCount; i++) {
            element.children[i].classList.remove('MirrorRevers');
        }
        tumblerForMirror = 4;
    }
    if(tumblerForMirror === 4) {
        clearTimeout(timeout)
        tumblerForMirror = 0
        delay = 10
        timeout = setInterval(deus, 100)
        console.log(`stop Mirror`)
    }
};