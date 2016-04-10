angular.module('noterious')
  .controller('BoardsCtrl', function() {
    // create reference to "this" at beginning of controller named after controllerAs
    var boards = this;

    boards.title = "Test";
  })