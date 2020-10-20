const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activ) {
  if (typeof activ !== 'string' || !isNaN(activ) || arguments.length) return false;

	const k = (0.693 / HALF_LIFE_PERIOD);
	let time = Math.log(MODERN_ACTIVITY / Number(activ)) / k;
	return Math.ceil(time);
};
