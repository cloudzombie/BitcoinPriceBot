# Smart Average
Intelligent average of data set numbers calculating variance and discarding the farthest values.
Learn about [this](http://www.mathsisfun.com/data/standard-deviation.html) (in [spanish](http://www.disfrutalasmatematicas.com/datos/desviacion-estandar.html))

## Install

```sh
$ npm i --save smartaverage
```

## Usage

```js
var smartaverage = require('smartaverage');
var dataset = [10, 12.1, 9.8, 5, 11, 10, 7.3];
var acceptableVariance = 2;
var info = smartaverage(acceptableVariance, dataset);
console.log('Initial dataset: ' + dataset.join(','));
console.log('Average with variance: ' + info.average);
console.log('Dataset of average without most far values: ' + info.dataset.join(','));
```

Returns:
```
Initial dataset: 10,12.1,9.8,5,11,10,7.3
Average with variance: 10.580000000000002
Dataset of average without most far values: 10,12.1,9.8,11,10
```

## Used in
- Bitcoin average: [BTC Average](https://github.com/CodersBrothers/BtcAverage)

#### License

The MIT License (MIT)

Copyright (c) 2014 Coders Brothers

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.