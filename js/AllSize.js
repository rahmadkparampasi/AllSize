/*!
 * AllSize v.1.0.0
 * Copyright 2022 Rahmad Kurniawan
 * Licensed under MIT
 */

"use strict";


// Learn about css unit https://www.freecodecamp.org/news/css-unit-guide/
(function() {
    //Absolute Length Units
    //Use px unit for font size
    var a = document.querySelectorAll('[data-px-size]');
    for (let i = 0; i < a.length; i++) {
        const s = a[i].getAttribute('data-px-size');
        a[i].style.fontSize = s+'px';        
    }
    
    //Use cm unit for font size
    var e = document.querySelectorAll('[data-cm-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-cm-size');
        e[i].style.fontSize = s+'cm';        
    }

    //Use mm unit for font size
    var e = document.querySelectorAll('[data-mm-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-mm-size');
        e[i].style.fontSize = s+'mm';        
    }

    //Use in unit for font size
    var e = document.querySelectorAll('[data-in-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-in-size');
        e[i].style.fontSize = s+'in';        
    }

    //Use pc unit for font size
    var e = document.querySelectorAll('[data-pc-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-pc-size');
        e[i].style.fontSize = s+'pc';        
    }

    //Use pt unit for font size
    var e = document.querySelectorAll('[data-pt-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-pt-size');
        e[i].style.fontSize = s+'pt';        
    }

    //Use rm unit for font size
    var e = document.querySelectorAll('[data-em-size]');
    for (let i = 0; i < e.length; i++) {
        const s = e[i].getAttribute('data-em-size');
        e[i].style.fontSize = s+'em';        
    }
})();