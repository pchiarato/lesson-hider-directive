angular.module('app').directive('hider',function(){
    
    return {
        restrict: "E",
        templateUrl:'hider.html',
        scope: {
            lesson: '=',
            dayAlert: '&'
            
        },
        controller: function($scope, lessonService){
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: function ($scope, element, attribute) {
                $scope.getSchedule.then(function (response) {
                    $scope.schedule = response.data;

                    $scope.schedule.forEach(function (scheduleDay) {
                        if (scheduleDay.lesson === $scope.lesson) {
                            $scope.lessonDay = scheduleDay.weekday;
                            element.css("text-decoration", 'line-through');
                            return;
                        }
                    });
                });
            
         
            
        }
    }
    
});