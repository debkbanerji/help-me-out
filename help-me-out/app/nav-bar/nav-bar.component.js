angular.module('navBar').component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',

    controller: ['$window', '$scope', '$location', function navBarController($window, $scope, $location) {
        var self = this;
        updateNavBar($location, self);

        $scope.$on('$routeChangeSuccess', function () {
            updateNavBar($location, self);
        });

        this.signOut = function () {
            console.log("BEFORE SIGNOUT:" + firebase.auth().currentUser.displayName);
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
                console.log("SIGNED OUT");
                $window.location.href = '/login';
                $location.path('/login');
            }, function(error) {
                // An error happened.
            });
        }
    }

    ]
});

function updateNavBar(location, self) {
    self.path = location.path();
    self.url = location.url();
    self.requestAService = /request-a-service$/.test(self.path);
    self.distributeServices = /distribute-services$/.test(self.path);
    self.viewAssignments = /view-assignments$/.test(self.path);
    self.about = /about$/.test(self.path);
}