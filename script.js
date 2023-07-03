function number_(val) {
    document.getElementById('display_calc').value += val;
    document.getElementById('marquee_tag').innerText = "";
}
function Clear() {
  document.getElementById('display_calc').value = '';
}
function Back() {
  var display = document.getElementById('display_calc').value;
  document.getElementById('display_calc').value = display.substring(0, display.length - 1);
}
function Result() {
  var display = document.getElementById('display_calc').value;
  var result = eval(display);
  document.getElementById('display_calc').value = result;
}

                