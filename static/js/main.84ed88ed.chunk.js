(this.webpackJsonpfinalgrade=this.webpackJsonpfinalgrade||[]).push([[0],{11:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t(1),c=t.n(a),u=t(5),j=t.n(u),l=(t(4),t(2));t(11);var s=function(e){return""!==e.currentGrade&&""!==e.finalGrade?Object(n.jsxs)("h3",{className:"CalcOutput",children:[Math.round(100*((e.percent/100-e.currentGrade/100*(1-e.finalGrade/100))/(e.finalGrade/100)*100+Number.EPSILON))/100,"%"]}):Object(n.jsx)("h3",{className:"CalcError",children:"Input is blank."})};var i=function(e){return Object(n.jsxs)("div",{className:"Calc",children:[Object(n.jsxs)("h2",{children:["Custom: ",""===e.custom?0:e.custom,"%"]}),Object(n.jsx)(s,{percent:e.custom,currentGrade:e.currentGrade,finalGrade:e.finalGrade}),Object(n.jsx)("h2",{children:"A 90%:"}),Object(n.jsx)(s,{percent:"90",currentGrade:e.currentGrade,finalGrade:e.finalGrade}),Object(n.jsx)("h2",{children:"B 80%:"}),Object(n.jsx)(s,{percent:"80",currentGrade:e.currentGrade,finalGrade:e.finalGrade}),Object(n.jsx)("h2",{children:"C 70%:"}),Object(n.jsx)(s,{percent:"70",currentGrade:e.currentGrade,finalGrade:e.finalGrade}),Object(n.jsx)("h2",{children:"D 60%:"}),Object(n.jsx)(s,{percent:"60",currentGrade:e.currentGrade,finalGrade:e.finalGrade})]})};var d=function(){var e=Object(a.useState)(90),r=Object(l.a)(e,2),t=r[0],c=r[1],u=Object(a.useState)(20),j=Object(l.a)(u,2),s=j[0],d=j[1],b=Object(a.useState)(100),O=Object(l.a)(b,2),o=O[0],h=O[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Final Grade Calculator"}),Object(n.jsxs)("form",{className:"GradeForm",children:[Object(n.jsx)("label",{children:"Current Grade: "}),Object(n.jsx)("input",{type:"number",value:t,onChange:function(e){return c(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Final Weight: "}),Object(n.jsx)("input",{type:"number",value:s,onChange:function(e){return d(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Custom Goal: "}),Object(n.jsx)("input",{type:"number",value:o,onChange:function(e){return h(e.target.value)}})]}),Object(n.jsx)(i,{currentGrade:t,finalGrade:s,custom:o})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(r){var t=r.getCLS,n=r.getFID,a=r.getFCP,c=r.getLCP,u=r.getTTFB;t(e),n(e),a(e),c(e),u(e)}))};j.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),b()},4:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.84ed88ed.chunk.js.map