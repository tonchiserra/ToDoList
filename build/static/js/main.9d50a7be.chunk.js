(this["webpackJsonptodo-web"]=this["webpackJsonptodo-web"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),s=n.n(r),a=(n(12),n(5)),i=n(7),d=n(20),l=(n(13),n(14),n(15),n(0));function u(t){var e=t.todo,n=t.toggleTodo,c=e.id,o=e.task,r=e.completed;return Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{className:"task-checkbox",type:"checkbox",checked:r,onChange:function(){n(c)}}),r?Object(l.jsx)("strike",{children:o}):o]})}function j(t){var e=t.todos,n=t.toggleTodo;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(u,{todo:t,toggleTodo:n},t.id)}))})}n(17);function b(){return Object(l.jsxs)("footer",{children:["\xa9 Copyright 2021 - App web desarrollada por ",Object(l.jsx)("a",{href:"https://gserra.netlify.app/",target:"_blank",rel:"noopener",children:"Gonzalo Serra"}),"."]})}var f="todoApp.todos";function p(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1],s=Object(c.useRef)();Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(f));t&&r(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(f,JSON.stringify(n))}),[n]);return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsxs)("section",{className:"app-content",children:[Object(l.jsx)("h1",{className:"title",children:"ToDoList"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"add-task-content",children:[Object(l.jsx)("input",{className:"input-add-task",ref:s,type:"text",placeholder:"Add task"}),Object(l.jsx)("button",{className:"button-add-task",onClick:function(){var t=s.current.value;""!==t&&(r((function(e){return[].concat(Object(a.a)(e),[{id:Object(d.a)(),task:t,completed:!1}])})),s.current.value=null)},children:"Add"})]}),Object(l.jsx)(j,{todos:n,toggleTodo:function(t){var e=Object(a.a)(n),c=e.find((function(e){return e.id===t}));c.completed=!c.completed,r(e)}}),Object(l.jsxs)("div",{className:"text-task-to-finish",children:["Te quedan ",n.filter((function(t){return!t.completed})).length," tareas por terminar"]})]}),Object(l.jsx)(b,{})]})}s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9d50a7be.chunk.js.map