$(document).ready(function () {
  $(".total-price-number").each(function () {
    $(this).text($(this).parents("tr").find(".price span").text());
  });

  /* function to change the number of the quty */
  $(".plus-1").on("click", function () {
    let quty = Number($(this).parents("td").find(".number-product").text()) + 1;
    console.log(quty);
    $(this).parents("td").find(".number-product").text(quty);
    $(this)
      .parents("tr")
      .find(".total-price-number")
      .text(quty * Number($(this).parents("tr").find(".price span").text()));
    getTotal();
  });
  $(".muns-1").on("click", function (e) {
    let muins = Number($(this).parent().prev().text());
    if (muins === 1) {
      e.preventDefault();
    } else {
      let quty = muins - 1;
      $(this).parents("td").find(".number-product").text(quty);
      $(this)
        .parents("tr")
        .find(".total-price-number")
        .text(quty * Number($(this).parents("tr").find(".price span").text()));
      getTotal();
    }
  });
  /****************end***************************/
  /*start aside functionalty*/

  function getTotal() {
    let sum = 0;
    let total = 0;
    $(".total-price-number ").each(function () {
      sum += Number($(this).text());
    });
    $(".subTotal").text(sum);
    total = sum - Number($(".discount").text()) + Number($(".shipping").text());
    console.log(total);
    $(".total").text(total);
  }
  getTotal();
  /************************** */
  $("input").each(function () {
    $(this).on("keyup", function (e) {
      if (e.keyCode === 13) {
        $(this).blur();
      }
    });
  });

  /**********end**********/
  /* btn code */
  let e = 0;
  $(".check-out-ptn").click(function () {
    if (e % 2 === 0) {
      $(this)
        .text(" ")
        .fadeIn(200, function () {
          $(this).val("done").css("background-color", "green");
        });
    } else {
      $(this)
        .text(" ")
        .fadeIn(200, function () {
          $(this).val("checkout").css("background-color", "#0d6efd");
        });
    }
    e++;
  });
});
/**********validation ************** */
$(".check-out-ptn").on("click", function () {
  $("input:not([type='submit'])").each(function () {
    console.log($(this).val())
        if ($(this).val() == "") {
      $(this).css("border-color", "red");
      $(this).prev().css("color","red")
    }else{
      $(this).css("border-color", "#dee2e6");
      $(this).prev().css("color","black")
    }
  });
});
