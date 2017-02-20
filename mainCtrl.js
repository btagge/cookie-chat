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


    
    
   


 
    

    // $scope.reset = function() {
    //   // Example with 1 argument
    //   $scope.user = angular.copy($scope.master);
    // };

    // $scope.update = function(user) {
    //   // Example with 2 arguments
    //   angular.copy(user, $scope.master);
    // };

    // $scope.reset();
 
  
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

});