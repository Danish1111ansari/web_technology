alert("Script is runnig")
var x="Global"; //global scope....... 
function hello() {
      var y="local"; //local scope.......
      console.log(y);
}
hello();

function world()
{
	console.log(x);
}

world();
