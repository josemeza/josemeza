'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'app.list',
  'app.about'
]).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/list");

  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "src/partials/list/list.html",
      controller: 'ListCtrl'
    })
    .state('tiles', {
      url: "/tiles",
      templateUrl: "src/partials/tiles/tiles.html",
      controller: 'ListCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "src/partials/about/about.html",
      controller: 'AboutCtrl'
    })
    .state('figma', {
      url: "/figma",
      templateUrl: "src/partials/projects/figma.html",
      controller: 'ListCtrl'
    })
    .state('moma', {
      url: "/moma",
      templateUrl: "src/partials/projects/moma.html",
      controller: 'ListCtrl'
    })
    .state('thesis', {
      url: "/thesis",
      templateUrl: "src/partials/projects/thesis.html",
      controller: 'ListCtrl'
    })
    .state('pentagram', {
      url: "/pentagram",
      templateUrl: "src/partials/projects/pentagram.html",
      controller: 'ListCtrl'
    })
    .state('psoa', {
      url: "/psoa",
      templateUrl: "src/partials/projects/psoa.html",
      controller: 'ListCtrl'
    })
    .state('pidgin', {
      url: "/pidgin",
      templateUrl: "src/partials/projects/pidgin.html",
      controller: 'ListCtrl'
    })
    .state('2x4', {
      url: "/2x4",
      templateUrl: "src/partials/projects/2x4.html",
      controller: 'ListCtrl'
    })
    .state('motion', {
      url: "/motion",
      templateUrl: "src/partials/projects/motion.html",
      controller: 'ListCtrl'
    })
    .state('architecture', {
      url: "/architecture",
      templateUrl: "src/partials/projects/architecture.html",
      controller: 'ListCtrl'
    });
}]);
