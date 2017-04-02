angular.module('distributeServices').component('distributeServices', {
    templateUrl: 'distribute-services/distribute-services.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function distributeServicesController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.distributeServicesRef = firebase.database().ref().child("users").child(user.uid).child("distribute-services");
    }]
});