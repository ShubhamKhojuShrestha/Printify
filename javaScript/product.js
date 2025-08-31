//array of product details
const products = [
  {
    id: 101,
    title: "Epson EcoTank ET-2750 All-in-One Supertank Printer",
    price: 349.99,
    discount: 2,
    description:
      "Efficient and reliable, the EcoTank ET-2750 offers high-quality printing with refillable ink tanks. Say goodbye to cartridges and enjoy hassle-free printing.",
    category: "electronics",
    image: "../images/printers/101.webp",
    rating: { rate: 4.2, count: 230 },
  },
  {
    id: 102,
    title: "HP LaserJet Pro M404dn Monochrome Laser Printer",
    price: 259.0,
    description:
      "Boost your productivity with the LaserJet Pro M404dn. Fast, reliable, and designed for efficiency, this monochrome laser printer is perfect for office use.",
    category: "electronics",
    image: "../images/printers/102.webp",
    rating: { rate: 4.5, count: 150 },
  },
  {
    id: 103,
    title: "Canon PIXMA TS5320 Wireless All In One Printer",
    price: 129.95,
    description:
      "Experience wireless convenience with the PIXMA TS5320. Print, scan, and copy seamlessly from your devices. Compact design and user-friendly features make it a great choice.",
    category: "electronics",
    image: "../images/printers/103.webp",
    rating: { rate: 4.0, count: 180 },
  },
  {
    id: 104,
    title: "Brother HL-L2380DW Wireless Monochrome Laser Printer",
    price: 199.99,
    description:
      "The HL-L2380DW is a versatile wireless laser printer with advanced features. Enjoy fast printing, mobile device compatibility, and automatic duplex printing.",
    category: "electronics",
    image: "../images/printers/104.webp",
    rating: { rate: 4.3, count: 190 },
  },
  {
    id: 105,
    title: "Dell C1760NW Color Laser Printer",
    price: 179.95,
    discount: 18,
    description:
      "Add a splash of color to your prints with the C1760NW. This compact color laser printer is perfect for small offices, offering reliable performance and wireless connectivity.",
    category: "electronics",
    image: "../images/printers/105.webp",
    rating: { rate: 4.1, count: 160 },
  },
  {
    id: 106,
    title: "Samsung Xpress M2020W Wireless Monochrome Laser Printer",
    price: 89.99,
    discount: 12,
    description:
      "The Xpress M2020W delivers sharp monochrome prints wirelessly. Compact and affordable, it's an excellent choice for home offices and small businesses.",
    category: "electronics",
    image: "../images/printers/106.webp",
    rating: { rate: 4.0, count: 140 },
  },
  {
    id: 107,
    title: "Lexmark CX517de Color All-In-One Laser Printer",
    price: 449.0,
    description:
      "The CX517de is a high-performance color laser printer with multifunction capabilities. Experience vivid prints, fast speeds, and versatile functionality.",
    category: "electronics",
    image: "../images/printers/107.webp",
    rating: { rate: 4.4, count: 200 },
  },
  {
    id: 108,
    title: "Xerox Phaser 6510/DN Color Printer",
    price: 299.0,
    discount: 22,
    description:
      "The Phaser 6510/DN delivers professional-quality color prints. With network connectivity and duplex printing, it's a reliable choice for office environments.",
    category: "electronics",
    image: "../images/printers/108.webp",
    rating: { rate: 4.2, count: 170 },
  },
  {
    id: 109,
    title: "Ricoh SP C261SFNw Color Laser Multifunction Printer",
    price: 329.99,
    discount: 18,
    description:
      "The SP C261SFNw combines color printing, scanning, copying, and faxing in one compact device. Boost your office efficiency with this versatile multifunction printer.",
    category: "electronics",
    image: "../images/printers/109.webp",
    rating: { rate: 4.3, count: 180 },
  },
  {
    id: 110,
    title: "Epson WorkForce Pro WF-4740 Wireless All-in-One Inkjet Printer",
    price: 379.99,
    description:
      "The WorkForce Pro WF-4740 is a high-performance all-in-one inkjet printer. Experience fast printing, versatile features, and wireless connectivity for your office needs.",
    category: "electronics",
    image: "../images/printers/110.webp",
    rating: { rate: 4.5, count: 210 },
  },
];

// Get the query parameter from the URL
const urlQuery = window.location.search;

// Extract the product id from the URL and convert it to a number
const id = Number(urlQuery.split("=")[1]);

console.log(id);

// Select the HTML element with the id 'more-products'
const moreProductContainer = document.getElementById("more-products");

// Call the function to fill the details of the selected product
detailsFill();

// Loop over the products to create product components and append them to the parent container
for (let i = 0; i < products.length; i++) {
  const component = createProduct(products[i]);
  moreProductContainer.appendChild(component);
}

// Fill the details of the selected product according to the id from the products array
function detailsFill() {
  // Find the product in the array that matches the given id
  const product = products.find((p) => p.id === id);
  const imageContainer = document.querySelector(".product-image");

  console.log("prod", product);

  // Create an image element and append it to the product image container
  const imageTag = document.createElement("img");
  imageContainer.appendChild(imageTag);

  // Set alt text, source, and other details for the product image
  imageTag.alt = "Product Image for " + product.title;
  imageTag.src = product.image;

  // Set product title, price, discount, and description in respective HTML elements
  const prodTitle = document.getElementById("prodTitle");
  prodTitle.innerText = product.title;

  const prodPrice = document.getElementById("prodPrice");
  prodPrice.innerText = "$" + product.price;

  const discount = document.getElementById("discount");
  if (product.discount) discount.innerText = "-" + product.discount + "%";

  const prodDescription = document.getElementById("prodDescription");
  prodDescription.innerText = product.description;
}

// Create a product component with details passed as an argument
function createProduct(details) {
  // Create HTML elements for product components and set their properties
  const productComponent = document.createElement("div");
  productComponent.classList.add("product-item");

  const linkToProduct = document.createElement("a");
  linkToProduct.href = "/product/product.html?id=" + details.id;

  const productImage = document.createElement("img");
  productImage.src = details.image;

  const itemBody = document.createElement("div");
  itemBody.classList.add("item-body");

  const productName = document.createElement("h3");
  productName.textContent = details.title;

  const prodPrice = document.createElement("p");
  prodPrice.className = "price-row";

  const price = document.createElement("span");
  price.textContent = "$" + details.price.toFixed(2);
  prodPrice.appendChild(price);

  // Check if the product has a discount and create a discount element
  if (details.discount) {
    const discount = document.createElement("span");
    discount.textContent = `-${details.discount}%`;
    discount.classList.add("discount");
    prodPrice.appendChild(discount);
  }

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart");

  // Append created elements to build the product component
  productComponent.appendChild(linkToProduct);
  linkToProduct.appendChild(productImage);
  linkToProduct.appendChild(itemBody);

  itemBody.appendChild(productName);
  itemBody.appendChild(prodPrice);
  itemBody.appendChild(button);

  return productComponent;
}