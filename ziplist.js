const zipList = (list1, list2) => {
  // note:they are of equal length
  const retval = [];
  for (let i = 0; i < list1.length; i++) {
    retval.push(list1[i]);
    retval.push(list2[i]);
  }
  return retval;
};
const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];
console.log(zipList(test1, test2));

const zipListTheSimpleWay = (list1, list2) => _.flatten(_.zip(list1, list2));
console.log(zipListTheSimpleWay(test1, test2));
