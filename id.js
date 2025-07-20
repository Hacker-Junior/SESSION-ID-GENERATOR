function makeid(num = 4) {
  let result = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += NIGHTRIDDERcharacters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
module.exports = {makeid};
