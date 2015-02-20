(function() {
  var app = angular.module('angular_app', ['ui.bootstrap', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/template.html',
        controller: 'about_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/excavation', {
        templateUrl: 'html/service-template.html',
        controller: 'excavation_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/contact', {
        templateUrl: 'html/contact.html',
        controller: 'contact_ctrl',
        controllerAs: 'ctrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

  $httpProvider.interceptors.push(function($q, $rootScope) {
    return {
       'request': function(config) {
          $("#loading").show();
          return config;
       },
       'response': function(response) {
         $("#loading").hide();
         return response;
       },
       'responseError': function(response) {
         $("#loading").hide();
         return response;
       }
    }
  });

  app.directive('topNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/top-nav.html', 
    }
  });

  app.directive('bottomFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/footer.html', 
    }
  });

  app.directive('contactForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'html/contact-form.html', 
    }
  });

  app.controller('about_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/about.json").success(function(response) {
      store.data = response;
    });
  }]);

  app.controller('excavation_ctrl', function() {
    this.carousel_data = excavation_carousel;
    this.header_txt = "Heavy Civil & ";
    this.mute_txt = "Sitework";
    this.body_txt = "From cut and fill to curb and sidewalk, Jones Contracting, Inc. has extensive experience providing site work for housing developments and buildings. Our main goal is to offer comprehensive site work services with as little subcontracting as possible to maximize efficiency and minimize your cost.";
  });

  app.controller('contact_ctrl', function() {

  });
})();
