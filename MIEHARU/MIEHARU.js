// ==UserScript==
// @name        MIEHARU
// @namespace   jp
// @description フォローとフォロワーが均等にみえる
// @include     https://twitter.com/
// @version     0.1.0
// ==/UserScript==

// 読み込み時の処理
function load() {
  var folow = document.getElementsByClassName('DashboardProfileCard-statValue');
  var follow = Number(folow[1].innerHTML);
  var follower = Number(folow[2].innerHTML);
  // フォローとフォロワーの数を比較してフォローワーの方が少なければ不自然ではない数に変更する
  if (follow > follower) {
    //-5から5までランダムな数字を生成
    var randomNumber = -5 + Math.floor(Math.random() * 11);
    folow[2].innerHTML = follow + (randomNumber);
  }
}

document.addEventListener("DOMContentLoaded", load, false);