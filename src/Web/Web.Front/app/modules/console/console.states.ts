namespace Enfer.Console {
  'use strict';

  App.Config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    $stateProvider.state(new States.MainState());
  });
}
