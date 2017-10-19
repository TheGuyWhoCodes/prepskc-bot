// ==UserScript==
// @name         Auto Voter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://prepskc.com/beyounion/
// @require      https://code.jquery.com/jquery-3.2.1.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var name = makeid();
     var dir = makeid();
     var email = name + "@" + dir + ".com";
     $("#game_0").click();
     $("[name=age]").click();
     $("[name=email]").val(email);
     $("[name=validate]").val("prepskc");
          $(".btn").click();
})();

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
