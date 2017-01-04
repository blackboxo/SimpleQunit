/**
 * Created by wubin on 04/01/2017.
 */

var precedence = function(a, b) { // return if a <= b
    if( '+-'.indexOf(a) === -1 ){
        if( '+-'.indexOf(b) === -1 ) return true; //a == b
        else return false; //a > b
    }
    else return true; // a <= b
}


if(module) {
    module.exports = precedence;
}
