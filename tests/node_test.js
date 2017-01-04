/**
 * Created by wubin on 04/01/2017.
 */
var precedence = require('./precedence.js');

QUnit.test("precedence", function (assert) {

    assert.equal(precedence('+', '%'), true);
    assert.equal(precedence('%', '+'), false);
    assert.equal(precedence('%', '%'), true);

});