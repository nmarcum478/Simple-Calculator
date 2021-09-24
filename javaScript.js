var num = 0;
var inputs = 0;

function add(x)
{
num = num + x;
inputs = inputs + 1;
}
function print(x)
{
  add(x)
  document.getElementById("output").innerHTML = "<hr> Number Count: " + inputs +
  "<br> Current Number: " + num;
}
function reset()
{
document.getElementById("output").innerHTML = "";
num = 0;
inputs = 0;
}
