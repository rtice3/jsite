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

  var about_carousel = [{
      img_src: "img/home/home_00.jpeg",
      header_txt: "Welcome to Jones Contracting Inc.",
      caption_txt: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      btn_dest: "#contact",
      btn_txt: "Contact Us",
    }, {
      img_src: "img/home/home_01.jpeg",
      header_txt: "Residential Services",
      caption_txt: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      btn_dest: "#residential",
      btn_txt: "Residential Services",
    }, {
      img_src: "img/home/home_07.jpeg",
      header_txt: "Municipal & State Services",
      caption_txt: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      btn_dest: "#municipal",
      btn_txt: "Municipal & State Services",
  }];

  var about_marketing = [{
      img_src: "img/construction11.png",
      header_txt: "Local",
      body_txt: "Jones Contracting, Inc. is a family owned and operated excavation company offering services in excavation and site work, septic system, utilities, asphalt paving, landscape construction, and snow plowing and removal. Located in Walpole, MA, we take on residential, commercial and public projects across Eastern Massachusetts.",
      btn_dest: "#",
      btn_txt: "View details",
    },
    {
      img_src: "img/bulldozer2.png",
      header_txt: "Quality",
      body_txt: "Our team is made up of seasoned professionals, including our experienced crew and degreed engineers. Jones Contracting, Inc. is licensed, insured, and bonded for any of your excavation service needs. We are committed to superior quality work, customer service, and attention to detail. We believe in serving our clients without cutting corners.",
      btn_dest: "#",
      btn_txt: "View details",
    },
    {
      img_src: "img/truck29.png",
      header_txt: "Service",
      body_txt: "Please browse our site for information about our work and photographs of our past projects. We are glad to provide free estimates and quotes for any of your excavation needs - big or small.</p><p>We look forward to working with you.",
      btn_dest: "#",
      btn_txt: "View details",
  }];

  var excavation_carousel = [{
      img_src: "img/excavating/excavating_07.png",
    },
    {
      img_src: "img/excavating/excavating_03.png",
  }];

})();
