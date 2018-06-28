var final = 0;
var lst = process.argv;

for(var i = 2; i < lst.length; i++) {
	final += Number(lst[i]);
}
console.log(final);
