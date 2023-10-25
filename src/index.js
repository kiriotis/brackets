module.exports = function check(str, bracketsConfig) {
	const mainarr = bracketsConfig.map((Value) => Value.join(""));
	for (let i = 0; i < mainarr.length; i++) {
		if (str.includes(mainarr[i])) {
			str = str.replace(mainarr[i], "");
			console.log(str);
			i = -1;
		}
	}
	return !str;
};
