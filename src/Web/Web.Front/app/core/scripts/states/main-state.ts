namespace Enfer.Core.States {
  'use strict';

  export class MainState implements angular.ui.IState {
    public name = 'main';
    public url = '/';
    public templateUrl = 'core/views/main.html';
    public controller = Controllers.MainController;
  }
}