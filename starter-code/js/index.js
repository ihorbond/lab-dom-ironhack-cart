$(document).ready(function() {
  var qtyArr = [];
  var pricesArr = [];
  var total = 0;
  function updatePrices() {
    $(".qty").each(function() {
      qtyArr.push(parseInt($(this).val()));
    });
    $(".item-price").each(function() {
      pricesArr.push($(this).html());
    });
    //multiplying price by quantity of items
    pricesArr = jQuery.map(pricesArr, function(elem, index) {
       return parseInt(elem.slice(0, pricesArr.length)) * qtyArr[index];
    });

    $('.item-total').each(function(index, elem) {
      $(this).html('$' + pricesArr[index]);
      total += pricesArr[index];
    });
  }

  function createNewItem() {
    var itemDesc = $('#item-desc');
    var itemPrice = $('#item-price');
    var formattedInsertion = '<li><div class=\"col-xs-2\"><span>' + itemDesc.val() + '</span></div> <div class=\"col-xs-2\"><span class=\"item-price\">' + itemPrice.val() + '$</span></div><div class=\"col-xs-3\"><span class=\"quantity\">QTY</span><input class=\"qty\" type=\"number\" value=\"0\"></div><div class=\"col-xs-2\"><span class=\"item-total\">0.00$</span></div><div class=\"col-xs-3\"><button class=\"btn-delete\">Delete</button></div></li>';
    $('.all-items').append(formattedInsertion);
  }

  function calculateCartTotal() {
    $('#cart-total').html('$' + total);
  }

  //button triggers
  $('.btn-success').click(function() {
    updatePrices();
    calculateCartTotal();
  });
  $('#create-item').click(function() {
    createNewItem();
  });

  //$(this) refers to '.btn-delete' here
  //'.all-items' on the left is element that contains tags that are being changed but '.all-items' itself stays the same
  $('.all-items').on('click','.btn-delete', function() {
    $(this).closest('li').remove();
  });
});
