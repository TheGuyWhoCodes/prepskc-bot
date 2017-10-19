// ==UserScript==
// @name         Force Reload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://prepskc.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        window.location = "http://prepskc.com/beyounion/";

    }, 10000);
})();
