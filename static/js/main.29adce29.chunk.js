(this.webpackJsonpvalcruz=this.webpackJsonpvalcruz||[]).push([[0],{105:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(92),a(8)),i=(a(93),a(150)),s=a(3),u=a(66),m=a.n(u),d=function(e){var t=e.inputRef,a=Object(s.a)(e,["inputRef"]);return r.a.createElement(m.a,Object.assign({},a,{ref:function(e){t(e?e.inputElement:null)},type:"tel",mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))},p=a(167),f=a(154),v=a(168),g=a(165),b=a(19),h=a.n(b),E=a(32),O=a(22),j=a.n(O),S=(a(104),a(67)),C=function(e){var t=j.a.firestore(),a=localStorage.getItem("userId");t.collection("users").doc(a).update({pushkey:e})},k=function(){var e=Object(E.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.firestore(),t.userId=localStorage.getItem("userId"),t.role=localStorage.getItem("role"),t.timeStamp=Date.now(),e.next=6,a.collection("healthChecks").add(t);case 6:return n=e.sent,e.abrupt("return",n.id);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(E.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.a.firestore(),e.next=3,a.collection("content").where("target","==",t).get();case 3:return n=e.sent,r={},n.forEach((function(e){r[e.id]=e.data()})),e.next=8,a.collection("content").where("target","==","all").get();case 8:return e.sent.forEach((function(e){r[e.id]=e.data()})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=(a(105),function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],b=u[1],h=Object(n.useState)(),E=Object(l.a)(h,2),O=E[0],S=E[1],C=Object(n.useState)(""),k=Object(l.a)(C,2),I=k[0],w=k[1],N=Object(n.useState)(""),x=Object(l.a)(N,2),y=x[0],A=x[1],D=Object(n.useState)(""),z=Object(l.a)(D,2),F=z[0],L=z[1],P=Object(n.useState)(!1),T=Object(l.a)(P,2),B=T[0],W=T[1],R=Object(n.useState)(!1),U=Object(l.a)(R,2),J=U[0],M=U[1],V=Object(n.useState)(!1),q=Object(l.a)(V,2),H=q[0],G=q[1],K=Object(n.useState)(!1),_=Object(l.a)(K,2),Q=_[0],Y=_[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"barra-azul"}),r.a.createElement("h1",null,"Ol\xe1, bem vindo(a) ao ValCruz."),!o&&r.a.createElement("h5",null,"Em qual dessas fun\xe7\xf5es voc\xea se enquadra melhor?"),o?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g.a,{error:H,helperText:H&&"Nome inv\xe1lido",id:"outlined-name",label:"Nome completo",value:I,onChange:function(e){G(!1),w(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(v.a,{htmlFor:"formatted-text-mask-input"},"N\xfamero de telefone"),r.a.createElement(f.a,{error:J,value:O,onChange:function(e){M(!1),S(e.target.value)},name:"formatted-text-mask-input",id:"formatted-text-mask-input",inputComponent:d}))),r.a.createElement("div",null,r.a.createElement(g.a,{error:Q,helperText:Q&&"Nome de cidade inv\xe1lido",id:"outlined-city",label:"Cidade",value:y,onChange:function(e){Y(!1),A(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(g.a,{id:"outlined-place",label:"Unidade de Sa\xfade",value:F,onChange:function(e){L(e.target.value)}})),r.a.createElement(i.a,{onClick:function(){var t,a=y.toLowerCase();localStorage.setItem("role",o),localStorage.setItem("telephone",O),localStorage.setItem("name",I),localStorage.setItem("city",a),localStorage.setItem("place",F),(I&&I.replace(/\d/g,"").length>3||(G(!0),0))&&(O&&O.replace(/[\u2000]/g,"").length>=14||(M(!0),0))&&(y&&y.replace(/\d/g,"").length>3||(Y(!0),0))&&(localStorage.setItem("hasOnboardFinished","true"),t={role:o,telephone:O,name:I,city:a,place:F||""},j.a.firestore().collection("users").add(t).then((function(e){localStorage.setItem("userId",e.id)})),e.onOnboardFinish())},color:"primary",variant:"contained",className:"nextButton"},"Pr\xf3ximo")):B?r.a.createElement("div",null,r.a.createElement(g.a,{id:"outlined-others-role",label:"Fun\xe7\xe3o",value:m,onChange:function(e){b(e.target.value)}}),r.a.createElement(i.a,{onClick:function(){c(m)},color:"primary",variant:"contained",className:"nextButton"},"Pr\xf3ximo")):r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(i.a,{onClick:function(){c("Medico")},className:"choiceButton"},"M\xe9dico (a)"),r.a.createElement(i.a,{onClick:function(){c("Enfermeiro")},className:"choiceButton"},"Enfermeiro (a)"),r.a.createElement(i.a,{onClick:function(){c("T\xe9cnico")},className:"choiceButton"},"T\xe9cnico (a)"),r.a.createElement(i.a,{onClick:function(){W(!0)},className:"choiceButton"},"Outros"))}),null))}),N=a(163),x=a(164),y=a(77),A=a.n(y),D=a(76),z=a.n(D),F=a(78),L=a.n(F),P=a(24),T=a(156),B=a(157),W=a(158),R=a(159),U=a(160),J=a(162),M=a(161),V=a(69),q=a.n(V),H=a(155),G=a(52),K=a(53),_=a(70),Q=a.n(_),Y=a(4),Z=a(71),$=Object(H.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:G.a[500]}}})),X=function(e){var t=$(),a=r.a.useState(!1),n=Object(l.a)(a,2),o=n[0],c=n[1],i=e.data.text.replace(/<b>/g,"*").replace(/<\/b>/g,"*").replace(/<br \/>/g,"%0D%0A").replace(/<br\/>/g,"%0D%0A"),s="whatsapp://send?text=\u2757ATUALIZA\xc7\xc3O \u2757 %0D%0A %0D%0A ".concat(i," %0D%0A %0D%0A Para saber mais acesse: %0D%0A https://valcruzapp.github.io/");return r.a.createElement("div",{key:e.id,className:"protocolCard"},r.a.createElement(T.a,{className:t.root},r.a.createElement(B.a,{title:e.data.title,subheader:function(e){var t=e.split("/"),a=t[1];1===a.length&&(a="0".concat(a));var n=t[0];return 1===n.length&&(n="0".concat(n)),"".concat(a,"/").concat(n,"/").concat(t[2])}(e.data.date)}),r.a.createElement(W.a,{className:t.media,image:e.data.image,title:e.data.target}),r.a.createElement(R.a,null,r.a.createElement(K.a,{variant:"body2",color:"textSecondary",component:"p"},e.data.description)),r.a.createElement(U.a,{disableSpacing:!0},r.a.createElement("a",{target:"_blank",className:"whatsapp-link",rel:"noopener noreferrer",href:s},r.a.createElement(q.a,null)," COMPARTILHAR"),r.a.createElement(M.a,{className:Object(Y.a)(t.expand,Object(P.a)({},t.expandOpen,o)),onClick:function(){c(!o)},"aria-expanded":o,"aria-label":"show more"},r.a.createElement(Q.a,null))),r.a.createElement(J.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(R.a,null,r.a.createElement(Z.a,{content:e.data.text}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K.a,{paragraph:!0},r.a.createElement("a",{href:e.data.src,target:"_blank",rel:"noopener noreferrer"},"Veja a Fonte"))))))},ee=(a(110),function(e){var t=e.content;return r.a.createElement("div",{className:"container"},(t.sort((function(e,t){console.log(e);var a=e[1].date.split("/"),n=t[1].date.split("/");return a[2]!==n[2]?n[2]-a[2]:a[1]!==n[1]?n[1]-a[1]:n[0]-a[0]})),t.map((function(e){var t=e[0],a=e[1];return r.a.createElement(X,{key:t,id:t,data:a})}))))}),te=a(15),ae=(a(111),a(166)),ne=a(73),re=a.n(ne),oe=a(75),ce=a.n(oe),le=a(74),ie=a.n(le),se=function(e){var t=e.open,a=e.handleClose,o=e.success,c=e.missingEpi,s=e.reportId,u=Object(n.useState)(!1),m=Object(l.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)([]),v=Object(l.a)(f,2),g=v[0],b=v[1],h=function(){var e,t;e={missingEpis:g},t=s,j.a.firestore().collection("healthChecks").doc(t).set(e,{merge:!0}),a()};return r.a.createElement(ae.a,{"aria-labelledby":"Enviado com sucesso","aria-describedby":"Os dados foram enviados com sucesso",open:t,onClose:a},r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"CloseButton"},r.a.createElement(M.a,{onClick:a},r.a.createElement(ce.a,null))),d?r.a.createElement((function(){return r.a.createElement("div",{className:"Container"},r.a.createElement("h4",null,"Reportar falta de EPI"),r.a.createElement("h6",null,"Marque os EPIs que voc\xea n\xe3o teve acesso durante o plant\xe3o de atendimento."),r.a.createElement("div",{className:"epi-options"},c.map((function(e){return r.a.createElement(i.a,{variant:g.includes(e)?"contained":"outlined",onClick:function(){return t=e,void(g.includes(t)?b(g.filter((function(e){return e!==t}))):b([].concat(Object(te.a)(g),[t])));var t}},e)}))),r.a.createElement("div",null,r.a.createElement(i.a,{className:"rounded-button",onClick:h,variant:"contained"},"enviar")))}),null):r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Container"},o?r.a.createElement(re.a,{className:"WarningIcon"}):r.a.createElement(ie.a,{className:"WarningIcon"}),r.a.createElement("h4",null,o?"Sua auto-avalia\xe7\xe3o foi atualizada com sucesso!":"Aten\xe7\xe3o! Compatibilidade de sintomas de contamina\xe7\xe3o por COVID-19."),!o&&r.a.createElement("h6",null,"Voc\xea marcou sintomas compat\xedveis com a COVID19, esteja atento e considere examinar.")),r.a.createElement("div",{className:"button-holder"},r.a.createElement(i.a,{onClick:function(){return p(!0)},variant:"outlined"},"reportar falta de epi"),r.a.createElement(i.a,{onClick:a,variant:"contained"},"OK")))}),null)))},ue=function(e){var t=["Gorro","\xd3culos de prote\xe7\xe3o","Protetor facial","M\xe1scara","Avental hiperme\xe1vel","Luvas de procedimento"],a=Object(n.useState)([]),o=Object(l.a)(a,2),c=o[0],s=o[1],u=Object(n.useState)(),m=Object(l.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)([]),v=Object(l.a)(f,2),g=v[0],b=v[1],O=Object(n.useState)("N\xe3o sei informar"),j=Object(l.a)(O,2),S=j[0],C=j[1],I=function(){var e=Object(E.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={symptoms:c,epi:g,hadContact:S,missingEpis:[]},localStorage.setItem("lastReport",JSON.stringify(t)),e.next=4,k(t);case 4:a=e.sent,p(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h4",null,"Fa\xe7a uma auto-avalia\xe7\xe3o do seu estado de sa\xfade."),r.a.createElement("div",null,["Cansa\xe7o","Congest\xe3o nasal","Corrimento nasal (coriza)","Febre","Dificuldade para respirar","Tosse","Dor de Cabe\xe7a","Dor de garganta","Dores pelo corpo","Mal estar geral","Diarr\xe9ia","V\xf4mito"].map((function(e){return r.a.createElement(i.a,{variant:c.includes(e)?"contained":"outlined",onClick:function(){return t=e,void(c.includes(t)?s(c.filter((function(e){return e!==t}))):s([].concat(Object(te.a)(c),[t])));var t}},e)}))),r.a.createElement("h4",null,"Quais EPIs voc\xea teve acesso hoje?"),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(i.a,{variant:g.includes(e)?"contained":"outlined",onClick:function(){return t=e,void(g.includes(t)?b(g.filter((function(e){return e!==t}))):b([].concat(Object(te.a)(g),[t])));var t}},e)}))),r.a.createElement("h4",null,"Algum paciente atendido foi diagnosticado como positivo?"),r.a.createElement("div",null,r.a.createElement(i.a,{variant:"Sim"===S?"contained":"outlined",onClick:function(){return C("Sim")}},"Sim"),r.a.createElement(i.a,{variant:"N\xe3o"===S?"contained":"outlined",onClick:function(){return C("N\xe3o")}},"N\xe3o"),r.a.createElement(i.a,{variant:"N\xe3o sei informar"===S?"contained":"outlined",onClick:function(){return C("N\xe3o sei informar")}},"N\xe3o sei informar")),r.a.createElement(se,{success:!(c.includes("Febre")||c.includes("Dificuldade para respirar")),open:!!d,reportId:d,handleClose:function(){p(),s([]),b([]),C("N\xe3o sei informar"),e.onSubmitCheckup()},missingEpi:t.filter((function(e){return!g.includes(e)}))}),r.a.createElement("div",null,r.a.createElement(i.a,{onClick:I,className:"rounded-button",variant:"contained"},"Enviar")))},me=(a(112),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),m=u[0],b=u[1],h=Object(n.useState)(""),E=Object(l.a)(h,2),O=E[0],S=E[1],C=Object(n.useState)(""),k=Object(l.a)(C,2),I=k[0],w=k[1],N=Object(n.useState)(""),x=Object(l.a)(N,2),y=x[0],A=x[1],D=Object(n.useState)(!1),z=Object(l.a)(D,2),F=z[0],L=z[1],P=Object(n.useState)(!1),T=Object(l.a)(P,2),B=T[0],W=T[1],R=Object(n.useState)(!1),U=Object(l.a)(R,2),J=U[0],M=U[1];Object(n.useEffect)((function(){var e=localStorage.getItem("city"),t=e.charAt(0).toUpperCase()+e.slice(1);S(localStorage.getItem("role")),b(localStorage.getItem("telephone")),c(localStorage.getItem("name")),w(t),A(localStorage.getItem("place"))}),[]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(g.a,{error:B,helperText:B&&"Nome inv\xe1lido",id:"outlined-name",label:"Nome completo",value:o,onChange:function(e){W(!1),c(e.target.value)}})),r.a.createElement(p.a,null,r.a.createElement(v.a,{htmlFor:"formatted-text-mask-input"},"N\xfamero de telefone"),r.a.createElement(f.a,{error:F,value:m,onChange:function(e){L(!1),b(e.target.value)},name:"formatted-text-mask-input",id:"formatted-text-mask-input",inputComponent:d})),r.a.createElement(g.a,{disabled:!0,id:"outlined-name",label:"Ocupa\xe7\xe3o",value:O}),r.a.createElement("div",null,r.a.createElement(g.a,{error:J,helperText:J&&"Nome de cidade inv\xe1lido",id:"outlined-city",label:"Cidade",value:I,onChange:function(e){M(!1),w(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(g.a,{id:"outlined-place",label:"Unidade de Sa\xfade",value:y,onChange:function(e){A(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(i.a,{onClick:function(){var t=I.toLowerCase();localStorage.setItem("role",O),localStorage.setItem("telephone",m),localStorage.setItem("name",o),localStorage.setItem("city",t),localStorage.setItem("place",y),(o&&o.replace(/\d/g,"").length>3||(W(!0),0))&&(m&&m.replace(/[\u2000]/g,"").length>=14||(L(!0),0))&&(I&&I.replace(/\d/g,"").length>3||(M(!0),0))&&(localStorage.setItem("hasOnboardFinished","true"),function(e){var t=j.a.firestore(),a=localStorage.getItem("userId");t.collection("users").doc(a).set(e,{merge:!0})}({role:O,telephone:m,name:o,city:t,place:y||""}),e.onUpdateFinish())},color:"primary",variant:"contained"},"Atualizar dados")))}),de=function(){var e=Object(E.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(t=localStorage.getItem("pushtoken"))){e.next=13;break}return a=j.a.messaging(),e.next=5,a.requestPermission();case 5:return e.next=7,a.getToken();case 7:t=e.sent,C(t),localStorage.setItem("pushtoken",t),console.log(t),e.next=14;break;case 13:console.log("Already Approved");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var pe=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1],c=r.a.useState(0),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)([]),d=Object(l.a)(m,2),p=d[0],f=d[1];Object(n.useEffect)((function(){o(localStorage.getItem("hasOnboardFinished")),f(JSON.parse(localStorage.getItem("cachedContent"))),I(localStorage.getItem("role")).then((function(e){f(Object.entries(e)),localStorage.setItem("cachedContent",JSON.stringify(Object.entries(e)))})),setInterval((function(){I(localStorage.getItem("role")).then((function(e){f(Object.entries(e)),localStorage.setItem("cachedContent",JSON.stringify(Object.entries(e)))}))}),6e4),de()}),[]);var v=function(){u(0)},g=[r.a.createElement(ee,{content:p}),r.a.createElement(ue,{onSubmitCheckup:v}),r.a.createElement(me,{onUpdateFinish:v})],b=["Comunicados","Auto-Avalia\xe7\xe3o","Perfil"];return r.a.createElement("div",{className:"App"},a?r.a.createElement("div",null,r.a.createElement("h1",{className:"pageName"},b[s]),r.a.createElement("div",null,g[s]),r.a.createElement(N.a,{value:s,onChange:function(e,t){u(t)},showLabels:!0},r.a.createElement(x.a,{label:b[0],icon:r.a.createElement(z.a,null)}),r.a.createElement(x.a,{label:b[1],icon:r.a.createElement(A.a,null)}),r.a.createElement(x.a,{label:b[2],icon:r.a.createElement(L.a,null)}))):r.a.createElement(w,{onOnboardFinish:function(){o(!0)}}))},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}j.a.initializeApp(S),c.a.render(r.a.createElement(pe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(t,e)}))}}()},67:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBL1cdA7lcAHCmJyeo3Lb54Sw7Jis5sw5I","authDomain":"valcruz-jmvpwt.firebaseapp.com","databaseURL":"https://valcruz-jmvpwt.firebaseio.com","projectId":"valcruz-jmvpwt","storageBucket":"valcruz-jmvpwt.appspot.com","messagingSenderId":"1024402545262","appId":"1:1024402545262:web:2af28f6efef488c134a47f","measurementId":"G-2Y1LP1H66D"}')},87:function(e,t,a){e.exports=a(113)},92:function(e,t,a){},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.29adce29.chunk.js.map