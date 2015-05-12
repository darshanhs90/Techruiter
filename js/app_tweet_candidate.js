/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
$scope.a=true;

$scope.linkr='';

$scope.calculate_score=function(){
	alert("Your score is:"+1.24065);
	$http.get('http://127.0.0.1:1337/getScore')
	.success(function(data, status, headers, config) {
		console.log(data["overall_Score"]);
		//alert("Your score is:"+data.overall_Score);

	});
};
});
