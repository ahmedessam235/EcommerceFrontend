import Cookies from "js-cookie";

export class TokenProvider{
  static value = {};
  
  static async getToken(){
    return TokenProvider.value;
  }
  
  static async setToken(token){
    Cookies.set("x-token", token);
  }
}