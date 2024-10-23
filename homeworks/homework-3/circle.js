const circleArea = (radius) => {
    const area = (Math.PI * radius * radius).toFixed(2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
};

const circleCircumference = (radius) => {
    const circumference = (2 * Math.PI * radius).toFixed(2);
    console.log(`Yarıçapı ${radius} olan çemperin çevresi: ${circumference}`);
};

module.exports = {
    circleArea,
    circleCircumference
};