angular.extend(app, angular.module(app.name,['ui.router']));

app.run(['$state', '$rootScope', function($state, $rootScope){
  console.log(app.name + ' running');

  $rootScope.currentState = "";

  $rootScope.$on('$stateChangeStart', function(event, currentState, previousState){
    $rootScope.currentState = currentState.name;
  });

}])

.config(['$stateProvider', 'app.config', function($stateProvider, config){
  $stateProvider
    .state('root',{
      abstract: true,
      controller: 'main.controller',
      template: "<ui-view/>"
    })
    .state('root.home', {
      url: '',
      templateUrl: config.base_url + "/html/templates/home.html"
    })
    .state('root.about',{
      url: '/about',
      templateUrl: config.base_url + "/html/templates/about.html"
    })
    .state('root.about.more',{
      url: '/more',
      template: "Showing more..."
    })
    .state('root.about.evenmore',{
      template: 'Showing even more...'
    })
    .state('root.other',{
      url: '/other',
      templateUrl: config.base_url + "/html/templates/other.html"
    })
    .state('root.other.todo',{
      url: '/todo',
      templateUrl: config.base_url + "/html/templates/other-todo.html"
    });


}]);
