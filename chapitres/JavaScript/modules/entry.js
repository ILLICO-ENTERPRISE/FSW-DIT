import { sum, sous } from './module.js';

sum(10, 30)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.log(error)
  })

sous(30, 10)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(error) {
    console.log(error)
  })