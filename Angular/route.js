newsBlogApp.config(['$routeProvider', function($routeProvider){

       $routeProvider
        .when('/',{                                               //Main page
            // location of the template
        	templateUrl		: 'views/news.html',
        	 // Which controller it should use 
            controller      : 'newsController',
            // what is the alias of that controller.
            controllerAs    : 'myNews'
            
        })
         .when('/bloggers',{                                        //Bloggers page
            // location of the template
        	templateUrl		: 'views/blogger.html',
        	
            
        })
          .when('/blogs',{                                            //Blogs page
            // location of the template
        	templateUrl		: 'views/blogs.html',
            // Which controller it should use 
            controller      : 'blogController',
            // what is the alias of that controller.
            controllerAs    : 'myBlog'
        	
            
        })
          .when('/blogs/:blogId',{                  //Single Blog page
            // location of the template
            templateUrl     : 'views/single.html',
            // Which controller it should use 
            controller      : 'singleBlogController',
            // what is the alias of that controller.
            controllerAs    : 'mySingleBlog'
            
            
        })
           .when('/contact-us',{
            // location of the template
        	templateUrl		: 'views/contact.html',
        	
            
        })
            .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1 class="text-center">404 page not found</h1>'
            }
        );
         




}]);