import ProductModel from "../product/product.model.js";

export default class CartModel {
  constructor(_id, _productId, _userId, _qty) {
    this.id = _id;
    this.productId = _productId;
    this.userId = _userId;
    this.qty = _qty;
  }
  addToCart(userId, productId, qty) {
    // this user Id exist or not;
    let users = UserModel.getAllUsers();
    let user = users.find((user) => {
      return user.id === userId;
    });
    if (!user) {
      return {
        success: false,
        message: "User Not Found",
      };
    }
    //products exits
    let product = ProductModel.getProductWithId(productId).find(
      (product) => product.id === productId
    );
    if (!product) {
      return {
        success: false,
        message: "Product Not Found",
      };
    }
     //product exist or not
    //qty is valid
    if(!Number.isInteger(qty) || qty <=0 ){
        return {
            success: false,
            message: "qty is not valid",
          }; 
    }
    carts.push(new CartModel(carts.length+1,productId,userId,qty))
    return {
        success: true,
    };
  }
  static getCart(userId) {
    console.log("userId", userId);
    let resp = carts.filter((cartItem) => {
      return cartItem.userId === userId;
    });
    return resp;
  }
}

var carts = [new CartModel(1, 1, 1, 5)];