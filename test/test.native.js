/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils-try-require' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );


// FIXTURES //

var largeGamma = require( './fixtures/julia/large_gamma.json' );
var negativeMedian = require( './fixtures/julia/negative_median.json' );
var positiveMedian = require( './fixtures/julia/positive_median.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = cdf( NaN, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `x0` and `gamma`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 0.0, 1.0 );
	t.equal( y, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `x0` and `gamma`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 0.0, 1.0 );
	t.equal( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `gamma`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, 0.0, 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 0.0, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given `x0` and `gamma` (large `gamma`)', opts, function test( t ) {
	var expected;
	var delta;
	var gamma;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = largeGamma.expected;
	x = largeGamma.x;
	x0 = largeGamma.x0;
	gamma = largeGamma.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0:'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given `x0` and `gamma` (`x0 < 0`)', opts, function test( t ) {
	var expected;
	var delta;
	var gamma;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = negativeMedian.expected;
	x = negativeMedian.x;
	x0 = negativeMedian.x0;
	gamma = negativeMedian.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0:'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 750.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given `x0` and `gamma` (`x0 > 0`)', opts, function test( t ) {
	var expected;
	var delta;
	var gamma;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = positiveMedian.expected;
	x = positiveMedian.x;
	x0 = positiveMedian.x0;
	gamma = positiveMedian.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0:'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			/*
			* Large tolerance needed to accommodate a single test case (x: -157.97952978936485, x0: 11.935806197690301, gamma: 0.006888823412234402), for which
			* -   the expected value is 0.00001290513644541802
			* -   but the function returns 0.000012905136445441337
			* which is a difference of 2.3317e-17.
			*/
			tol = 8200.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
