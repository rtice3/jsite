(function() {
  var app = angular.module('angular_app', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/service-template.html',
        controller: 'about_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/residential', {
        templateUrl: 'html/feature-template.html',
        controller: 'residential_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/excavation', {
        templateUrl: 'html/service-template.html',
        controller: 'excavation_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/septic', {
        templateUrl: 'html/service-template.html',
        controller: 'septic_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/utilities', {
        templateUrl: 'html/service-template.html',
        controller: 'utilities_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/stormwater', {
        templateUrl: 'html/service-template.html',
        controller: 'stormwater_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/asphalt', {
        templateUrl: 'html/service-template.html',
        controller: 'asphalt_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/landscape', {
        templateUrl: 'html/service-template.html',
        controller: 'landscape_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/snow', {
        templateUrl: 'html/service-template.html',
        controller: 'snow_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/technical', {
        templateUrl: 'html/service-template.html',
        controller: 'technical_ctrl',
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

  app.factory('loading', [function() {  
    var loader = {
        request: function(config) {
            $("#loading").show();
            return config;
        },
        response: function(response) {
            $("#loading").hide();
            return response;
        }
    };
    return loader;
  }]);
  app.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('loading');
  }]);

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
      store.signature = true;
    });
  }]);
  app.controller('residential_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/residential.json").success(function(response) {
      store.data = response;
    });
  }]);
  app.controller('excavation_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/excavation.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('septic_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/septic.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('utilities_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/utilities.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('stormwater_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/stormwater.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('asphalt_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/asphalt.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('landscape_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/landscape.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('snow_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/snow.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);
  app.controller('technical_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/technical.json").success(function(response) {
      store.data = response;
      store.signature = false;
    });
  }]);

  app.controller('contact_ctrl', function($scope, $http) {
    var success_response = false;
    var error_response = false;

    $scope.user = {};

    var param = function(data) {
      var returnString = '';
      for (d in data){
          if (data.hasOwnProperty(d))
             returnString += d + '=' + data[d] + '&';
      }
      // Remove last ampersand and return
      return returnString.slice( 0, returnString.length - 1 );
    };

    $scope.submitForm = function(user) {
      $("#contact_form").hide();
      $("#loading").show();
      $scope.submitForm = function() {
        $http({
          method : 'POST',
          url : 'handle_form.php',
          data : param($scope.user), // pass in data as strings
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
          $("#loading").hide();
          if(!data.success) {
            success_response = false;
            error_response = true;
          }
          else {
            success_response = true;
            error_response = false;
          }
          $("#contact_form").show();
        });
      };
    };
  });

  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) { $(this).collapse('hide'); }
  });
})();

