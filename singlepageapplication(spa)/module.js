var app=angular.module("myMod",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/teacher",{
        templateUrl:'views/teachers.html',
        controller:'teacher_ctr'
    }).
    when("/student",{
        templateUrl:'views/students.html',
        controller:'student_ctr'
    }).
    when("/course",{
        templateUrl:'views/courses.html',
        controller:'course_ctr'
    }).
    when("/gallery",{
        templateUrl:'views/gallery.html',
        controller:'gallery_ctr'
    }).
    otherwise({
        redirectTo:'index.html'
    })
}]);
app.controller("teacher_ctr",function($scope){
    $scope.teachers=[
        {name:'Adil',age:27,qualification:'MCS'},
        {name:'Vedant',age:29,qualification:'MCSA'},
        {name:'Aman',age:28,qualification:'MCSS'},
        {name:'Shubham',age:24,qualification:'MCSH'},
        {name:'Nishant',age:22,qualification:'MCSL'}
    ];

})

app.controller("student_ctr",function($scope){
    $scope.students=["Adil","Vedant","Aman","Shubham","Nishant"];
})
app.controller("course_ctr",function($scope){
    
})
app.controller("gallery_ctr",function($scope){
    
})