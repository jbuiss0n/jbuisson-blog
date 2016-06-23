namespace Enfer.Console.Controllers {
  'use strict';

  export class MainController {
    static $inject = ['$scope'];

    constructor(private $scope: angular.IScope) {
    }
  }

  App.Controller(MainController);
}
