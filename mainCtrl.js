chatroom.controller('mainCtrl', function($scope, messageService) {

    $scope.getMessages = function() {
       messageService.getMessages().then(function(response) {
           $scope.messages = response.data;
       }, function(error) {
           console.log(error);
       });
           
    };
    
    $scope.getMessages();

    $scope.postMessage = function(message) { 
       messageService.postMessage(message).then(function(message) {
       $scope.message = angular.copy('');
        });
    }
 
  
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

});