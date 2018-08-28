// print process.argv
process.argv.forEach(function (arg, index, argv) {
    switch(arg){

    case "limbo":
        require("./server/limbo.js");
        break;
    case "base":
        require("./server/base.js");
        break;
    case "test":
        require("./server/test.js");
        break;
    }
  });