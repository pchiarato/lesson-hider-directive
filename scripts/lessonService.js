angular.module('app').service('lessonService',function($http){
    
    var lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
    
    this.getSchedule = function(){
        
       return $http.get("schedule.json");
    }
    
    
})


    