(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),c=n.n(i),l=n(2),s=n.n(l),o=n(12),d=n(41),u=n(36),j=n(15),p=n(50),b=function(e,t,n){return e.sort((function(e,r){var a=r[t]-e[t];return 0!=a?a:e[n]-r[n]}))},x=n(129),g=n(131),h=n(133),f=n(128),O=n(134),m=n(65),v=n(135),y=n(3),k=["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"];function C(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)(Object(o.a)({},e.item)),l=Object(j.a)(c,2),s=l[0],d=l[1],u=function(e){return Object(y.jsx)("span",{style:{backgroundColor:e,width:"24px",height:"24px",marginRight:"10px"},children:"\xa0"})},p=function(){i(!1)},b=function(){e.update(s),p()},m=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,a=Object(o.a)({},s);a[n]=r,d(a)};return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{onClick:function(){i(!0)},style:{cursor:"pointer"},children:e.children}),Object(y.jsxs)(h.a,{open:a,onClose:p,"aria-labelledby":"form-dialog-title",children:[Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingRight:"8px"},children:[Object(y.jsx)(O.a,{id:"form-dialog-title",children:"Uppdatera"}),Object(y.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{handleDone:function(t){var n=Object(o.a)({},s);n.sign=t,n.done=!0,d(n),e.update(n),p()}}))]}),Object(y.jsx)(f.a,{children:Object(y.jsxs)("form",{onSubmit:b,children:[Object(y.jsx)(g.a,{margin:"dense",label:"Titel",type:"text",fullWidth:!0,name:"title",value:s.title,style:{margin:"5px 0"},onChange:m}),Object(y.jsx)(g.a,{margin:"dense",label:"Beskrivning",type:"text",fullWidth:!0,multiline:!0,rowsMax:4,name:"content",value:s.content,style:{margin:"5px 0"},onChange:m}),Object(y.jsxs)(g.a,{select:!0,label:"Prioritet",fullWidth:!0,name:"prio",value:s.prio,onChange:m,helperText:"V\xe4lj prioritet f\xf6r denna uppgift.",style:{margin:"5px 0"},children:[Object(y.jsxs)(v.a,{value:0,children:[u("blue")," L\xe5g"]}),Object(y.jsxs)(v.a,{value:1,children:[u("orange")," Mellan"]}),Object(y.jsxs)(v.a,{value:2,children:[u("red")," H\xf6g"]})]}),Object(y.jsx)(g.a,{select:!0,label:"Dag",fullWidth:!0,name:"group",value:s.group,onChange:m,style:{margin:"5px 0"},helperText:"V\xe4lj en dag n\xe4r den ska utf\xf6ras.",children:k.map((function(e,t){return Object(y.jsx)(v.a,{value:t,children:e},t)}))})]})}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px"},children:[Object(y.jsx)(x.a,{color:"secondary",onClick:function(){window.confirm("\xc4r du s\xe4ker p\xe5 att du vill radera denna uppgift?")&&e.delete(s)},children:"radera"}),Object(y.jsxs)("div",{children:[Object(y.jsx)(x.a,{onClick:p,color:"primary",children:"st\xe4ng"}),Object(y.jsx)(x.a,{onClick:b,color:"primary",children:"spara"})]})]})]})]})}function w(e){var t=Object(r.useState)(null),n=Object(j.a)(t,2),a=n[0],i=n[1],c=function(){i(null)},l=function(t){e.handleDone(t.target.innerText),c()};return Object(y.jsxs)("div",{children:[Object(y.jsx)(x.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(e){i(e.currentTarget)},children:"F\xe4rdigst\xe4ll"}),Object(y.jsx)(m.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:c,children:["Martin J","Maja G"].map((function(e,t){return Object(y.jsx)(v.a,{onClick:l,children:e},t)}))})]})}var I=n(62),T=n.n(I),M=["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"];function S(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],c=function(e){return Object(y.jsx)("span",{style:{backgroundColor:e,width:"24px",height:"24px",marginRight:"10px"},children:"\xa0"})},l=function(){i(!1)};return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{onClick:function(){i(!0)},style:{cursor:"pointer"},children:e.children}),Object(y.jsxs)(h.a,{open:a,onClose:l,"aria-labelledby":"form-dialog-title",children:[Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingRight:"8px"},children:[Object(y.jsx)(O.a,{id:"form-dialog-title",children:"Uppgift"}),Object(y.jsx)(x.a,{color:"default",disableElevation:!0,children:Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(T.a,{style:{color:"green",marginRight:"5px"}}),e.item.sign]})})]}),Object(y.jsxs)(f.a,{children:[Object(y.jsx)(g.a,{margin:"dense",label:"Titel",type:"text",fullWidth:!0,style:{margin:"5px 0"},defaultValue:e.item.title,InputProps:{readOnly:!0}}),Object(y.jsx)(g.a,{margin:"dense",label:"Beskrivning",type:"text",fullWidth:!0,multiline:!0,rowsMax:4,name:"content",defaultValue:e.item.content,style:{margin:"5px 0"},InputProps:{readOnly:!0}}),Object(y.jsxs)(g.a,{select:!0,label:"Prioritet",fullWidth:!0,name:"prio",value:e.item.prio,helperText:"V\xe4lj prioritet f\xf6r denna uppgift.",style:{margin:"5px 0"},InputProps:{readOnly:!0},children:[Object(y.jsxs)(v.a,{value:0,children:[c("blue")," L\xe5g"]}),Object(y.jsxs)(v.a,{value:1,children:[c("orange")," Mellan"]}),Object(y.jsxs)(v.a,{value:2,children:[c("red")," H\xf6g"]})]}),Object(y.jsx)(g.a,{select:!0,label:"Dag",fullWidth:!0,name:"group",value:e.item.group,style:{margin:"5px 0"},helperText:"V\xe4lj en dag n\xe4r den ska utf\xf6ras.",InputProps:{readOnly:!0},children:M.map((function(e,t){return Object(y.jsx)(v.a,{value:t,children:e},t)}))})]}),Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px"},children:[Object(y.jsx)(x.a,{color:"secondary",onClick:function(){window.confirm("\xc4r du s\xe4ker p\xe5 att du vill \xe5teraktivera denna uppgift?")&&function(){var t=Object(o.a)({},e.item);t.done=!1,t.sign="",e.update(t),l()}()},children:Object(y.jsx)("div",{style:{color:"green"},children:"\xe5teraktivera"})}),Object(y.jsx)(x.a,{onClick:l,color:"primary",children:"st\xe4ng"})]})]})]})}function P(e){return Object(y.jsx)("div",{children:e.item.done?Object(y.jsx)(S,Object(o.a)(Object(o.a)({},e),{},{children:Object(y.jsx)(W,Object(o.a)({},e))})):Object(y.jsx)(C,Object(o.a)(Object(o.a)({},e),{},{children:Object(y.jsx)(W,Object(o.a)({},e))}))})}function W(e){return Object(y.jsxs)("div",{style:{textAlign:"right",padding:"5px"},children:[Object(y.jsx)("div",{style:{width:"100%",borderTop:["5px solid royalblue","5px solid goldenrod","5px solid orangered"][e.item.prio]}}),Object(y.jsxs)("div",{style:{textAlign:"left",padding:"10px",background:"whitesmoke",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},children:[Object(y.jsx)("h3",{children:e.item.title}),e.full&&e.item.content]}),e.item.author]})}var D=n(130),J=["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"];function R(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],c=Object(r.useState)({title:"",content:"",author:"Martin J",prio:1,index:100,group:e.group,sign:""}),l=Object(j.a)(c,2),s=l[0],d=l[1],u=function(e){return Object(y.jsx)("span",{style:{backgroundColor:e,width:"24px",height:"24px",marginRight:"10px"},children:"\xa0"})},p=function(){i(!1),d({title:"",content:"",author:"",prio:1,index:100,group:0})},b=function(){e.create(s),p()},m=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value,a=Object(o.a)({},s);a[n]=r,d(a)};return Object(y.jsxs)("div",{children:[Object(y.jsx)(x.a,{color:"primary",onClick:function(){i(!0)},children:"Skapa +"}),Object(y.jsxs)(h.a,{open:a,onClose:p,"aria-labelledby":"form-dialog-title",children:[Object(y.jsx)(O.a,{id:"form-dialog-title",children:"Skapa"}),Object(y.jsx)(f.a,{children:Object(y.jsxs)("form",{onSubmit:b,children:[Object(y.jsx)(g.a,{margin:"dense",label:"Titel",type:"text",fullWidth:!0,name:"title",value:s.title,style:{margin:"5px 0"},onChange:m}),Object(y.jsx)(g.a,{margin:"dense",label:"Beskrivning",type:"text",fullWidth:!0,multiline:!0,rowsMax:4,name:"content",value:s.content,style:{margin:"5px 0"},onChange:m}),Object(y.jsxs)(g.a,{select:!0,label:"Prioritet",fullWidth:!0,name:"prio",value:s.prio,onChange:m,helperText:"V\xe4lj prioritet f\xf6r denna uppgift.",style:{margin:"5px 0"},children:[Object(y.jsxs)(v.a,{value:0,children:[u("blue")," L\xe5g"]}),Object(y.jsxs)(v.a,{value:1,children:[u("orange")," Mellan"]}),Object(y.jsxs)(v.a,{value:2,children:[u("red")," H\xf6g"]})]}),Object(y.jsx)(g.a,{select:!0,label:"Dag",fullWidth:!0,name:"group",value:s.group,onChange:m,style:{margin:"5px 0"},helperText:"V\xe4lj en dag n\xe4r den ska utf\xf6ras.",children:J.map((function(e,t){return Object(y.jsx)(v.a,{value:t,children:e},t)}))})]})}),Object(y.jsxs)(D.a,{children:[Object(y.jsx)(x.a,{onClick:p,color:"primary",children:"st\xe4ng"}),Object(y.jsx)(x.a,{onClick:b,color:"primary",children:"spara"})]})]})]})}var V=n(64),E=Object(V.a)("https://wfapkikzcykkjzxihggu.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTEyNjkxNSwiZXhwIjoxOTMwNzAyOTE1fQ.JvQKP-6-lXM1Czse92w8LsQi6yd-eI1PkZbc90FM9rs"),L=["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"];function A(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];function i(){return c.apply(this,arguments)}function c(){return(c=Object(u.a)(s.a.mark((function e(){var t,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.from("planner").select("*");case 2:t=e.sent,n=t.data,(r=t.error)&&console.log(r),i=function(e,t,n){return e.sort((function(e,r){var a=r[t]-e[t];return 0!=a?a:e[n]-r[n]}))},c=L.map((function(e,t){return i(n.filter((function(e){return e.group===t})),"prio","index")})),a(c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.from("planner").update(t).eq("id",t.id);case 2:n=e.sent,r=n.data,a=n.error,console.log(r,a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.from("planner").update(t).eq("id",t.id);case 2:n=e.sent,r=n.data,a=n.error,console.log(r,a),i();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.from("planner").insert([t]);case 2:n=e.sent,r=n.data,a=n.error,console.log(r,a),i();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function e(t){var n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.from("planner").delete().eq("id",t.id);case 2:n=e.sent,r=n.data,a=n.error,console.log(r,a),i();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){i()}),[]);var k=function(e){return Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(y.jsx)("div",{children:L[e]}),Object(y.jsx)(R,{create:f,group:e})]})};return Object(y.jsx)("div",{children:Object(y.jsx)("div",{style:{display:"flex"},children:Object(y.jsx)(p.a,{onDragEnd:function(e){var t=e.source,r=e.destination;if(r){var i=+t.droppableId,c=+r.droppableId;if(i===c){var s=function(e,t,n){var r,a=Array.from(e),i=a.splice(t,1),c=Object(j.a)(i,1)[0];return a.splice(n,0,c),r="prio",a.sort((function(e,t){return t[r]-e[r]}))}(n[i],t.index,r.index),o=Object(d.a)(n);o[i]=s,a(o),s.map((function(e,t){e.index=t,l(e)}))}else{var u=function(e,t,n,r){var a=Array.from(e),i=Array.from(t),c=a.splice(n.index,1),l=Object(j.a)(c,1)[0];i.splice(r.index,0,l);var s={};return s[n.droppableId]=b(a,"prio","index"),s[r.droppableId]=b(i,"prio","index"),s}(n[i],n[c],t,r),p=Object(d.a)(n);p[i]=u[i],p[c]=u[c],a(p);var x=function(e,t){return e.map((function(e,n){e.index=n,e.group=t,l(e)}))};x(u[i],i),x(u[c],c)}}},children:n.map((function(e,t){return Object(y.jsxs)("div",{style:{margin:"0 5px"},children:[k(t),Object(y.jsx)(p.c,{droppableId:"".concat(t),children:function(t,n){return Object(y.jsxs)("div",Object(o.a)(Object(o.a)({ref:t.innerRef,style:(r=n.isDraggingOver,{background:r?"lightblue":"lightgrey",width:"200px",minHeight:"80px"})},t.droppableProps),{},{children:[e.map((function(e,t){return Object(y.jsx)(p.b,{draggableId:String(e.id),index:t,children:function(t,n){return Object(y.jsx)("div",Object(o.a)(Object(o.a)(Object(o.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:(r=n.isDragging,a=t.draggableProps.style,Object(o.a)({userSelect:"none",background:r?"lightgreen":""},a)),children:Object(y.jsx)(P,{full:!0,item:e,delete:m,update:g,create:f})}));var r,a}},e.id)}))," ",t.placeholder," "]}));var r}})]},t)}))})})})}c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.0f326c82.chunk.js.map