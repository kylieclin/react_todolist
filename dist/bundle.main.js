!function(t){function e(e){for(var o,i,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={0:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;a.push([124,1]),n()}({124:function(t,e,n){n(125),t.exports=n(320)},318:function(t,e,n){var o=n(319);"string"==typeof o&&(o=[[t.i,o,""]]);n(117)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},319:function(t,e,n){(t.exports=n(116)(!1)).push([t.i,"body {\n  color: #96858F;\n  font-size: 2rem; }\n\n.todos {\n  height: 100%;\n  width: 100%;\n  position: relative; }\n\n.todolist {\n  margin: 2% 0; }\n  .todolist:nth-child(even) {\n    background-color: #d5d5d5; }\n  .todolist:hover .delete {\n    width: 50px;\n    opacity: 1; }\n\n.todocontent, .delete {\n  display: inline-block; }\n\n.delete {\n  height: 100%;\n  width: 0;\n  background-color: #6d7993;\n  transition: 0.5s linear;\n  opacity: 0;\n  margin-right: 20px;\n  text-align: center;\n  color: #d5d5d5; }\n\n#todoinput {\n  color: #96858F; }\n  #todoinput:focus {\n    font-size: 1em;\n    border-bottom: 1px solid #d5d5d5;\n    -webkit-box-shadow: 0 1px 0 0 #d5d5d5;\n    box-shadow: 0 1px 0 0 #d5d5d5; }\n\nlabel.active {\n  color: #6d7993 !important; }\n",""])},320:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n.n(o),a=n(123),i=n.n(a),c=(n(295),n(298),n(58)),u=n.n(c),l=(n(318),function(t){var e=t.id,n=t.title,o=(t.detail,t.classes),a=o.todolist,i=o.todocontent,c=o.deletebtn,u=o.col;return r.a.createElement("div",{className:"".concat(a," ").concat(u)},r.a.createElement("span",{onClick:function(){t.delete(e)},className:c},r.a.createElement("i",{className:"material-icons"},"delete_forever")),r.a.createElement("div",{className:i},n))});function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}(this,d(e).apply(this,arguments))}var n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,o.Component),n=e,(a=[{key:"render",value:function(){var t=this,e=this.props,n=e.todos,o=e.callback;return n.map(function(e){return r.a.createElement(l,f({},e,{key:e.id,delete:o,classes:t.props.classes}))})}}])&&p(n.prototype,a),e}();function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var O=function(t){function e(t){var n,o;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(o=v(e).call(this,t))||"object"!==h(o)&&"function"!=typeof o?w(this):o).state={todo:""},n.handleinput=n.handleinput.bind(w(w(n))),n.handlesubmit=n.handlesubmit.bind(w(w(n))),n}var n,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,o.Component),n=e,(a=[{key:"handleinput",value:function(t){var e=t.target.value;this.setState({todo:e})}},{key:"handlesubmit",value:function(t){t.preventDefault(),this.props.callback(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){var o,r,a;o=t,a=n[r=e],r in o?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a})}return t}({},this.state)),this.setState({todo:""})}},{key:"render",value:function(){var t=this.props.classes,e=t.input,n=t.form,o=t.col;return r.a.createElement("div",{className:o},r.a.createElement("form",{onSubmit:this.handlesubmit,className:n},r.a.createElement("input",{autoComplete:"off",id:e,className:e,type:"text",name:"todo",value:this.state.todo,onChange:this.handleinput}),r.a.createElement("label",{htmlFor:e},"Add Something To Do")))}}])&&m(n.prototype,a),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e,n,o,r,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}function S(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var a=t.apply(e,n);function i(t){_(a,o,r,i,c,"next",t)}function c(t){_(a,o,r,i,c,"throw",t)}i(void 0)})}}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var N=function(t){function e(t){var n,o;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(o=E(e).call(this,t))||"object"!==j(o)&&"function"!=typeof o?x(this):o).state={todolist:[]},n.addtodo=n.addtodo.bind(x(x(n))),n.deletetodo=n.deletetodo.bind(x(x(n))),n}var n,a,i,c,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,o.Component),n=e,(a=[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:(l=S(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("/api/todo_items");case 2:e=t.sent,console.log(e.data.data);try{this.setState({todolist:e.data.data})}catch(t){this.errorHandle()}case 5:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})},{key:"addtodo",value:(c=S(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("/api/todo_items",e);case 2:try{this.getData()}catch(t){this.errorHandle()}case 3:case"end":return t.stop()}},t,this)})),function(t){return c.apply(this,arguments)})},{key:"deletetodo",value:(i=S(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.delete("/api/todo_items/".concat(e));case 2:try{this.getData()}catch(t){this.errorHandle()}case 3:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})},{key:"errorHandle",value:function(){this.setState({error:"Error: Unable to retrieving data"})}},{key:"render",value:function(){var t={todolist:"todolist",todocontent:"todocontent",deletebtn:"delete",input:"todoinput",form:"input-field",col:"col s12 m8"};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"app col s12 m8"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"center"},"Todo")),r.a.createElement(O,{callback:this.addtodo,classes:t}),r.a.createElement("h3",null,this.state.error),r.a.createElement(b,{todos:this.state.todolist,callback:this.deletetodo,classes:t})))}}])&&k(n.prototype,a),e}();i.a.render(r.a.createElement(N,null),document.getElementById("root"))}});