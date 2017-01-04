function evaluate(arr) {
  var str = '';
  for(var i=0; i<arr.length; i++) {
    switch(arr[i]) {
      case 'add':
        str += '+';
        break;
      case 'sub':
        str += '-';
        break;
      case 'mul':
        str += '*';
        break;
      case 'div':
        str += '/'
        break;
      case 'mod':
        str += '%';
        break;
      default:
        str += arr[i];
        break;
    }
  }
  str = str.replace('--', '+');
  console.log(str);
  console.log(JSON.stringify(arr));
  return eval(str);
}

if(module) {
	module.exports = evaluate;
}
