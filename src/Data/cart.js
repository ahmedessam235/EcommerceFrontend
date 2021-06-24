import Cookies from "js-cookie";

export class Cart {
  static CART_KEY = "cart";
  static addProduct(productId) {
    let products = this.getProducts();
    if (products === null || products === undefined) {
      products = [];
    }
    products.push(productId);
    Cookies.set(this.CART_KEY, JSON.stringify(products));
  }
  static getProducts() {
    let productsStr = Cookies.get(this.CART_KEY);
    if (productsStr === null || productsStr === undefined) {
      return [];
    }
    let productsArr = JSON.parse(productsStr);
    return productsArr;
  }
}
export default Cart;
