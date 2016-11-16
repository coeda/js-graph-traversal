'use strict';

const Node = require('./graphGenerator');
var stack = [];
var completed = [];
var found = false;
var foundValue;
const DFS = (start, searchFor) => {
  stack.push(start);
  if (start.value === searchFor){
    found = true;
    foundValue = start;
    return foundValue;
  } else {
    if (start.neighbors.length > 0){
      if(start.neighbors.length > 1){
        start.neighbors.forEach((value)=>{
          if(completed.indexOf(value) === -1){
            start = value;
            DFS(start, searchFor);
          }
        });
      } else {
        start = start.neighbors[0];
        DFS(start, searchFor);
      }
    } else if(start.neighbors.length === 0) {
      var lastValue = stack.pop();
      completed.push(lastValue);
      if (stack.length === 0 && found === false){
        foundValue = false;
        return foundValue;
      }
    }
  }
  stack = [];
  completed = [];
  found = false;
  return foundValue;
};

module.exports = DFS;
