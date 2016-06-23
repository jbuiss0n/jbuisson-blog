namespace Enfer.Core.Controllers {
  'use strict';

  export class MainController {
    static $inject = ['$scope'];

    

    constructor(private $scope: angular.IScope) {
      console.log('core.main');
    }
  }

  App.Controller(MainController);
}
