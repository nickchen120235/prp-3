(this["webpackJsonpprp-3"]=this["webpackJsonpprp-3"]||[]).push([[0],{71:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var c=t(4),o=t(1),a=t.n(o),s=t(17),r=t.n(s),i=(t(71),t(12)),u=t(124),A=t(99),m=t(100),l=t(127),p=t(129),b=t(128),S=t(125),j=t(126),f=t(122),y=t(123),x=t(120),g=Object(x.a)((function(){return{appbar:{alignItems:"center"}}})),E=function(e){var n=g();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.a,{className:n.appbar,elevation:0,children:Object(c.jsx)(y.a,{children:Object(c.jsx)(m.a,{variant:"h4",children:e.title})})}),Object(c.jsx)(y.a,{})]})},O=t(15),h=[{female:26,local:69,USA:7,SA:0,EU:20,MEA:1,ASIA:3,businessmen:78,tourists:22,DR:70,agency:20,AC:10,u20:2,to35:25,to55:48,m55:25,price:163,LoS:1.65,occupancy:67,conventions:0},{female:21,local:70,USA:6,SA:0,EU:15,MEA:0,ASIA:10,businessmen:80,tourists:20,DR:70,agency:18,AC:12,u20:2,to35:27,to55:49,m55:22,price:167,LoS:1.71,occupancy:82,conventions:0},{female:26,local:77,USA:3,SA:0,EU:14,MEA:0,ASIA:6,businessmen:85,tourists:15,DR:75,agency:19,AC:6,u20:4,to35:37,to55:42,m55:17,price:166,LoS:1.65,occupancy:70,conventions:0},{female:28,local:71,USA:6,SA:0,EU:15,MEA:8,ASIA:0,businessmen:86,tourists:14,DR:74,agency:17,AC:9,u20:2,to35:35,to55:48,m55:15,price:174,LoS:1.91,occupancy:83,conventions:1},{female:20,local:37,USA:23,SA:8,EU:23,MEA:6,ASIA:3,businessmen:85,tourists:15,DR:69,agency:27,AC:4,u20:2,to35:25,to55:54,m55:19,price:152,LoS:1.9,occupancy:74,conventions:1},{female:20,local:36,USA:14,SA:6,EU:27,MEA:4,ASIA:13,businessmen:87,tourists:13,DR:68,agency:27,AC:5,u20:1,to35:25,to55:55,m55:19,price:155,LoS:2,occupancy:77,conventions:1},{female:20,local:39,USA:19,SA:6,EU:22,MEA:6,ASIA:8,businessmen:70,tourists:30,DR:74,agency:19,AC:7,u20:1,to35:27,to55:53,m55:19,price:145,LoS:1.54,occupancy:56,conventions:0},{female:20,local:39,USA:14,SA:4,EU:30,MEA:4,ASIA:9,businessmen:76,tourists:24,DR:75,agency:19,AC:6,u20:2,to35:28,to55:51,m55:19,price:170,LoS:1.6,occupancy:62,conventions:0},{female:20,local:55,USA:9,SA:2,EU:27,MEA:2,ASIA:5,businessmen:87,tourists:13,DR:68,agency:26,AC:6,u20:2,to35:24,to55:55,m55:19,price:157,LoS:1.73,occupancy:90,conventions:1},{female:40,local:60,USA:6,SA:12,EU:19,MEA:1,ASIA:2,businessmen:85,tourists:15,DR:68,agency:27,AC:5,u20:4,to35:30,to55:46,m55:20,price:174,LoS:1.82,occupancy:92,conventions:1},{female:15,local:68,USA:8,SA:0,EU:19,MEA:0,ASIA:5,businessmen:87,tourists:13,DR:64,agency:21,AC:15,u20:2,to35:24,to55:55,m55:19,price:165,LoS:1.66,occupancy:78,conventions:1},{female:40,local:72,USA:8,SA:0,EU:17,MEA:1,ASIA:2,businessmen:80,tourists:20,DR:75,agency:15,AC:10,u20:5,to35:30,to55:43,m55:22,price:156,LoS:1.44,occupancy:55,conventions:1}],U=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],d=function(e){var n=[];switch(e.mode){case"gender":n=[h.map((function(e,n){return{x:n+1,y:e.female}})),h.map((function(e,n){return{x:n+1,y:100-e.female}}))];break;case"location":n=[h.map((function(e,n){return{x:n+1,y:e.local}})),h.map((function(e,n){return{x:n+1,y:e.USA}})),h.map((function(e,n){return{x:n+1,y:e.SA}})),h.map((function(e,n){return{x:n+1,y:e.EU}})),h.map((function(e,n){return{x:n+1,y:e.MEA}})),h.map((function(e,n){return{x:n+1,y:e.ASIA}}))];break;case"type":n=[h.map((function(e,n){return{x:n+1,y:e.businessmen}})),h.map((function(e,n){return{x:n+1,y:e.tourists}}))];break;case"reserve":n=[h.map((function(e,n){return{x:n+1,y:e.DR}})),h.map((function(e,n){return{x:n+1,y:e.agency}})),h.map((function(e,n){return{x:n+1,y:e.AC}}))];break;case"age":n=[h.map((function(e,n){return{x:n+1,y:e.u20}})),h.map((function(e,n){return{x:n+1,y:e.to35}})),h.map((function(e,n){return{x:n+1,y:e.to55}})),h.map((function(e,n){return{x:n+1,y:e.m55}}))]}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{height:500,style:{margin:"5px"},stackBy:"y",animation:!0,children:[Object(c.jsx)(O.d,{}),Object(c.jsx)(O.b,{}),Object(c.jsx)(O.e,{tickFormat:function(e){return U[e-1]}}),Object(c.jsx)(O.f,{}),n.map((function(e,n){return Object(c.jsx)(O.c,{data:e,barWidth:.5},n)}))]})})},v=Object(x.a)((function(){return{fab:{position:"absolute",bottom:"5px",right:"5px"},graph:{margin:"20px",width:"auto",columnCount:1}}})),C=["gender","location","type","reserve","age"],I=function(){var e=Object(o.useState)("gender"),n=Object(i.a)(e,2),t=n[0],a=n[1],s=v();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.a,{}),Object(c.jsx)(E,{title:"PRP Assignment 3"}),Object(c.jsxs)(A.a,{className:s.graph,children:[Object(c.jsx)(m.a,{variant:"h5",align:"center",children:"Percentage of Customers"}),Object(c.jsxs)(l.a,{children:[Object(c.jsx)(p.a,{component:"legend",children:"VIEW MODE"}),Object(c.jsx)(b.a,{row:!0,value:t,onChange:function(e,n){a(n)},children:C.map((function(e,n){return Object(c.jsx)(S.a,{value:e,control:Object(c.jsx)(j.a,{}),label:e},n)}))})]}),Object(c.jsx)(d,{mode:t})]})]})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,131)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),o(e),a(e),s(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),M()}},[[98,1,2]]]);
//# sourceMappingURL=main.5f51a187.chunk.js.map