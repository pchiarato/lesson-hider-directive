angular.module('app').controller('mainCtrl',function($scope){
    
   $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    
    $scope.test = "Two-way data binding!";
    
    $scope.announceDay = function(lesson,day){
        if(day){
        alert(lesson + ' is active on ' + day + ".");
        } else {
            alert(lesson + ' is not available at this time.');
        }
    }
    
    

});