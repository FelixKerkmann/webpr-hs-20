
// done: implement the times function

Number.prototype.times = function(callback) {
    return Array.from({length:this},(_,index) => callback(index));
}
