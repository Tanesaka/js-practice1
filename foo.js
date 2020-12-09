
// function isTweetable(text) {
//   return text.length <= 140;
// };

// const isTweetable = function(text) {
//   return text.length <= 140;
// };


// function alertTweetable(text) {
//   if (isTweetable(text)) {
//     alert("you can tweet!");
//   }
// }


// const unfollow = function() {
//   console.log("フォローを外しました");
// };

// const cancelTweet = function () {
//   console.log("ツイートをキャンセルしました");
// };

// function confirmed(fn) {
//   const input = window.prompt("実行しますか？");
//   fn(input);
//   }


// confirmed(function (input) {
//   if (input === "実行") {
//     console.log("リポジトリを削除");
//   }
// });


// const btn = document.getElementById("button");
// btn.addEventListener("click", function() {
//   console.log("フォロー解除")
// })

const $foods = ["にんじん", "じゃがいも", "玉ねぎ"];

$foods.forEach(function($food) {
  console.log($food);
});