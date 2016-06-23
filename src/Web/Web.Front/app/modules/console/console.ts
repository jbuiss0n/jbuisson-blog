namespace Enfer.Console {
  'use strict';

  export class App {
    public static Path: string = 'modules/';

    private static module: angular.IModule = angular.module('enfer.console', [
      'ui.router',
    ]);

    public static Config(configFn: Function): angular.IModule {
      return this.module.config(configFn);
    }

    public static Controller(object: Object): angular.IModule {
      return this.module.controller(object);
    }

    public static Service(name: string, serviceConstructor: Function): angular.IModule {
      return this.module.service(name, serviceConstructor);
    }

    public static Directive(name: string, directiveFactory: angular.IDirectiveFactory): angular.IModule {
      return this.module.directive(name, directiveFactory);
    }
  }
}
