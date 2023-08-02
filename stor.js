$(document).ready(function () {
$(".plus").each(function () { 
   $(this).on("click", function () {
  let quty = Number($(this).parents("td").find(".quty-number").text()) + 1;
  $(this).parents("td").find(".quty-number").text(quty);
  let pric = Number($(this).parents("tr").find(".pro-price").text());
$(this).parents("tr").find(".total-price-number").text(pric*quty);
});
});

$(".miuns").on("click", function () {
  if ( Number($(this).parents("td").find(".quty-number").text()) > 1) {
    let quty = Number($(this).parents("td").find(".quty-number").text()) - 1;
    $(this).parents("td").find(".quty-number").text(quty);
    let pric = Number($(this).parents("tr").find(".pro-price").text());
    $(this).parents("tr").find(".total-price-number").text(pric*quty);
  }
});
/**********  تخزين المنتج **************** */

if (localStorage.product != null) {
  db = JSON.parse(localStorage.product);
} else {
  db = [];
}
/*show data */
function showdata() {
  for (let i = 0; i <= db.length; i++) {
    $(
      `
      <tr>
      <td><img src="${db[i].img}"></td>
      <td><span>${db[i].name}</span></td>
      <td>${db[i].price}<span class="text-success">$</span></td>
      <td><span class="quty-number">1</span><span class="Quantity"><button class="plus">+</button><button class="miuns">-</button></span></td>
      <td><span class="total-price-number">${db[i].price}</span> <span class="text-success">$</span>  </td> 
      <td><button class="btn btn-dark "     onclick=delet(${i})>delet</button></td>
  </tr>
      `
    ).appendTo("table");
  }
}
/********* */
/******* delet function  */
function delet(i) {
  db.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(db));
  db = JSON.parse(localStorage.product);
  $("tr td ").remove();
  showdata();
}
function buy(i) {
  $(".popap").fadeIn(300);
  $("body").on("click", ".popap", function () {
    $(".popap").fadeOut();
  });

  $(".popap").on("click", ".closeBtn", function () {
    $(".popap").fadeOut();
  });
  delet(i);
}
showdata();

/***************************** */
});