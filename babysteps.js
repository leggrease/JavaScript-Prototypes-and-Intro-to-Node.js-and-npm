var sum = 0
process.argv.forEach(function(v, index) {
	if (index > 1)
		sum += Number(v)
});

console.log(sum)