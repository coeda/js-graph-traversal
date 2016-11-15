'use strict';

const Node = require('./graphGenerator');
var queue = [];
const DFS = (start, searchFor) => {
  queue.push(start);
  if (start.value === searchFor){
    return start.name;
  } else if (start.neighbors !== undefined){
    if(start.neighbors.length > 1){

    } else {
      start = start.neighbors[0];
      DFS(start, searchFor);
    }
  } else if (start.neightbors === undefined){
    queue.pop();
    start = queue[queue.length -1];
    DFS(start, searchFor);
  }
};

module.exports = DFS;
