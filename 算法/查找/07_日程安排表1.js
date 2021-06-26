//  日历排好序，二分查找
var MyCalendar = function() {
  this.calendar = [];
};

MyCalendar.prototype.book = function(start, end) {
  let left = 0, right = this.calendar.length;
  while(left < right) {
    const mid = left + ((right - left) >> 1);
    const [s1, e1] = this.calendar[mid];
    if(s1 >= end) {
      right = mid;
    } else if(e1 <= start) {
      left = mid + 1;
    } else return false;
  }
  this.calendar.splice(left, 0, [start, end]);
  return true;
};
