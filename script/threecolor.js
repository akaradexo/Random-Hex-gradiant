function changeColor(){
  var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
  var hexcode1 = "";
  var hexcode2 = "";
  var hexcode3 = "";
  var random_index = 0;
  
  for(let i = 0; i < 6;i++){
    random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode1 += hex_numbers[random_index];
    random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode2 += hex_numbers[random_index];
    random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode3 += hex_numbers[random_index];
  }

  document.getElementsByClassName("container")[0].style.background = `linear-gradient(90deg, #${hexcode1} 0%, #${hexcode2} 50%, #${hexcode3} 100%)`;
  document.getElementById("hexcode1").innerHTML = hexcode1;
  document.getElementById("hexcode2").innerHTML = hexcode2;
  document.getElementById("hexcode3").innerHTML = hexcode3;
}