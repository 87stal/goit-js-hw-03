const findBestEmployee = function(employees) {
  const productivity = Object.values(employees);
  console.log(productivity);
  let mostEffictively = 0;
  for (let i = 0; i <= productivity.length; i += 1) {
    if (productivity[i] > mostEffictively) {
      mostEffictively = productivity[i];
    }
  }
  let employee;
  for (var key in employees) {
    if (employees[key] === mostEffictively) {
    employee = key;
    }
  }
  return employee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
