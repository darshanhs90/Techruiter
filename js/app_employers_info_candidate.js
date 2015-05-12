/**
 * Created by darshan on 3/16/2015.
 */


var app=angular.module('DemoApp', []);
app.controller('DemoCtrl', function($scope,$http) {
	$scope.b=false;
	$scope.temp='';
	$scope.company_name='';
  $scope.snascore='Neutral';
$scope.getinfo=function(a){
	$scope.b=true;
	$http({
    url: 'http://localhost:1337/dnb', 
    method: "GET",
    params: {txtval: a}
 }).success(function(data, status, headers, config) {
    //alert(data.type);
    console.log(data);
    $scope.company_name=data.organization.name;
    $scope.nme=data.organization.name;
    console.log($scope.company_name);
    if(data.organization.isFortune1000Listed==true)
    	$scope.fortune_thousand='Yes'
    else
    	$scope.fortune_thousand='No'
	var address=(data.organization.primaryAddress.addressLocality+','+data.organization.primaryAddress.addressRegion);
    $scope.employees_count=data.organization.numberOfEmployees.value;
    $scope.address=data.organization.primaryAddress.streetAddress.line1+','+address;

    $scope.telephone_nbr=data.organization.telephone.isdCode+' '+data.organization.telephone.number;

    $scope.yearlyRevenue=data.organization.yearlyRevenue.value;

    $scope.addressCountry=data.organization.primaryAddress.addressCountry.name;

    $scope.ipDomainName=data.inquiryMatch.ipDomainName;
    console.log(data.inquiryMatch.ipDomainName);


 var address=(data.organization.primaryAddress.addressLocality+','+data.organization.primaryAddress.addressRegion);
 

   var map = new google.maps.Map(document.getElementById('map'), { 
       mapTypeId: google.maps.MapTypeId.TERRAIN,
       zoom: 12
   });

   var geocoder = new google.maps.Geocoder();

   geocoder.geocode({
      'address': address
   }, 
   function(results, status) {
      if(status == google.maps.GeocoderStatus.OK) {
         new google.maps.Marker({
            position: results[0].geometry.location,
            map: map
         });
         map.setCenter(results[0].geometry.location);
      }
      else {
         // Google couldn't geocode this request. Handle appropriately.
      }
   });











});

$http({
    url: 'http://localhost:1337/twitterSentiment', 
    method: "GET",
    params: {txtval: a}
 }).success(function(data, status, headers, config) {
  $scope.snascore=data.total;

  if(data.total>0.5)
      $scope.snascore='Positive';
    else 
      $scope.snascore='Negative';
 }).error(function(error){
    $scope.snascore='Neutral';

 });

$http({
    url: 'http://localhost:1337/linkedinFeed', 
    method: "GET",
    params: {txtval: a}
 }).success(function(data, status, headers, config) {
    $scope.feed=(data);
    console.log(data);
 }).error(function(error){
    $scope.feed='';

 });






	}
});
    