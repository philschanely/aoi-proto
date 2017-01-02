$(function(){

    Handlebars.registerHelper('date', function(txt) {
        var date = Date.parse(Handlebars.escapeExpression(txt));

        return date.toString("MMM d, yyyy");
    });

    $.getJSON("data/categories.json", function(data){
        var nav = Handlebars.compile($("nav").html());
        var navHTML = nav(data);
        $("nav").html(navHTML);
    });

    $.getJSON("data/tasks.json", function(data){
        var tasks = Handlebars.compile($("main").html());
        var tasksHTML = tasks(data);
        $("main").html(tasksHTML);
    });

});