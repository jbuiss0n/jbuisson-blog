namespace Enfer.Console.States {
  'use strict';

  export class MainState implements angular.ui.IState {
    public name = 'console';
    public url = '/console';
    public templateUrl = App.Path + 'console/views/main.html';
    public controller = Controllers.MainController;
  }
}