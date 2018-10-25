Array.prototype.myEach = function (proc) {
  for (let i = 0; i < this.length; i++) {
    proc(this[i]);
  }

  return this
};

Array.prototype.myMap = function (proc) {
  var result = [];

  this.myEach(element do result.push(proc(element)));

  return result;
};
