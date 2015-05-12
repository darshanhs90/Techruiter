/**
 * Created by darshan on 3/16/2015.
 */


  var app=angular.module('DemoApp', []);

        app.controller('DemoCtrl', function($scope,$http) {
        	$scope.x=0;
        	$scope.y=0;
        	$scope.z=0;
        	
            $scope.parse=function(){
                $http.get('http://127.0.0.1:1337/parseResume')
                .success(function(data, status, headers, config) {
                	console.log(data);
                	$scope.x=data.substring(0,1);
					$scope.y=data.substring(1,2);
                	$scope.z=data.substring(2);
                	console.log($scope.x);
					console.log($scope.y);
                	console.log($scope.z);



                });


            };


            $scope.gennotes=function(){
                setTimeout(function(){
                alert('The Java language is completely specified; all data-type sizes and formats are defined as part of the language.Java is an object-oriented programming language developed by Sun Microsystems, a company best known for its high-end Unix workstations. Modeled after C++, the Java language was designed to be small, simple, and portable across platforms and operating systems, both at the source and at the binary level (more about this later');
            
            },1000);
};
	  });
    

