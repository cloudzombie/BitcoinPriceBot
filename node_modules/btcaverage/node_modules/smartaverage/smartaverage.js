/**
 * GET AVERAGE OF VALUES
 *
 * @param {Number[]} values
 */
function average(values){
    return values.reduce(function(a, b){
            return a + b;
        }, 0) / values.length;
}

/**
 * DEVIATION
 *
 * @param {Number} number
 */
function square(number){
    return number * number;
}

/**
 * GET THE MAX VALUE
 *
 * @param {Number[]} values
 */
function max(values){
    return Math.max.apply(null, values);
}

/**
 * REMOVE VALUE FROM ARRAY
 *
 * @param {Number[]} values
 * @param {Number} removeValueKey
 */
function remove(values, removeValueKey){
    values.splice(removeValueKey, 1);
    return values;
}

/**
 * GET VARIANCE
 *
 * @param {Number[]} prices
 */
function getVariance(prices){
    var btcAverage = average(prices);
    var distances = prices.map(function(price){
        return square(price - btcAverage);
    });
    return {
        variance: average(distances),
        maxDistanceKey: distances.indexOf(max(distances))
    };
}

/**
 * GET AVERAGE REMOVING "WRONG" VALUES
 *
 * @param {Number} acceptableVariance
 * @param {Number} minimumValues
 * @param {Number[]} dataset
 */
function getAverageWithVariance(acceptableVariance, minimumValues, dataset){
    var datasetClone = dataset.slice(0);
    var lastVarianceDetails;
    var lastVariance;
    var end = false;
    while(!end){
        lastVarianceDetails = getVariance(datasetClone);
        lastVariance = lastVarianceDetails.variance;
        if(!lastVariance){
            end = true;
        }
        if(lastVariance >= acceptableVariance){
            datasetClone = remove(datasetClone, lastVarianceDetails.maxDistanceKey);
        }else{
            end = true;
        }
        if(datasetClone.length < minimumValues){
            throw new Error('Not there are enough values with acceptable variance');
        }
    }
    return {
        average: average(datasetClone),
        dataset: datasetClone
    }
}
module.exports = getAverageWithVariance;