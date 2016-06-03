// Code goes here
(function() {

  var createWork = function() {

    var task1 = function() {

      console.log("Task1 ");
    };

    var task2 = function() {

      console.log("Task2 ");
    };

    return {

      job1: task1,
      job2: task2
    };
  };

  var worker = createWork();

  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
}());
