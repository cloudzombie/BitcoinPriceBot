var smartaverage = require('./smartaverage');
var dataset = [5, 7.1, 9, 5, 4.3, 3.5, 8, 5.3];
var acceptableVariance = 1;
var minimumValues = 5;
var info = smartaverage(acceptableVariance, minimumValues, dataset);
console.log('Initial dataset: ' + dataset.join(','));
console.log('Average with variance: ' + info.average);
console.log('Dataset of average without most far values: ' + info.dataset.join(','));