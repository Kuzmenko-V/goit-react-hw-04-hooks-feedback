(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),o=(c(9),c(2)),i=(c(10),c(0));function j(e){return"good"===e?"\u0425\u043e\u0440\u043e\u0448\u043e":"neutral"===e?"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e":"bad"===e?"\u041f\u043b\u043e\u0445\u043e":void 0}var l=function(e){var t=e.options,c=e.onIncStats;return Object(i.jsx)("div",{className:"Feedback-controls",children:t.map((function(e,t){return Object(i.jsx)("button",{type:"button",name:e,onClick:c,children:j(e)},t)}))})},u=function(e){var t=e.good,c=e.neutral,n=e.bad,a=e.total,s=e.positivePercentage;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"Counter-value",children:["\u0425\u043e\u0440\u043e\u0448\u043e: ",t]}),Object(i.jsxs)("p",{className:"Counter-value",children:["\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e: ",c]}),Object(i.jsxs)("p",{className:"Counter-value",children:["\u041f\u043b\u043e\u0445\u043e: ",n]}),Object(i.jsxs)("p",{className:"Counter-value",children:["\u0412\u0441\u043b\u0435\u0433\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432: ",a]}),Object(i.jsxs)("p",{className:"Counter-value",children:["\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432: ",s,"%"]})]})},d=function(e){var t=e.title,c=e.children;return Object(i.jsxs)("div",{children:[t&&Object(i.jsx)("h2",{children:t}),c]})};d.defaultProps={title:"",children:[]};var b=d,h=function(e){var t=e.message;return Object(i.jsx)("div",{className:"Notification",children:Object(i.jsx)("p",{children:t})})};h.defaultProps={message:""};var O=h;function v(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(o.a)(s,2),j=r[0],d=r[1],h=Object(n.useState)(0),v=Object(o.a)(h,2),x=v[0],p=v[1],f=c+j+x,m=Math.round(100*c/f);return Object(i.jsxs)("div",{className:"Counter",children:[Object(i.jsx)(b,{title:"\u041e\u0441\u0442\u0430\u0432\u0442\u0435 \u0441\u0432\u043e\u0439 \u043e\u0442\u0437\u044b\u0432.",children:Object(i.jsx)(l,{options:["good","neutral","bad"],onIncStats:function(e){switch(e.target.name){case"good":a(c+1);break;case"neutral":d(j+1);break;case"bad":p(x+1);break;default:return}}})}),Object(i.jsx)(b,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",children:f>0?Object(i.jsx)(u,{good:c,neutral:j,bad:x,total:f,positivePercentage:m}):Object(i.jsx)(O,{message:"\u041f\u043e\u043a\u0430 \u0447\u0442\u043e \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432."})})]})}var x=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(v,{})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.021a3bb4.chunk.js.map