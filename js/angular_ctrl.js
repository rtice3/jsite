function init_fb(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) 
        return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=1588258464750206&version=v2.3";
    fjs.parentNode.insertBefore(js, fjs);
}

function init_gp() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
}

function init_map() {
    var myLatlng = new google.maps.LatLng(42.144991, -71.232199);
    var mapOptions = {
        zoom: 9,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        draggable: false,
        zoomControl: true
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = 'Jones Contracting Inc.';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });


    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Jones Contracting Inc."
    });

    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

(function() {
  var app = angular.module('angular_app', ['ui.bootstrap', 'ngRoute']);

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
      when('/commercial', {
        templateUrl: 'html/feature-template.html',
        controller: 'commercial_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/municipal', {
        templateUrl: 'html/feature-template.html',
        controller: 'municipal_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/services', {
        templateUrl: 'html/services.html',
        controller: 'services_ctrl',
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
      when('/news', {
        templateUrl: 'html/news.html',
        controller: 'news_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/contact', {
        templateUrl: 'html/contact.html',
        controller: 'contact_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/sitemap', {
        templateUrl: 'html/sitemap.html',
        controller: 'sitemap_ctrl',
        controllerAs: 'ctrl'
      }).
      when('/internal', {
        templateUrl: 'html/internal.html',
        controller: 'internal_ctrl',
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
  app.controller('commercial_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/commercial.json").success(function(response) {
      store.data = response;
    });
  }]);
  app.controller('municipal_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/municipal.json").success(function(response) {
      store.data = response;
    });
  }]);
  app.controller('services_ctrl', [ '$http', function($http) {
    var store = this;
    store.data = [];
    $http.get("json/services.json").success(function(response) {
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

  app.controller('sitemap_ctrl', function($scope, $http) { });
  app.controller('news_ctrl', function($scope, $http) { 
    init_gp();
    init_fb(document, 'script', 'facebook-jssdk');
  });

  app.controller('contact_ctrl', function($scope, $http) {
    init_map();

    $scope.success_response = false;
    $scope.error_response = false;

    $scope.submitForm = function() {
      $("#contact_container").hide();
      $("#loading").show();
      
      var request = $http({
        method : 'POST',
        url : 'php/handle_form.php',
        data : {
          name: $scope.name,
          company: $scope.company,
          phone: $scope.phone,
          email: $scope.email,
          message: $scope.message
        }, 
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
      }).success(function(data) {
        $("#loading").hide();
        if(!data.success) {
          $scope.success_response = false;
          $scope.error_response = true;
        }
        else {
          $scope.success_response = true;
          $scope.error_response = false;
        }
        $("#contact_container").show();
      });
    };
  });

  app.controller('internal_ctrl', function($scope, $http) {
    
  });

  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) { $(this).collapse('hide'); }
  });
})();

