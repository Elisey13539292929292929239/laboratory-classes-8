const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { MENU_LINKS } = require("../constants/navigation");

exports.addProductToCart = async (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).send("Missing product name");
  }

  const product = await Product.findByName(name);

  if (!product) {
    return response.status(404).send("Product not found");
  }

  await Cart.add(product);

  response.status(200).end();
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};

exports.getCartView = async (request, response) => {
  const items = await Cart.getItems();
  const cartCount = await Cart.getProductsQuantity();
  const totalPrice = await Cart.getTotalPrice();

  response.render("cart.ejs", {
    headTitle: "Your Cart",
    items,
    cartCount,
    totalPrice,
    activeLinkPath: "/cart",
    menuLinks: MENU_LINKS,
  });
};
