angular.module('viewAssignments').component('viewAssignments', {
    templateUrl: 'view-assignments/view-assignments.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewAssignmentsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.requestsRef = firebase.database().ref().child("users").child(user.uid);
        self.requestsArray =  $firebaseArray(self.requestsRef)
    }]
});