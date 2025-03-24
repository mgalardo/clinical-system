import{Q as _e}from"./QPage.477f3827.js";import{a as X,u as he}from"./use-dialog-plugin-component.be6b318e.js";import{_ as Ce}from"./PageTitle.0dce80ef.js";import{_ as Ee}from"./Table.486fea1f.js";import{_ as ye}from"./AdicionarPacienteDialog.ad87971a.js";import{c as M,r as k,a as f,h as v,Q as Se,D as se,V as Pe,i as B,aq as qe,a5 as D,ar as Ae,as as ke,a1 as $,at as z,ac as J,ak as F,a2 as j,z as we,w as De,X as Ie,bf as Te,d as T,bg as le,j as Ne,k as K,bh as ue,v as Ve,y as $e,az as Be,q as Qe,E as ze,G as ce,J as A,K as I,L as h,T as Fe,b6 as je,M as y,b8 as Y,N as de,bi as R,P as q,aF as G,aS as Z,aT as ee,b9 as Ke,f as Re,ba as Le,ap as Me}from"./index.1c916e56.js";import{a as Oe,Q as te}from"./QExpansionItem.6c600bce.js";import{g as ae,s as ne}from"./touch.9135741d.js";import{e as He}from"./format.36b1d5ff.js";import{u as pe}from"./use-render-cache.3aae9b27.js";import"./Button.059cf228.js";import"./QList.cc04f5c7.js";import"./QSelect.9288a95d.js";import"./Form.c9aa95a5.js";import"./TextInput.ec38a954.js";import"./SelectInput.24e8409c.js";import"./Label.7c811b84.js";var ve=M({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:a}){const{proxy:{$q:c}}=B(),d=k(null),r=f(()=>e.stepper.modelValue===e.step.name),t=f(()=>{const o=e.step.disable;return o===!0||o===""}),n=f(()=>{const o=e.step.error;return o===!0||o===""}),l=f(()=>{const o=e.step.done;return t.value===!1&&(o===!0||o==="")}),m=f(()=>{const o=e.step.headerNav,p=o===!0||o===""||o===void 0;return t.value===!1&&e.stepper.headerNav&&p}),u=f(()=>e.step.prefix&&(r.value===!1||e.stepper.activeIcon==="none")&&(n.value===!1||e.stepper.errorIcon==="none")&&(l.value===!1||e.stepper.doneIcon==="none")),s=f(()=>{const o=e.step.icon||e.stepper.inactiveIcon;if(r.value===!0){const p=e.step.activeIcon||e.stepper.activeIcon;return p==="none"?o:p||c.iconSet.stepper.active}if(n.value===!0){const p=e.step.errorIcon||e.stepper.errorIcon;return p==="none"?o:p||c.iconSet.stepper.error}if(t.value===!1&&l.value===!0){const p=e.step.doneIcon||e.stepper.doneIcon;return p==="none"?o:p||c.iconSet.stepper.done}return o}),x=f(()=>{const o=n.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(r.value===!0){const p=e.step.activeColor||e.stepper.activeColor||e.step.color;return p!==void 0?p:o}return o!==void 0?o:t.value===!1&&l.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),g=f(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(x.value!==void 0?` text-${x.value}`:"")+(n.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(u.value===!0?"prefix":"icon"):"")+(r.value===!0?" q-stepper__tab--active":"")+(l.value===!0?" q-stepper__tab--done":"")+(m.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(t.value===!0?" q-stepper__tab--disabled":"")),C=f(()=>e.stepper.headerNav!==!0?!1:m.value);function _(){d.value!==null&&d.value.focus(),r.value===!1&&e.goToPanel(e.step.name)}function S(o){o.keyCode===13&&r.value===!1&&e.goToPanel(e.step.name)}return()=>{const o={class:g.value};m.value===!0&&(o.onClick=_,o.onKeyup=S,Object.assign(o,t.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:a.tabindex||0}));const p=[v("div",{class:"q-focus-helper",tabindex:-1,ref:d}),v("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[v("span",{class:"row flex-center"},[u.value===!0?e.step.prefix:v(Se,{name:s.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const P=[v("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&P.push(v("div",{class:"q-stepper__caption"},e.step.caption)),p.push(v("div",{class:"q-stepper__label q-stepper__line relative-position"},P))}return se(v("div",o,p),[[Pe,C.value]])}}});function Ue(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((c,d)=>{const r=parseFloat(c);r&&(a[d]=r)}),a}var We=qe({name:"touch-swipe",beforeMount(e,{value:a,arg:c,modifiers:d}){if(d.mouse!==!0&&D.has.touch!==!0)return;const r=d.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:Ue(c),direction:ae(d),noop:Ae,mouseStart(n){ne(n,t)&&ke(n)&&($(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(n,!0))},touchStart(n){if(ne(n,t)){const l=n.target;$(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(n)}},start(n,l){D.is.firefox===!0&&z(e,!0);const m=J(n);t.event={x:m.left,y:m.top,time:Date.now(),mouse:l===!0,dir:!1}},move(n){if(t.event===void 0)return;if(t.event.dir!==!1){F(n);return}const l=Date.now()-t.event.time;if(l===0)return;const m=J(n),u=m.left-t.event.x,s=Math.abs(u),x=m.top-t.event.y,g=Math.abs(x);if(t.event.mouse!==!0){if(s<t.sensitivity[1]&&g<t.sensitivity[1]){t.end(n);return}}else if(window.getSelection().toString()!==""){t.end(n);return}else if(s<t.sensitivity[2]&&g<t.sensitivity[2])return;const C=s/l,_=g/l;t.direction.vertical===!0&&s<g&&s<100&&_>t.sensitivity[0]&&(t.event.dir=x<0?"up":"down"),t.direction.horizontal===!0&&s>g&&g<100&&C>t.sensitivity[0]&&(t.event.dir=u<0?"left":"right"),t.direction.up===!0&&s<g&&x<0&&s<100&&_>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&s<g&&x>0&&s<100&&_>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&s>g&&u<0&&g<100&&C>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&s>g&&u>0&&g<100&&C>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(F(n),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),He(),t.styleCleanup=S=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const o=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(o,50):o()}),t.handler({evt:n,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:s,y:g}})):t.end(n)},end(n){t.event!==void 0&&(j(t,"temp"),D.is.firefox===!0&&z(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),n!==void 0&&t.event.dir!==!1&&F(n),t.event=void 0)}};if(e.__qtouchswipe=t,d.mouse===!0){const n=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";$(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}D.has.touch===!0&&$(t,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const c=e.__qtouchswipe;c!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&c.end(),c.handler=a.value),c.direction=ae(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(j(a,"main"),j(a,"temp"),D.is.firefox===!0&&z(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});const Xe={name:{required:!0},disable:Boolean},oe={setup(e,{slots:a}){return()=>v("div",{class:"q-panel scroll",role:"tabpanel"},T(a.default))}},Je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ye=["update:modelValue","beforeTransition","transition"];function Ge(){const{props:e,emit:a,proxy:c}=B(),{getCache:d}=pe(),{registerTimeout:r}=we();let t,n;const l=k(null),m={value:null};function u(i){const b=e.vertical===!0?"up":"left";w((c.$q.lang.rtl===!0?-1:1)*(i.direction===b?1:-1))}const s=f(()=>[[We,u,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),x=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),g=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),C=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),_=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),o=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);De(()=>e.modelValue,(i,b)=>{const E=N(i)===!0?Q(i):-1;n!==!0&&H(E===-1?0:E<Q(b)?-1:1),m.value!==E&&(m.value=E,a("beforeTransition",i,b),r(()=>{a("transition",i,b)},e.transitionDuration))});function p(){w(1)}function P(){w(-1)}function O(i){a("update:modelValue",i)}function N(i){return i!=null&&i!==""}function Q(i){return t.findIndex(b=>b.props.name===i&&b.props.disable!==""&&b.props.disable!==!0)}function fe(){return t.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function H(i){const b=i!==0&&e.animated===!0&&m.value!==-1?"q-transition--"+(i===-1?x.value:g.value):null;l.value!==b&&(l.value=b)}function w(i,b=m.value){let E=b+i;for(;E!==-1&&E<t.length;){const V=t[E];if(V!==void 0&&V.props.disable!==""&&V.props.disable!==!0){H(i),n=!0,a("update:modelValue",V.props.name),setTimeout(()=>{n=!1});return}E+=i}e.infinite===!0&&t.length!==0&&b!==-1&&b!==t.length&&w(i,i===-1?t.length:-1)}function U(){const i=Q(e.modelValue);return m.value!==i&&(m.value=i),!0}function W(){const i=N(e.modelValue)===!0&&U()&&t[m.value];return e.keepAlive===!0?[v(le,S.value,[v(o.value===!0?d(_.value,()=>({...oe,name:_.value})):oe,{key:_.value,style:C.value},()=>i)])]:[v("div",{class:"q-panel scroll",style:C.value,key:_.value,role:"tabpanel"},[i])]}function xe(){if(t.length!==0)return e.animated===!0?[v(Ie,{name:l.value},W)]:W()}function ge(i){return t=Te(T(i.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&N(b.props.name)===!0),t.length}function be(){return t}return Object.assign(c,{next:p,previous:P,goTo:O}),{panelIndex:m,panelDirectives:s,updatePanelsList:ge,updatePanelIndex:U,getPanelContent:xe,getEnabledPanels:fe,getPanels:be,isValidPanelName:N,keepAliveProps:S,needsUniqueKeepAliveWrapper:o,goToPanelByOffset:w,goToPanel:O,nextPanel:p,previousPanel:P}}function me(e){return v("div",{class:"q-stepper__step-content"},[v("div",{class:"q-stepper__step-inner"},T(e.default))])}const ie={setup(e,{slots:a}){return()=>me(a)}};var re=M({name:"QStep",props:{...Xe,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:a,emit:c}){const{proxy:{$q:d}}=B(),r=Ne(ue,K);if(r===K)return console.error("QStep needs to be a child of QStepper"),K;const{getCache:t}=pe(),n=k(null),l=f(()=>r.value.modelValue===e.name),m=f(()=>d.platform.is.ios!==!0&&d.platform.is.chrome===!0||l.value!==!0||r.value.vertical!==!0?{}:{onScroll(x){const{target:g}=x;g.scrollTop>0&&(g.scrollTop=0),e.onScroll!==void 0&&c("scroll",x)}}),u=f(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function s(){const x=r.value.vertical;return x===!0&&r.value.keepAlive===!0?v(le,r.value.keepAliveProps.value,l.value===!0?[v(r.value.needsUniqueKeepAliveWrapper.value===!0?t(u.value,()=>({...ie,name:u.value})):ie,{key:u.value},a.default)]:void 0):x!==!0||l.value===!0?me(a):void 0}return()=>v("div",{ref:n,class:"q-stepper__step",role:"tabpanel",...m.value},r.value.vertical===!0?[v(ve,{stepper:r.value,step:e,goToPanel:r.value.goToPanel}),r.value.animated===!0?v(Oe,s):s()]:[s()])}});const Ze=/(-\w)/g;function et(e){const a={};for(const c in e){const d=c.replace(Ze,r=>r[1].toUpperCase());a[d]=e[c]}return a}var tt=M({name:"QStepper",props:{...Ve,...Je,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:Ye,setup(e,{slots:a}){const c=B(),d=$e(e,c.proxy.$q),{updatePanelsList:r,isValidPanelName:t,updatePanelIndex:n,getPanelContent:l,getPanels:m,panelDirectives:u,goToPanel:s,keepAliveProps:x,needsUniqueKeepAliveWrapper:g}=Ge();Be(ue,f(()=>({goToPanel:s,keepAliveProps:x,needsUniqueKeepAliveWrapper:g,...e})));const C=f(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(d.value===!0?" q-stepper--dark q-dark":"")),_=f(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function S(){const o=T(a.message,[]);if(e.vertical===!0){t(e.modelValue)&&n();const p=v("div",{class:"q-stepper__content"},T(a.default));return o===void 0?[p]:o.concat(p)}return[v("div",{class:_.value},m().map(p=>{const P=et(p.props);return v(ve,{key:P.name,stepper:e,step:P,goToPanel:s})})),o,ze("div",{class:"q-stepper__content q-panel-parent"},l(),"cont",e.swipeable,()=>u.value)]}return()=>(r(a),v("div",{class:C.value},Qe(a.navigation,S())))}});const at={class:"historico-paciente__expansion-description"},nt={class:"historico-paciente__expansion-notes"},L=1,ot=ce({__name:"HistoricoPaciente",props:{client:Object},emits:[...X.emits],setup(e){const a=e,c=k(a.client?a.client:{}),{dialogRef:d,onDialogHide:r,onDialogOK:t}=X();function n(){t()}const l=k([{titulo:"Comunica\xE7\xE3o Receptiva",itens:[{label:"Compreende os pronomes 'meu' e 'teu'.",description:"Vocaliza ou gesticula (por exemplo, aponta, entrega os objetos) em resposta \xE0s perguntas dos adultos. O adulto pode usar objetos pertencente a crian\xE7a para avaliar a compreens\xE3o. Alguns exemplos s\xE3o \u201Cde quem \xE9 a vez? \u201DOu \u201C de quem \xE9 esse sapato? \u201D. A resposta n\xE3o precisa de ser acompanhada por contato visual",notas:'Nas trocas de turno oportunizar o (minha vez/sua vez). Em momentos de conversa\xE7\xE3o, perguntar ao longo da sess\xE3o coisas relacionadas a formas possessivas, por exemplo, "Essa mochila \xE9 de quem?", ele deve responder "Minha". Esse objetivo deve ser aplicado em ambiente cl\xEDnico e escolar.'},{label:"Compreende uma variedade de conceitos e rela\xE7\xF5es f\xEDsicas descritivas"},{label:"Compreende rela\xE7\xF5es espaciais envolvendo objetos e locu\xE7\xF5es preposicionais: atr\xE1s, na parte de tr\xE1s de, em frente de, etc."},{label:"Compreende 'igual' e 'diferente'"},{label:"Compreende as rela\xE7\xF5es temporais"}]},{titulo:"Comunica\xE7\xE3o Expressiva",itens:[{label:"Produz enunciados de duas ou mais palavras para fazer coment\xE1rios a outra pessoa."},{label:'Transmite uma mensagem simples a outra pessoa ("Vai dizer "Ol\xE1" \xE0 mam\xE3e")'},{label:'Faz perguntas simples de "Sim/N\xE3o" usando uma entoa\xE7\xE3o ascendente (pode ser um enunciado de uma palavra com uma entoa\xE7\xE3o ascendente)'},{label:'Responde quest\xF5es complexas ("Quem?", "Como?")'},{label:"Usa palavras para descrever estados f\xEDsicos"}]},{titulo:"Compet\xEAncias Sociais Adultos ou Pares",itens:[{label:"Joga jogos simples de motricidade grossa (por exemplo, bola, escondidas, rodas de can\xE7\xF5es)"},{label:"Partilha e mostra objetos quando o par pede."}]},{titulo:"Cogni\xE7\xE3o",itens:[{label:"Categoriza objetos/imagens em oito classes."}]},{titulo:"Jogo",itens:[{label:"Organiza adere\xE7os para o tema."},{label:"Usa objetos substitutos para simbolizar os adere\xE7os do jogo"},{label:"Liga espontaneamente tr\xEAs ou mais comportamentos relacionados num tema de jogo"}]},{titulo:"Compet\xEAncias Sociais",itens:[{label:"Convida os pares para brincar"}]}]);return(m,u)=>(A(),I(je,{ref_key:"dialogRef",ref:d,onHide:Fe(r)},{default:h(()=>[y(Le,{class:"historico-paciente default__border-radius default__box-shadow"},{default:h(()=>[y(Y,{class:"historico-paciente__title"},{default:h(()=>[de(" Hist\xF3rico Cliente - "+R(c.value.nome),1)]),_:1}),y(Y,null,{default:h(()=>[u[1]||(u[1]=q("div",{class:"historico-paciente__info"},"Profissionais Respons\xE1veis: 1",-1)),u[2]||(u[2]=q("div",{class:"historico-paciente__info"},"\xDAltimo Checklist: 10/09/2024",-1)),u[3]||(u[3]=q("div",{class:"historico-paciente__info"},"\xDAltimo PEI: 14/02/2025",-1)),u[4]||(u[4]=q("div",{class:"historico-paciente__info"},"\xDAltima Coleta: 12/03/2025",-1)),u[5]||(u[5]=q("div",{class:"historico-paciente__info"},"\xDAltimo Acesso Familiar: 07/06/2023",-1)),(A(),I(tt,{key:L,modelValue:L,"onUpdate:modelValue":u[0]||(u[0]=s=>L=s),ref:"stepper",color:"primary","header-nav":"",class:"historico-paciente__stepper",animated:""},{default:h(()=>[y(re,{name:1,title:"Coleta de Dados",icon:"timeline"},{default:h(()=>[(A(!0),G(ee,null,Z(l.value,s=>(A(),I(te,{"switch-toggle-side":"",class:"historico-paciente__expansion-item",key:s.titulo,"expand-separator":"",label:s.titulo},{default:h(()=>[(A(!0),G(ee,null,Z(s.itens,x=>se((A(),I(te,{"switch-toggle-side":"",class:"historico-paciente__expansion-item--level-2",key:x.label,"header-inset-level":1,"expand-separator":"",label:x.label},{default:h(()=>[q("div",at,R(x.description),1),q("div",nt,R(x.notas),1)]),_:2},1032,["label"])),[[Me,s.itens]])),128))]),_:2},1032,["label"]))),128))]),_:1}),y(re,{name:2,title:"Gr\xE1fico de evolu\xE7\xE3o",icon:"chart"})]),_:1}))]),_:1}),y(Ke,{align:"right"},{default:h(()=>[y(Re,{color:"primary",unelevated:"",label:"Fechar",onClick:n})]),_:1})]),_:1})]),_:1},8,["onHide"]))}}),it={class:"default__box-shadow"},yt=ce({name:"Pacientes",__name:"PacientesAtivos",setup(e){const a=he();function c(n){a.dialog({component:ye,componentProps:{client:n}})}function d(n){a.dialog({component:ot,componentProps:{client:n}})}const r=k([{name:"nome",label:"Nome",align:"left",field:"nome"},{name:"idade",align:"center",label:"Data de Nascimento <span>Idade</span>",field:"idade"},{name:"telefone",align:"center",label:"Telefone",field:"telefone"},{name:"email",align:"center",label:"Email",field:"email"},{name:"empresa",align:"left",label:"Empresa",field:"empresa"},{name:"status",align:"center",label:"Situa\xE7\xE3o",field:"status"},{name:"actions_custom",align:"center",label:"A\xE7\xF5es",field:"actions_custom",actions:[{icon:"edit",title:"Editar",execute:c},{icon:"description",title:"Hist\xF3rico",execute:d}]}]),t=k([{nome:"Matheus Alexander",idade:"03/11/2000 <span>(24 anos, 2 meses e 3 dias)</span>",telefone:"(21)99777-5301",email:"galardo.math@gmail.com",empresa:1,status:"Ativo"},{nome:"Volmar Filho",idade:"",telefone:"",email:"volmar@gmail.com",empresa:2,status:"Ativo"}]);return(n,l)=>(A(),I(_e,null,{default:h(()=>[y(Ce,{onClick:c,"add-button":!0,"add-button-label":"Adicionar paciente"},{default:h(()=>l[0]||(l[0]=[de("Lista de Pacientes")])),_:1}),q("section",it,[y(Ee,{rows:t.value,columns:r.value},null,8,["rows","columns"])])]),_:1}))}});export{yt as default};
