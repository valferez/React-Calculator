(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(t,e,a){t.exports=a(599)},171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},174:function(t,e,a){},175:function(t,e,a){},176:function(t,e,a){},177:function(t,e,a){},599:function(t,e,a){"use strict";a.r(e);var n=a(4),o=a.n(n),l=a(160),r=a.n(l),s=(a(171),a(161)),i=a(162),c=a(164),d=a(163),p=a(165),u=(a(172),a(173),function(t){return o.a.createElement("div",{className:"title"},"React Calculator")}),h=(a(174),function(t){return o.a.createElement("div",{className:"button-wrapper ".concat((e=t.children,isNaN(e)&&"."!==e&&"="!==e?"operator":null)),onClick:function(){return t.handleClick(t.children)}},t.children);var e}),m=(a(175),function(t){return o.a.createElement("div",{className:"input"},t.input)}),E=(a(176),function(t){return o.a.createElement("div",{className:"clear-btn",onClick:t.handleClear},t.children)}),w=(a(177),function(t){return o.a.createElement("div",{className:"credit"},"VPA")}),v=a(49),T=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(c.a)(this,Object(d.a)(e).call(this,t))).addToInput=function(t){var e=a.state.input,n=a.state.inputTwo,o=a.state.operator,l=a.state.resultInput,r=a.state.operatorBool,s=a.state.dotBool,i=a.state.display;isNaN(t)?(console.log("It's an Operator"),"."===t?!1===s&&(!1===r?""===e?(console.log("But it's a DOT"),a.setState({dotBool:!0,display:i+t,input:i+t})):a.setState({dotBool:!0,display:e+t,input:e+t}):!1===s&&(""===n?(console.log("But it's a DOT"),a.setState({dotBool:!0,display:e+o+"0"+t,inputTwo:"0"+t})):a.setState({dotBool:!0,display:e+o+n+t,inputTwo:n+t,process:e+o+n+t}))):!1===r?a.setState({operator:t,display:e+t,operatorBool:!0,dotBool:!1}):""!==e&&""!==o&&""!==n?a.handleEqualOperation(t):a.setState({operator:t,display:e+t}),console.log(r)):!1===r?""===e?a.setState({display:t,input:t}):"0"===e||""!==l?a.setState({display:t,input:t,resultInput:""}):a.setState({display:e+t,input:e+t}):""===n?(console.log("we're now at InputTwo"),a.setState({display:e+o+t,inputTwo:t,process:e+o+t})):"0"===n?a.setState({display:e+o+t,inputTwo:t}):a.setState({display:e+o+n+t,inputTwo:n+t,process:e+o+n+t})},a.handleClear=function(){a.setState({display:"0",input:"",inputTwo:"",operator:"",process:"",resultInput:"",operatorBool:!1,dotBool:!1})},a.handleEqual=function(){var t=a.state.input,e=a.state.inputTwo,n=a.state.operator;""!==t&&""!==n&&""!==e&&a.setState({display:v.eval(a.state.process),input:v.eval(a.state.process),inputTwo:"",operator:"",resultInput:v.eval(a.state.process),operatorBool:!1,dotBool:!1})},a.handleEqualOperation=function(t){var e=a.state.input,n=a.state.inputTwo,o=a.state.operator;""!==e&&""!==o&&""!==n&&a.setState({display:v.eval(a.state.process)+t,input:v.eval(a.state.process),inputTwo:"",operator:t,resultInput:v.eval(a.state.process),operatorBool:!0,dotBool:!1})},a.state={display:"0",input:"",inputTwo:"",operator:"",process:"",resultInput:"",operatorBool:!1,dotBool:!1},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"calc-wrapper"},o.a.createElement("div",{className:"row"},o.a.createElement(u,null)),o.a.createElement(m,{input:this.state.display}),o.a.createElement("div",{className:"row"},o.a.createElement(h,{handleClick:this.addToInput},"7"),o.a.createElement(h,{handleClick:this.addToInput},"8"),o.a.createElement(h,{handleClick:this.addToInput},"9"),o.a.createElement(h,{handleClick:this.addToInput},"/")),o.a.createElement("div",{className:"row"},o.a.createElement(h,{handleClick:this.addToInput},"4"),o.a.createElement(h,{handleClick:this.addToInput},"5"),o.a.createElement(h,{handleClick:this.addToInput},"6"),o.a.createElement(h,{handleClick:this.addToInput},"*")),o.a.createElement("div",{className:"row"},o.a.createElement(h,{handleClick:this.addToInput},"1"),o.a.createElement(h,{handleClick:this.addToInput},"2"),o.a.createElement(h,{handleClick:this.addToInput},"3"),o.a.createElement(h,{handleClick:this.addToInput},"+")),o.a.createElement("div",{className:"row"},o.a.createElement(h,{handleClick:this.addToInput},"."),o.a.createElement(h,{handleClick:this.addToInput},"0"),o.a.createElement(h,{handleClick:function(){return t.handleEqual()}},"="),o.a.createElement(h,{handleClick:this.addToInput},"-")),o.a.createElement("div",{className:"row"},o.a.createElement(E,{handleClear:this.handleClear},"Clear")),o.a.createElement(w,null)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[166,1,2]]]);
//# sourceMappingURL=main.860a3404.chunk.js.map