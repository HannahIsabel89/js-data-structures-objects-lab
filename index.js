// Write your solution in this file!
let driver ={
    name: "Hannah"
  }
  
  // question one
  function updateDriverWithKeyAndValue (obj, key, value) {
    return newDriver = Object.assign({}, obj, {[key]: value});
  }
  //console.log(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway'));
  //console.log(driver['address']);
  
  // question 2 
  function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
    obj.key = value;
    return obj;
  };
  //console.log(destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway'));
  //console.log(driver);
  
  // question 3
  let newdriver = function deleteFromDriverByKey (obj, key) {
    const newDriver = Object.assign({}, obj);
    delete newDriver[key];
    return newDriver;
  };
  
  console.log(newDriver['name']);
  console.log(typeof newDriver)
  console.log(deleteFromDriverByKey(driver, 'name'));
  console.log(driver['name']);
  
  // question 4
  function destructivelyDeleteFromDriverByKey (obj, key) {
    delete obj[key];
    return obj
  };