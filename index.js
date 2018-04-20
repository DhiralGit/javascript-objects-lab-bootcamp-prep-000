var recipes = new Object({recipes: 'test'});

function updateObjectWithKeyAndValue(Object, key, value){
  return Object.assign({}, Object, { [key]: value })
}