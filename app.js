document.querySelectorAll('.buyButton').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.payment').style.display = 'flex';
  });
});

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
        {
            code: "white",
            img: "img/Product/air.png",
        },
        {
            code: "black",
            img: "img/Product/air2.png",
        },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
        {
            code: "lightgray",
            img: "img/Product/jordan.png",
        },
        {
            code: "green",
            img: "img/Product/jordan2.png",
        },
    ],
  },
  {
    id: 3,
    title: "Blazer Mid",
    price: 109,
    colors: [
        {
            code: "lightgray",
            img: "img/Product/blazer.png",
        },
        {
            code: "green",
            img: "img/Product/blazer2.png",
        },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
        {
            code: "black",
            img: "img/Product/crater.png",
        },
        {
            code: "lightgray",
            img: "img/Product/crater2.png",
        },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
        {
            code: "gray",
            img: "img/Product/hippie.png",
        },
        {
            code: "black",
            img: "img/Product/hippie2.png",
        },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the choosen product
    choosenProduct = products[index];

    // Change text of current product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    // assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    // Change current product image
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    // Remove selected class from all sizes
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    // Add selected class to the clicked size
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
// Add to cart button functionality
const addToCartButton = document.querySelector('.addToCartButton');
addToCartButton.addEventListener('click', () => {
  // Here you can implement the functionality to add the product to the cart
  alert(`Added ${choosenProduct.title} to cart!`);
});