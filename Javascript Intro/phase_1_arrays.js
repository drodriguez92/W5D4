Array.prototype.my_uniq = function() {
  var result = [];                              // Set up result array.

  for (var i = 0; i < this.length; i+= 1) {     // Iterate from start to finish by 1.
    if (result.indexOf(this[i]) === -1) {       // Checks if element doesn't exist in result.
      result.push(this[i]);                     // Adds it if it doesn't.
    }
  }

  return result;                                // Returns given array unique'd.
};


Array.prototype.my_twosum = function() {
  var pairs = [];                                       // Set up pairs array.

  for (var i = 0; i < this.length; i += 1) {            // Create outer loop and initialize i.
    for (var j = (i + 1); j < this.length; j += 1) {    // Create inner loop and initialize j.
      if (this[i] + this[j] === 0) {                    // Checks if i + j = 0
        pairs.push([i, j]);                             // Adds i and j into pairs array.
      }
    }
  }

  return pairs;                                         // Returns all possible pairs of nums that sum to 0.
};


Array.prototype.my_transpose = function() {
  var transposed = [];

  for (var i = 0; i < this.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      columns[j][i] = this[i][j];
    }
  }

  return transposed;
};
