let myapp = angular.module('mockApp', [])
myapp.controller('mockController', function($scope, $http) {
  $scope.getUsers = function(){
    $scope.newUser = {}
    $scope.recordText = ""
    $http.get('/users')
      .then(function (response) {
          $scope.users = response.data;
      }, function (reason) {
          $scope.error = reason.data;                  
      });
  }
  
  $scope.addUser = function(){
    $http.post('/users', $scope.newUser)
      .then(function (response) {
        $scope.getUsers()
      }, function (reason) {
        $scope.error = reason.data;
      });
  }

  $scope.editSelectedUser = function(id, date, name, age){
    $scope.newUser = {}
    $scope.newUser.id = id
    $scope.newUser.date = date
    $scope.newUser.name = name
    $scope.newUser.age = age
    $scope.toggle = !$scope.toggle
  }

  $scope.editUser = function(){
    $http.put(`/users/${$scope.newUser.id}`, $scope.newUser)
      .then(function (response) {
        $scope.toggle = !$scope.toggle
        $scope.getUsers()
      }, function (reason) {
        $scope.error = reason.data;
      });
  }

  $scope.deleteUser = function(id){
    let decision = confirm('Are you sure?')
    if (decision == true){
      $http.delete(`/users/${id}`)
        .then(function (response) {
          $scope.getUsers()
        }, function (reason) {
          $scope.error = reason.data;
        });
    }
  }
  
  $scope.checkRecord = function(){
    if ($scope.newUser.age > 123) {
      $scope.recordText = `New Record for longest living/lived person. Current record is by Jeanne Calment of France (1875–1997), who lived to the age of 122 years, 164 days.`
    } else {
      $scope.recordText = ""
    }
  }

  $scope.init = function(){
    $scope.toggle = false
    $scope.$watch('toggle', function(){
      $scope.toggleText = !$scope.toggle ? 'Create New User' : 'Update';
    })
    $scope.getUsers()
  }
})