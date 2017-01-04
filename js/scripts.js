$(function(){

    Handlebars.registerHelper('date', function(txt) {
        var date = Date.parse(Handlebars.escapeExpression(txt));

        return date.toString("MMM d, yyyy");
    });

    $.getJSON("data/categories.json", function(data){
        var nav = Handlebars.compile($("#nav").html());
        var navHTML = nav(data);
        $("#app-nav").html(navHTML);
    });

    $.getJSON("data/tasks.json", function(data){
        var tasks = Handlebars.compile($("#tasks").html());
        var tasksHTML = tasks(data);
        $("#task-lists").html(tasksHTML);
    });

    $.getJSON("data/task.json", function(data){
        var taskForm = Handlebars.compile($("#edit-task").html());
        var taskFormHTML = taskForm(data);
        $("#modal .modal-content").html(taskFormHTML);
    });

    $("body").on("click", function(e){
        var $target = $(e.target);
        if ($target.closest(".task").length > 0) {
            e.preventDefault();
            $("#modal").addClass("on");
        }
        if ($target.hasClass("modal")) {
            e.preventDefault();
            $("#modal").removeClass("on");
        }
    });

});