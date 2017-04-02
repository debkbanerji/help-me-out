angular.module('viewAssignments').component('viewAssignments', {
    templateUrl: 'view-assignments/view-assignments.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function viewAssignmentsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.viewAssignmentsRef = firebase.database().ref().child("users").child(user.uid).child("view-assignments");
    }]
});