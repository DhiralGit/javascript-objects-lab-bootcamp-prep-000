var recipes = new Object({recipes: 'test'});

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var new = Object.assign({}, object, { [key]: value })
}