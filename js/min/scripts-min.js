$(function(){Handlebars.registerHelper("date",function(a){var t=Date.parse(Handlebars.escapeExpression(a));return t.toString("MMM d, yyyy")}),$.getJSON("data/categories.json",function(a){var t=Handlebars.compile($("#nav").html()),e=t(a);$("#app-nav").html(e)}),$.getJSON("data/tasks.json",function(a){var t=Handlebars.compile($("#tasks").html()),e=t(a);$("#task-lists").html(e)}),$.getJSON("data/task.json",function(a){var t=Handlebars.compile($("#edit-task").html()),e=t(a);$("#modal .modal-content").html(e)}),$("body").on("click",function(a){var t=$(a.target);t.closest(".task").length>0&&(a.preventDefault(),$("#modal").addClass("on")),t.hasClass("modal")&&(a.preventDefault(),$("#modal").removeClass("on")),t.hasClass("btn-expand")&&(a.preventDefault(),$("#app-options").toggleClass("expanded"),$("#btn-add-task").toggleClass("expanded"))})});