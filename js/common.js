console.log("common.js");

jQuery(($) => {

  // ヘッダーロゴ フェードイン
  $(".header__logo").delay(500).fadeIn(1000);

  // ハンバーガーメニューボタンをクリック
  $(".header__toggle").on("click", (event) => {
    $(event.target).toggleClass("is-open");
    $(".container").toggleClass("is-open");
    $(".header").toggleClass("is-open");
    $(".menu").toggleClass("is-open");
  })

});