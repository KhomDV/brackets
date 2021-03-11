module.exports = function check(str, bracketsConfig) {
  // your solution

	let arrayCache = [];
	let lResult = false;

	if ( !Array.isArray(bracketsConfig) ) return lResult;

	for (let i=0; i < str.length; i++) {
		simbol = str[i];

		ruleConfig = bracketsConfig.find(elementConfig => simbol === elementConfig[1]);
		if ( ruleConfig === undefined) {
			arrayCache.push(simbol);
		} else {
			if ( ruleConfig[0] === ruleConfig[1] ) {
				if ( arrayCache[arrayCache.length - 1] === simbol ) {
					arrayCache.pop();
				} else {
					arrayCache.push(simbol);
				}
			} else {
				if ( arrayCache[arrayCache.length - 1] === ruleConfig[0] ) {
					arrayCache.pop();
				} else {
					arrayCache.push(simbol);
					break;
				}
			}
		}
	}	

	if (arrayCache.length === 0) {
		lResult = true;
	}

	return lResult;

}
