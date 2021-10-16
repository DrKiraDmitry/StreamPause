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
            element.children[i].classList.remove('MirrorSlide');
            element.children[i].classList.remove('Mirror')
            element.children[i].classList.add('MirrorBackSlide')
        }
        delay=0;
        tumblerForMirror = 2;
        iteration = 0
    }
    if(tumblerForMirror === 2 && delay === 130) {
        element.children[iteration].classList.add('MirrorRevers');
        element.children[iteration].classList.remove('MirrorBackSlide');
        iteration++;
        if(iteration === elementCount){
            tumblerForMirror = 3;
            delay=0;
        };
    }
    if(tumblerForMirror === 3 && delay === 130) {
        switchStatus('MirrorRevers', tumblerForMirror)
        if(iteration === 0){
            tumblerForMirror = 4;
            delay=0;
        };
    }
    if(tumblerForMirror === 4) {
        clearTimeout(timeout)
        tumblerForMirror = 0
        timeout = setInterval(deus, 100)
        console.log(`stop Mirror`)
    }
};