const faker = require("faker");

let createRecord = () => {
  let record = {
    user_id1: faker.random.number({
      min: 1,
      max: 20
    }),
    user_id2: faker.random.number({
      min: 1,
      max: 20
    })
  };
  if (record.user_id1 === record.user_id2) return null;
  else return record;
};

let testing = () => {
  let records = [];

  for (let i = 1; i <= 50; i++) {
    records.push(createRecord());
  }
  for (var i = records.length - 1; i >= 0; i--) {
    if (records[i] === null) {
      records.splice(i);
    }
  }
  let primed = records.filter(elem => {
    if (elem === elem)
  })


  console.log(records);
};

testing();

function removeDuplicates( arr, prop ) {
  var obj = {};
  for ( var i = 0, len = arr.length; i < len; i++ ){
    if(!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
  }
  var newArr = [];
  for ( var key in obj ) newArr.push(obj[key]);
  return newArr;
}
