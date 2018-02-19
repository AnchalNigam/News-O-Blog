var newsBlogApp = angular.module("newsBlogApp", ["ngRoute"]);

//Controller for displaying all Blogs

newsBlogApp.controller('blogController', function() {
    this.blogs=[{
     id:1,
	 heading:"Slice()",
	 subheading:"Let's dive into the javascript world:Slice()",
	 body:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)." +
	 "The original array will not be modified",
	   Author:"Anchal Nigam",
	   image:"images/code.png",
	   createdOn:"June 12,2012"

    },
    {
    id:2,
    heading:"Map()",
    subheading:"Let's dive into the javascript world:Map()",
    body:"The map() method creates a new array with the results of calling a provided function on every element in the calling array." ,
  
    Author:"Anchal Nigam",
    image:"images/code2.png",
    createdOn:"June 10,2012"

    }

    ];
	});
//Controller for displaying Single Blog information
newsBlogApp.controller('singleBlogController',['$routeParams', function($routeParams) {
   this.blogId=$routeParams.blogId;
   this.blogs=[{
     id:1,
	 heading:"Slice()",
	 subheading:"Let's dive into the javascript world:Slice()",
	 body:"The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).The original \
	 array will not be modified.",
	
	   Author:"Anchal Nigam",
	   image:"images/code.png",
	   createdOn:"June 12,2012"

    },
    {
    id:2,
    heading:"Map()",
    subheading:"Let's dive into the javascript world:Map()",
    body:"The map() method creates a new array with the results of calling a provided function on every element in the calling array." ,
         
        
    Author:"Anchal Nigam",
    image:"images/code2.png",
    createdOn:"June 10,2012"

    }

    ];
    this.blog=this.blogs[this.blogId-1];
    


}]);
//controller for rss feed
newsBlogApp.controller('newsController',['$http', function($http) {
	var main=this;
    this.internationalNews=[];
    this.loadInternationalNews = function(){
   
      $http({
        method:"GET",
        url: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0f7a319a1d824142a7e15415275f97a1"
          
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        
          main.internationalNews=response.data.articles;
        
         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all International News
//start of national news

this.nationalNews=[];
  this.loadNationalNews = function(){
  
      $http({
        method:"GET",
        url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=0f7a319a1d824142a7e15415275f97a1"
          
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        
          main.nationalNews=response.data.articles;

         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all National News

//start of sports news

this.sportsNews=[];
  this.loadSportsNews = function(){
  
      $http({
        method:"GET",
        url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0f7a319a1d824142a7e15415275f97a1"
          
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        
          main.sportsNews=response.data.articles;

         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all Sports News

  //start of Entertainment news

this.entertainmentNews=[];
  this.loadEntertainmentNews = function(){
  
      $http({
        method:"GET",
        url: "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0f7a319a1d824142a7e15415275f97a1"
          
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        
          main.entertainmentNews=response.data.articles;

          console.log(main.entertainmentNews);
         

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });


  }// end load all Entertainment News

this.loadInternationalNews();
this.loadNationalNews();
this.loadSportsNews();
this.loadEntertainmentNews();


}]);