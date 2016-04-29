'use strict';

angular.module('noterious')
  .controller('BoardsCtrl', function (currentUser, BoardsModel) {
    var ctrl = this;
    var boardNum = 4;

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: '',
      isPublic: false
    };

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: '',
        isPublic: false
      };
    };

    ctrl.getBoards = function () {
      ctrl.boards = {
        1: {
          description: "Anything and everything!",
          isPublic: true,
          title: "Random Ideas"
        },
        2: {
          description: "BizDev Ideas",
          isPublic: false,
          title: "Hustle"
        },
        3: {
          description: "this is a test",
          isPublic: false,
          title: "testing"
        }
      };
    };

    ctrl.createBoard = function (board, isValid) {
      console.log(board, isValid)
      if (isValid) {
        ctrl.loading = true;
        // CREATE BOARD
        ctrl.boards[boardNum] = board;
        boardNum++;
        ctrl.resetForm();
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        // UPDATE BOARD
        ctrl.boards[boardId] = board;
        ctrl.cancelEditing();
      }
    };

    ctrl.deleteBoard = function (boardId) {
      ctrl.loading = true;
      // DELETE BOARD
      ctrl.cancelEditing();
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });
