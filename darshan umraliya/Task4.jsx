const prices = [
    { name: "shoes", price: 549 },
    { name: "shirtjeans", price: 3299 },
    { name: "belt", price: 260 },
    { name: "watch", price: 5595 },
  ];
  function incrementQuantity(button) {
    const span = button.parentElement.nextElementSibling;
    let quantity = parseInt(span.textContent);
    quantity++;
    span.textContent = quantity;
    updateprice();
  }

  function decrementQuantity(button) {
    const span = button.parentElement.previousElementSibling;
    let quantity = parseInt(span.textContent);
    if (quantity > 0) {
      quantity--;
      span.textContent = quantity;
      updateprice();
    }
  }

//   function updateprice() {
      const priceLabels = document.querySelectorAll(".price-label h4");
    priceLabels.forEach((priceLabel, index) => {
      const quantityLabel = priceLabel.parentElement.querySelector("span");
      console.log(quantityLabel);});
    //   let quantity = parseInt(quantityLabel.textContent);
    //   console.log(quantity);
    //   if (isNaN(quantity)) {
        // quantity = 0;
    //   }
    //   const itemPrice = prices[index].price;
    //   const totalPrice = quantity * itemPrice;
    //   priceLabel.textContent = `$${totalPrice}`;
    // });
//   }
//   updateprice()


  document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const item = button.parentElement; // Get the parent of the button
        item.remove();
        updateTotalPrice();
      });
    });
  });

  // heart color
  let hearts = document.querySelectorAll(".fa-heart");
  hearts.forEach(function (heart) {
    heart.addEventListener("click", function () {
      heart.classList.toggle("filled");
    });
  });