(this.webpackJsonpvalcruz=this.webpackJsonpvalcruz||[]).push([[0],{71:function(e,a,t){e.exports=t(86)},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(10),i=t.n(r),c=(t(76),t(7)),l=(t(77),t(116)),s=t(2),u=t(49),m=t.n(u),d=function(e){var a=e.inputRef,t=Object(s.a)(e,["inputRef"]);return o.a.createElement(m.a,Object.assign({},t,{ref:function(e){a(e?e.inputElement:null)},mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholderChar:"\u2000",showMask:!0}))},p=t(132),f=t(120),E=t(133),g=t(131),v=(t(78),function(e){var a=Object(n.useState)(),t=Object(c.a)(a,2),r=t[0],i=t[1],s=Object(n.useState)(),u=Object(c.a)(s,2),m=u[0],v=u[1],b=o.a.useState(""),h=Object(c.a)(b,2),C=h[0],O=h[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"barra-azul"}),o.a.createElement("h1",null,"Ol\xe1, bem vindo(a) ao ValCruz."),!r&&o.a.createElement("h5",null,"Em qual dessas fun\xe7\xf5es voc\xea se enquadra melhor?"),r?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(g.a,{id:"outlined-name",label:"Nome completo",value:C,onChange:function(e){O(e.target.value)}})),o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(E.a,{htmlFor:"formatted-text-mask-input"},"N\xfamero de telefone"),o.a.createElement(f.a,{value:m,onChange:function(e){v(e.target.value)},name:"formatted-text-mask-input",id:"formatted-text-mask-input",inputComponent:d}))),o.a.createElement(l.a,{onClick:function(){localStorage.setItem("role",r),localStorage.setItem("telephone",m),localStorage.setItem("name",C),localStorage.setItem("hasOnboardFinished","true"),e.onOnboardFinish()},color:"primary",variant:"contained",className:"nextButton"},"Pr\xf3ximo")):o.a.createElement((function(){return o.a.createElement("div",null,o.a.createElement(l.a,{onClick:function(){i("Medico")},className:"choiceButton"},"M\xe9dico (a)"),o.a.createElement(l.a,{onClick:function(){i("Enfermeiro")},className:"choiceButton"},"Enfermeiro (a)"),o.a.createElement(l.a,{onClick:function(){i("Tecnico")},className:"choiceButton"},"T\xe9cnico (a)"),o.a.createElement(l.a,{onClick:function(){i("Outros")},className:"choiceButton"},"Outros"))}),null))}),b=t(129),h=t(130),C=t(52),O=t.n(C),k=t(51),j=t.n(k),A=t(53),w=t.n(A),S=t(14),D=t(122),N=t(123),x=t(125),z=t(126),I=t(127),P=t(128),y=t(124),T=t(36),q=t.n(T),F=t(121),M=t(38),W=t(39),B=t(37),L=t.n(B),R=t(3),V=Object(F.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:M.a[500]}}})),_=function(){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"whatsapp://send?text=\u2757ATUALIZA\xc7\xc3O \u2757 %0D%0A %0D%0A A Associa\xe7\xe3o Brasileira de Enfermeiros de Centro Cir\xfargico (Sobecc) publicou algumas recomenda\xe7\xf5es sobre o atendimento de pacientes com suspeita ou infec\xe7\xe3o confirmada pelo Covid-19 em procedimentos cir\xfargicos ou endosc\xf3picos. %0D%0A %0D%0A O material tem como objetivo garantir a seguran\xe7a e a instrumentaliza\xe7\xe3o dos profissionais que atuam nessa \xe1rea de assist\xeancia. %0D%0A %0D%0A Entre as recomenda\xe7\xf5es, destacam-se: %0D%0A - prote\xe7\xe3o da equipe; %0D%0A - organiza\xe7\xe3o do atendimento; %0D%0A - preparo da sala de procedimento; %0D%0A - transporte do paciente cir\xfargico intraoperat\xf3rio %0D%0A - realiza\xe7\xe3o do procedimento endosc\xf3pio e p\xf3s-operat\xf3rio ou p\xf3s-procedimento endosc\xf3pio imediato. %0D%0A %0D%0A para saber mais acesse : %0D%0A https://monitorcovid19.github.io/"},o.a.createElement(q.a,null))},U=function(e){var a=V(),t=o.a.useState(!1),n=Object(c.a)(t,2),r=n[0],i=n[1];return o.a.createElement("div",{className:"protocolCard"},o.a.createElement(D.a,{className:a.root},o.a.createElement(N.a,{action:o.a.createElement("span",{style:{cursor:"not-allowed"}},o.a.createElement(y.a,{component:_,"aria-label":"share"})),title:"Procedimentos Cir\xfargicos ou Endosc\xf3picos",subheader:"19 de Mar\xe7o, 2020"}),o.a.createElement(x.a,{className:a.media,image:"https://www.catho.com.br/educacao/blog/wp-content/uploads/sites/2/2018/12/2018-12-06-Por-que-estudar-Enfermagem.png",title:"Enfermagem"}),o.a.createElement(z.a,null,o.a.createElement(W.a,{variant:"body2",color:"textSecondary",component:"p"},"Associa\xe7\xe3o brasileira de enfermeiros publica recomenda\xe7\xf5es para procedimentos cir\xfargicos ou endosc\xf3pico")),o.a.createElement(I.a,{disableSpacing:!0},o.a.createElement(y.a,{className:Object(R.a)(a.expand,Object(S.a)({},a.expandOpen,r)),onClick:function(){i(!r)},"aria-expanded":r,"aria-label":"show more"},o.a.createElement(L.a,null))),o.a.createElement(P.a,{in:r,timeout:"auto",unmountOnExit:!0},o.a.createElement(z.a,null,o.a.createElement(W.a,{paragraph:!0},"A Associa\xe7\xe3o Brasileira de Enfermeiros de Centro Cir\xfargico (Sobecc) publicou algumas ",o.a.createElement("b",null,"recomenda\xe7\xf5es")," sobre o atendimento de pacientes com suspeita ou infec\xe7\xe3o confirmada pelo Covid-19 em procedimentos cir\xfargicos ou endosc\xf3picos."),o.a.createElement(W.a,{paragraph:!0},"O material tem como objetivo garantir a"," ",o.a.createElement("b",null,"seguran\xe7a e a instrumentaliza\xe7\xe3o")," dos profissionais que atuam nessa \xe1rea de assist\xeancia."),o.a.createElement(W.a,{paragraph:!0},"Entre as recomenda\xe7\xf5es, destacam-se: ",o.a.createElement("br",null),"- prote\xe7\xe3o da equipe; ",o.a.createElement("br",null),"- organiza\xe7\xe3o do atendimento; ",o.a.createElement("br",null),"- preparo da sala de procedimento;",o.a.createElement("br",null),"- transporte do paciente cir\xfargico intraoperat\xf3rio ",o.a.createElement("br",null),"- realiza\xe7\xe3o do procedimento endosc\xf3pio e p\xf3s-operat\xf3rio ou p\xf3s-procedimento endosc\xf3pio imediato. ",o.a.createElement("br",null)),o.a.createElement(W.a,{paragraph:!0},o.a.createElement("a",{href:"https://portal.coren-sp.gov.br/noticias/covid-19-sobecc-publica-recomendacoes-relacionadas-aos-procedimentos-cirurgico-ou-endoscopicos/",target:"_blank",rel:"noopener noreferrer"},"Veja a Fonte"))))))},G=Object(F.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:M.a[500]}}})),J=function(){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"whatsapp://send?text=Seguran\xe7a no Trabalho ao atendimento dos infectados pelo COVID-19%0D%0A %0D%0AO ambiente hospitalar \xe9 um local onde se encontram muitos riscos (qu\xedmicos, f\xedsicos, biol\xf3gicos e entre outros). Por este motivo, o investimento em seguran\xe7a do trabalho e a conscientiza\xe7\xe3o do uso correto dos EPIs ajudam a prevenir acidentes, doen\xe7as e controlar os riscos. %0D%0A %0D%0AAbaixo segue uma lista de EPIs necess\xe1rios para um atendimento seguro os suspeitos ou infectados pelo novo coronavirus, bem como sua devida utiliza\xe7\xe3o.%0D%0A %0D%0A- gorro; %0D%0A- \xf3culos de prote\xe7\xe3o ou protetor facial; %0D%0A- m\xe1scara %0D%0A- avental imperme\xe1vel de mangas longas/capote; %0D%0A- luvas.  *Veja mais em:* http://www.anvisa.gov.br/servicosaude/manuais/seguranca_hosp.pdf"},o.a.createElement(q.a,null))},Q=function(e){var a=G(),t=o.a.useState(!1),n=Object(c.a)(t,2),r=n[0],i=n[1];return o.a.createElement("div",{className:"protocolCard"},o.a.createElement(D.a,{className:a.root},o.a.createElement(N.a,{action:o.a.createElement("span",{style:{cursor:"not-allowed"}},o.a.createElement(y.a,{component:J,"aria-label":"share"})),title:"Seguran\xe7a no Trabalho ao atendimento dos infectados pelo COVID-19",subheader:"15 de Mar\xe7o, 2020"}),o.a.createElement(x.a,{className:a.media,image:"https://telemedicinamorsch.com.br/wp-content/uploads/2019/01/seguranca-do-trabalho-hospitais-o-que-e.jpg",title:"Enfermagem"}),o.a.createElement(z.a,null,o.a.createElement(W.a,{variant:"body2",color:"textSecondary",component:"p"},"O ambiente hospitalar \xe9 um local onde se encontram muitos riscos (qu\xedmicos, f\xedsicos, biol\xf3gicos e entre outros). Entenda como utilizar os EPI's.")),o.a.createElement(I.a,{disableSpacing:!0},o.a.createElement(y.a,{className:Object(R.a)(a.expand,Object(S.a)({},a.expandOpen,r)),onClick:function(){i(!r)},"aria-expanded":r,"aria-label":"show more"},o.a.createElement(L.a,null))),o.a.createElement(P.a,{in:r,timeout:"auto",unmountOnExit:!0},o.a.createElement(z.a,null,o.a.createElement(W.a,{paragraph:!0},"O ambiente hospitalar \xe9 um local onde se encontram muitos riscos (qu\xedmicos, f\xedsicos, biol\xf3gicos e entre outros). Por este motivo, o investimento em seguran\xe7a do trabalho e a conscientiza\xe7\xe3o do uso correto dos EPIs ajudam a prevenir acidentes, doen\xe7as e controlar os riscos."),o.a.createElement(W.a,{paragraph:!0},"Abaixo segue uma lista de EPIs necess\xe1rios para um atendimento seguro os suspeitos ou infectados pelo ",o.a.createElement("b",null,"novo coronavirus"),", bem como sua devida utiliza\xe7\xe3o."),o.a.createElement(W.a,{paragraph:!0},"- gorro;",o.a.createElement("br",null),"- \xf3culos de prote\xe7\xe3o ou protetor facial;",o.a.createElement("br",null),"- m\xe1scara ",o.a.createElement("br",null),"- avental imperme\xe1vel de mangas longas/capote;",o.a.createElement("br",null),"- luvas.",o.a.createElement("br",null)),o.a.createElement(W.a,{paragraph:!0},o.a.createElement("a",{href:"http://www.anvisa.gov.br/servicosaude/manuais/seguranca_hosp.pdf",target:"_blank",rel:"noopener noreferrer"},"Veja a Fonte"))))))},Z=(t(83),function(e){return o.a.createElement("div",{className:"container"},o.a.createElement(U,null),o.a.createElement(Q,null))}),$=t(12),H=(t(84),function(e){var a=Object(n.useState)([]),t=Object(c.a)(a,2),r=t[0],i=t[1],s=function(e){r.includes(e)?i(r.filter((function(a){return a!==e}))):i([].concat(Object($.a)(r),[e]))},u=Object(n.useState)([]),m=Object(c.a)(u,2),d=m[0],p=m[1],f=function(e){d.includes(e)?p(d.filter((function(a){return a!==e}))):p([].concat(Object($.a)(d),[e]))},E=Object(n.useState)(),v=Object(c.a)(E,2),b=v[0],h=v[1],C=o.a.useState(""),O=Object(c.a)(C,2),k=O[0],j=O[1];return o.a.createElement("div",null,o.a.createElement("h4",null,"Fa\xe7a uma auto-avalia\xe7\xe3o do seu estado de sa\xfade."),o.a.createElement("div",null,o.a.createElement(l.a,{variant:r.includes("Cansa\xe7o")?"contained":"outlined",onClick:function(){return s("Cansa\xe7o")}},"Cansa\xe7o"),o.a.createElement(l.a,{variant:r.includes("Congest\xe3o nasal")?"contained":"outlined",onClick:function(){return s("Congest\xe3o nasal")}},"Congest\xe3o nasal"),o.a.createElement(l.a,{variant:r.includes("Corrimento nasal (coriza)")?"contained":"outlined",onClick:function(){return s("Corrimento nasal (coriza)")}},"Corrimento nasal (coriza)"),o.a.createElement(l.a,{variant:r.includes("Febre")?"contained":"outlined",onClick:function(){return s("Febre")}},"Febre"),o.a.createElement(l.a,{variant:r.includes("Dificuldade para respirar")?"contained":"outlined",onClick:function(){return s("Dificuldade para respirar")}},"Dificuldade para respirar"),o.a.createElement(l.a,{variant:r.includes("Tosse")?"contained":"outlined",onClick:function(){return s("Tosse")}},"Tosse"),o.a.createElement(l.a,{variant:r.includes("Dor de Cabe\xe7a")?"contained":"outlined",onClick:function(){return s("Dor de Cabe\xe7a")}},"Dor de Cabe\xe7a"),o.a.createElement(l.a,{variant:r.includes("Dor de garganta")?"contained":"outlined",onClick:function(){return s("Dor de garganta")}},"Dor de garganta"),o.a.createElement(l.a,{variant:r.includes("Dores pelo corpo")?"contained":"outlined",onClick:function(){return s("Dores pelo corpo")}},"Dores pelo corpo"),o.a.createElement(l.a,{variant:r.includes("Mal estar geral")?"contained":"outlined",onClick:function(){return s("Mal estar geral")}},"Mal estar geral")),o.a.createElement("div",null,o.a.createElement(g.a,{id:"temperature",label:"Temperatura em \xbaC",value:k,onChange:function(e){j(e.target.value)}})),o.a.createElement("h4",null,"Quais destas EPIs voc\xea utilizou hoje?"),o.a.createElement("div",null,o.a.createElement(l.a,{variant:d.includes("Gorro")?"contained":"outlined",onClick:function(){return f("Gorro")}},"Gorro"),o.a.createElement(l.a,{variant:d.includes("\xd3culos de prote\xe7\xe3o")?"contained":"outlined",onClick:function(){return f("\xd3culos de prote\xe7\xe3o")}},"\xd3culos de prote\xe7\xe3o"),o.a.createElement(l.a,{variant:d.includes("Protetor facial")?"contained":"outlined",onClick:function(){return f("Protetor facial")}},"Protetor facial"),o.a.createElement(l.a,{variant:d.includes("M\xe1scara")?"contained":"outlined",onClick:function(){return f("M\xe1scara")}},"M\xe1scara"),o.a.createElement(l.a,{variant:d.includes("Avental hiperme\xe1vel")?"contained":"outlined",onClick:function(){return f("Avental hiperme\xe1vel")}},"Avental hiperme\xe1vel"),o.a.createElement(l.a,{variant:d.includes("Luvas de procedimento")?"contained":"outlined",onClick:function(){return f("Luvas de procedimento")}},"Luvas de procedimento")),o.a.createElement("h4",null,"Algum paciente atendido foi diagnosticado como positivo?"),o.a.createElement("div",null,o.a.createElement(l.a,{variant:"Sim"===b?"contained":"outlined",onClick:function(){return h("Sim")}},"Sim"),o.a.createElement(l.a,{variant:"N\xe3o"===b?"contained":"outlined",onClick:function(){return h("N\xe3o")}},"N\xe3o"),o.a.createElement(l.a,{variant:"N\xe3o sei informar"===b?"contained":"outlined",onClick:function(){return h("N\xe3o sei informar")}},"N\xe3o sei informar")),o.a.createElement("div",null,o.a.createElement(l.a,{onClick:function(){var a={symptoms:r,epi:d,hadContact:b};localStorage.setItem("lastReport",JSON.stringify(a)),i([]),p([]),j(""),h(),e.onSubmitCheckup()},className:"rounded-button",variant:"contained"},"Enviar")))}),K=(t(85),function(e){var a=Object(n.useState)(),t=Object(c.a)(a,2),r=t[0],i=t[1],l=Object(n.useState)(),s=Object(c.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(),p=Object(c.a)(d,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){E(localStorage.getItem("role")),m(localStorage.getItem("telephone")),i(localStorage.getItem("name"))}),[]),o.a.createElement("div",null,o.a.createElement("p",null,"Nome:"),o.a.createElement("h1",null,r),o.a.createElement("p",null,"N\xfamero do Telefone:"),o.a.createElement("h1",null,u),o.a.createElement("p",null,"Ocupa\xe7\xe3o:"),o.a.createElement("h1",null,f))});var X=function(){var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){r(localStorage.getItem("hasOnboardFinished"))}),[]);var i=o.a.useState(0),l=Object(c.a)(i,2),s=l[0],u=l[1],m=[o.a.createElement(Z,null),o.a.createElement(H,{onSubmitCheckup:function(){u(0)}}),o.a.createElement(K,null)],d=["Comunicados","Auto-Avalia\xe7\xe3o","Perfil"];return o.a.createElement("div",{className:"App"},t?o.a.createElement("div",null,o.a.createElement("h1",{className:"pageName"},d[s]),o.a.createElement("div",null,m[s]),o.a.createElement(b.a,{value:s,onChange:function(e,a){u(a)},showLabels:!0},o.a.createElement(h.a,{label:d[0],icon:o.a.createElement(j.a,null)}),o.a.createElement(h.a,{label:d[1],icon:o.a.createElement(O.a,null)}),o.a.createElement(h.a,{label:d[2],icon:o.a.createElement(w.a,null)}))):o.a.createElement(v,{onOnboardFinish:function(){r(!0)}}))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(X,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Y?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(a,e)}))}}()}},[[71,1,2]]]);
//# sourceMappingURL=main.d4dcb8c3.chunk.js.map