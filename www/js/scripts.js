var app = new Framework7({
    root: "#app",
    /* app element */
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
        {
            path: '/page3/',
            url: 'pages/page3.html',
        },
        {
            path: '/page4/',
            url: 'pages/page4.html',
        },
        {
            path: '/page5/',
            url: 'pages/page5.html',
        },
        {
            path: '/page6/',
            url: 'pages/page6.html',
        },
        {
            path: '/page7/',
            url: 'pages/page7.html',
        },
        {
            path: '/pageblah/',
            url: 'pages/pageblah.html',
        },
        {
            path: '/page9/',
            url: 'pages/page9.html',
        },
        {
            path: '/page10/',
            url: 'pages/page10.html',
        },
        {
            path: '/page11/',
            url: 'pages/page11.html',
        },
        {
            path: '/page12/',
            url: 'pages/page12.html',
        },
        {
            path: '/page2lose/',
            url: 'pages/page2lose.html',
        },
        {
            path: '/page3lose/',
            url: 'pages/page3lose.html',
        },
        {
            path: '/page4lose/',
            url: 'pages/page4lose.html',
        },
        {
            path: '/page5lose/',
            url: 'pages/page5lose.html',
        },
        {
            path: '/page6lose/',
            url: 'pages/page6lose.html',
        },
        {
            path: '/page7lose/',
            url: 'pages/page7lose.html',
        },
        {
            path: '/page8lose/',
            url: 'pages/page8lose.html',
        },
        {
            path: '/page9lose/',
            url: 'pages/page9lose.html',
        },
        {
            path: '/page10lose/',
            url: 'pages/page10lose.html',
        },
        {
            path: '/page11lose/',
            url: 'pages/page11lose.html',
        },
        
    ]
});

   




// Deafault setting of entries doesn't work because start button empties them
//   var newfood = $("pizza");
//   var newfood2 = $("noodles");
//   var newstore = $("the pizza shop"); 
//   var newfriend = $("Big Bob");
//   var newrandomobject = $("bag of nails"); 



var mainView = app.views.create('.view-main');

$(document).on('page:init', '.page[data-name="pageblah"]', function () {

    $("#input-food").html(newfood);
    $("#input-food2").html(newfood2);

});

$(document).on('page:init', '.page[data-name="page4"]', function () {

    $("#input-friend").html(newfriend);
    $("#input-store").html(newstore);

});

$(document).on('page:init', '.page[data-name="page7"]', function () {

    $("#input-food").html(newfood);
    $("#input-food2").html(newfood2);

});

$(document).on('page:init', '.page[data-name="page9"]', function () {

    $("#input-food").html(newfood);
    $("#input-food2").html(newfood2);

});

$(document).on('page:init', '.page[data-name="page5lose"]', function (){

    $("#input-randomobject").html(newrandomobject);

});

$("#startbtn").on("click", function (e) {

    newfood = $("#food").val(); //pull the value from the input field in
    newfood2 = $("#food2").val();
    newstore = $("#store").val();
    newfriend = $("#friend").val();
    newrandomobject = $("#randomobject").val();


    console.log(newfood);
    console.log(newfood2);
    console.log(newstore);
    console.log(newfriend);
    console.log(newrandomobject);
});
