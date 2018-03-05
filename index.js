function lowerKeys(obj) {

	if (!obj) return null;

	const res = {};
	for (let key in obj) {
		res[String(key).toLowerCase()] = obj[key];
	}
	return res;
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = lowerKeys;
}
