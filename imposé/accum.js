function accum(s) {
	// your code
    return s.split('').map((char,index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
}

console.log(accum("ZpglnRxqenU"));