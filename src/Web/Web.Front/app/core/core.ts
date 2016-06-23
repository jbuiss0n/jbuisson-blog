namespace Enfer.Core {
  'use strict';

  export class App {
    private static module: angular.IModule = angular.module('enfer', [
      'ui.router',
      'enfer.config',
      'enfer.translate',
      'enfer.templates',
      'enfer.console',
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
