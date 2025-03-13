import{c as R,a as o,h as w,d as J,n as Be,u as Re,r as C,e as Fe,g as Ne,w as g,o as qe,Q as j,f as K,i as ce,s as je,j as xe,k as E,l as ke,m as Ee,p as Se,q as Ue,t as Ge,v as Ke,x as Je,y as Xe,z as Ye,A as Ze,B as ea,C as he,D as p,E as ge,F as aa,G as ta,H as la,I as na,J as $,K as L,L as d,M as u,N as M,O as oa,P as se,R as ia,S as ua,T as I,U as H}from"./index.83b5ee12.js";import{Q as ra,a as ye,b as W,c as S}from"./QItemLabel.5f4e151d.js";import{Q as sa}from"./QScrollObserver.7a2db925.js";import{Q as we}from"./QImg.3d391c19.js";import{Q as da}from"./QExpansionItem.c37fe48a.js";import{T as de,Q as ca}from"./QScrollArea.8f82f397.js";import{b as ee}from"./format.ef5f6091.js";import{Q as va,a as fa}from"./QLayout.e019bd41.js";import"./touch.9135741d.js";var ma=R({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:c}){const r=o(()=>{const f=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${f.length!==0?" "+f:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>w("div",{class:r.value},J(c.default))}});const ba=Object.keys(Be);function ha(e){return ba.reduce((c,r)=>{const f=e[r];return f!==void 0&&(c[r]=f),c},{})}var ga=R({name:"QBtnDropdown",props:{...Be,...Re,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:c,emit:r}){const{proxy:f}=ce(),l=C(e.modelValue),b=C(null),i=Fe(),x=o(()=>{const v={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":i.value,"aria-label":e.toggleAriaLabel||f.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(v["aria-disabled"]="true"),v}),D=o(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),P=o(()=>Ne(e)),t=o(()=>ha(e));g(()=>e.modelValue,v=>{b.value!==null&&b.value[v?"show":"hide"]()}),g(()=>e.split,B);function z(v){l.value=!0,r("beforeShow",v)}function Q(v){r("show",v),r("update:modelValue",!0)}function y(v){l.value=!1,r("beforeHide",v)}function h(v){r("hide",v),r("update:modelValue",!1)}function A(v){r("click",v)}function _(v){je(v),B(),r("click",v)}function m(v){b.value!==null&&b.value.toggle(v)}function n(v){b.value!==null&&b.value.show(v)}function B(v){b.value!==null&&b.value.hide(v)}return Object.assign(f,{show:n,hide:B,toggle:m}),qe(()=>{e.modelValue===!0&&n()}),()=>{const v=[w(j,{class:D.value,name:e.dropdownIcon||f.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&v.push(w(ra,{ref:b,id:i.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:z,onShow:Q,onBeforeHide:y,onHide:h},c.default)),e.split===!1?w(K,{class:"q-btn-dropdown q-btn-dropdown--simple",...t.value,...x.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:A},{default:()=>J(c.label,[]).concat(v),loading:c.loading}):w(ma,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...P.value,glossy:e.glossy,stretch:e.stretch},()=>[w(K,{class:"q-btn-dropdown--current",...t.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:_},{default:c.label,loading:c.loading}),w(K,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...x.value,...P.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>v)])}}}),ya=R({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:c}){const r=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>w("div",{class:r.value},J(c.default))}}),wa=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:c}){const r=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>w("div",{class:r.value,role:"toolbar"},J(c.default))}}),_a=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:r}){const{proxy:{$q:f}}=ce(),l=xe(Se,E);if(l===E)return console.error("QHeader needs to be child of QLayout"),E;const b=C(parseInt(e.heightHint,10)),i=C(!0),x=o(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||f.platform.is.ios&&l.isContainer.value===!0),D=o(()=>{if(e.modelValue!==!0)return 0;if(x.value===!0)return i.value===!0?b.value:0;const n=b.value-l.scroll.value.position;return n>0?n:0}),P=o(()=>e.modelValue!==!0||x.value===!0&&i.value!==!0),t=o(()=>e.modelValue===!0&&P.value===!0&&e.reveal===!0),z=o(()=>"q-header q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(P.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),Q=o(()=>{const n=l.rows.value.top,B={};return n[0]==="l"&&l.left.space===!0&&(B[f.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(B[f.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),B});function y(n,B){l.update("header",n,B)}function h(n,B){n.value!==B&&(n.value=B)}function A({height:n}){h(b,n),y("size",n)}function _(n){t.value===!0&&h(i,!0),r("focusin",n)}g(()=>e.modelValue,n=>{y("space",n),h(i,!0),l.animate()}),g(D,n=>{y("offset",n)}),g(()=>e.reveal,n=>{n===!1&&h(i,e.modelValue)}),g(i,n=>{l.animate(),r("reveal",n)}),g(l.scroll,n=>{e.reveal===!0&&h(i,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const m={};return l.instances.header=m,e.modelValue===!0&&y("size",b.value),y("space",e.modelValue),y("offset",D.value),ke(()=>{l.instances.header===m&&(l.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const n=Ee(c.default,[]);return e.elevated===!0&&n.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(w(sa,{debounce:0,onResize:A})),w("header",{class:z.value,style:Q.value,onFocusin:_},n)}}});const Ba=["top","middle","bottom"];var qa=R({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Ba.includes(e)}},setup(e,{slots:c}){const r=o(()=>e.align!==void 0?{verticalAlign:e.align}:null),f=o(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>w("div",{class:f.value,style:r.value,role:"status","aria-label":e.label},Ue(c.default,e.label!==void 0?[e.label]:[]))}});const _e=150;var xa=R({name:"QDrawer",inheritAttrs:!1,props:{...Ge,...Ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Je,"onLayout","miniState"],setup(e,{slots:c,emit:r,attrs:f}){const l=ce(),{proxy:{$q:b}}=l,i=Xe(e,b),{preventBodyScroll:x}=aa(),{registerTimeout:D,removeTimeout:P}=Ye(),t=xe(Se,E);if(t===E)return console.error("QDrawer needs to be child of QLayout"),E;let z,Q=null,y;const h=C(e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint),A=o(()=>e.mini===!0&&h.value!==!0),_=o(()=>A.value===!0?e.miniWidth:e.width),m=C(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),n=o(()=>e.persistent!==!0&&(h.value===!0||De.value===!0));function B(a,s){if(Ce(),a!==!1&&t.animate(),k(0),h.value===!0){const q=t.instances[Y.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),O(1),t.isContainer.value!==!0&&x(!0)}else O(0),a!==!1&&ie(!1);D(()=>{a!==!1&&ie(!0),s!==!0&&r("show",a)},_e)}function v(a,s){Qe(),a!==!1&&t.animate(),O(0),k(F.value*_.value),ue(),s!==!0?D(()=>{r("hide",a)},_e):P()}const{show:ae,hide:U}=Ze({showing:m,hideOnRouteChange:n,handleShow:B,handleHide:v}),{addToHistory:Ce,removeFromHistory:Qe}=ea(m,U,n),X={belowBreakpoint:h,hide:U},T=o(()=>e.side==="right"),F=o(()=>(b.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),ve=C(0),N=C(!1),te=C(!1),fe=C(_.value*F.value),Y=o(()=>T.value===!0?"left":"right"),le=o(()=>m.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),ne=o(()=>e.overlay===!0||e.miniToOverlay===!0||t.view.value.indexOf(T.value?"R":"L")!==-1||b.platform.is.ios===!0&&t.isContainer.value===!0),G=o(()=>e.overlay===!1&&m.value===!0&&h.value===!1),De=o(()=>e.overlay===!0&&m.value===!0&&h.value===!1),Ae=o(()=>"fullscreen q-drawer__backdrop"+(m.value===!1&&N.value===!1?" hidden":"")),Te=o(()=>({backgroundColor:`rgba(0,0,0,${ve.value*.4})`})),me=o(()=>T.value===!0?t.rows.value.top[2]==="r":t.rows.value.top[0]==="l"),Me=o(()=>T.value===!0?t.rows.value.bottom[2]==="r":t.rows.value.bottom[0]==="l"),Oe=o(()=>{const a={};return t.header.space===!0&&me.value===!1&&(ne.value===!0?a.top=`${t.header.offset}px`:t.header.space===!0&&(a.top=`${t.header.size}px`)),t.footer.space===!0&&Me.value===!1&&(ne.value===!0?a.bottom=`${t.footer.offset}px`:t.footer.space===!0&&(a.bottom=`${t.footer.size}px`)),a}),Ve=o(()=>{const a={width:`${_.value}px`,transform:`translateX(${fe.value}px)`};return h.value===!0?a:Object.assign(a,Oe.value)}),$e=o(()=>"q-drawer__content fit "+(t.isContainer.value!==!0?"scroll":"overflow-auto")),Le=o(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(i.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":m.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(ne.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(me.value===!0?" q-drawer--top-padding":""))),pe=o(()=>{const a=b.lang.rtl===!0?e.side:Y.value;return[[de,He,void 0,{[a]:!0,mouse:!0}]]}),Pe=o(()=>{const a=b.lang.rtl===!0?Y.value:e.side;return[[de,be,void 0,{[a]:!0,mouse:!0}]]}),ze=o(()=>{const a=b.lang.rtl===!0?Y.value:e.side;return[[de,be,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){We(h,e.behavior==="mobile"||e.behavior!=="desktop"&&t.totalWidth.value<=e.breakpoint)}g(h,a=>{a===!0?(z=m.value,m.value===!0&&U(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(m.value===!0?(k(0),O(0),ue()):ae(!1))}),g(()=>e.side,(a,s)=>{t.instances[s]===X&&(t.instances[s]=void 0,t[s].space=!1,t[s].offset=0),t.instances[a]=X,t[a].size=_.value,t[a].space=G.value,t[a].offset=le.value}),g(t.totalWidth,()=>{(t.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),g(()=>e.behavior+e.breakpoint,oe),g(t.isContainer,a=>{m.value===!0&&x(a!==!0),a===!0&&oe()}),g(t.scrollbarWidth,()=>{k(m.value===!0?0:void 0)}),g(le,a=>{V("offset",a)}),g(G,a=>{r("onLayout",a),V("space",a)}),g(T,()=>{k()}),g(_,a=>{k(),re(e.miniToOverlay,a)}),g(()=>e.miniToOverlay,a=>{re(a,_.value)}),g(()=>b.lang.rtl,()=>{k()}),g(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ie(),t.animate())}),g(A,a=>{r("miniState",a)});function k(a){a===void 0?he(()=>{a=m.value===!0?0:_.value,k(F.value*a)}):(t.isContainer.value===!0&&T.value===!0&&(h.value===!0||Math.abs(a)===_.value)&&(a+=F.value*t.scrollbarWidth.value),fe.value=a)}function O(a){ve.value=a}function ie(a){const s=a===!0?"remove":t.isContainer.value!==!0?"add":"";s!==""&&document.body.classList[s]("q-body--drawer-toggle")}function Ie(){Q!==null&&clearTimeout(Q),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,Q=setTimeout(()=>{Q=null,te.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function He(a){if(m.value!==!1)return;const s=_.value,q=ee(a.distance.x,0,s);if(a.isFinal===!0){q>=Math.min(75,s)===!0?ae():(t.animate(),O(0),k(F.value*s)),N.value=!1;return}k((b.lang.rtl===!0?T.value!==!0:T.value)?Math.max(s-q,0):Math.min(0,q-s)),O(ee(q/s,0,1)),a.isFirst===!0&&(N.value=!0)}function be(a){if(m.value!==!0)return;const s=_.value,q=a.direction===e.side,Z=(b.lang.rtl===!0?q!==!0:q)?ee(a.distance.x,0,s):0;if(a.isFinal===!0){Math.abs(Z)<Math.min(75,s)===!0?(t.animate(),O(1),k(0)):U(),N.value=!1;return}k(F.value*Z),O(ee(1-Z/s,0,1)),a.isFirst===!0&&(N.value=!0)}function ue(){x(!1),ie(!0)}function V(a,s){t.update(e.side,a,s)}function We(a,s){a.value!==s&&(a.value=s)}function re(a,s){V("size",a===!0?e.miniWidth:s)}return t.instances[e.side]=X,re(e.miniToOverlay,_.value),V("space",G.value),V("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&m.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),qe(()=>{r("onLayout",G.value),r("miniState",A.value),z=e.showIfAbove===!0;const a=()=>{(m.value===!0?B:v)(!1,!0)};if(t.totalWidth.value!==0){he(a);return}y=g(t.totalWidth,()=>{y(),y=void 0,m.value===!1&&e.showIfAbove===!0&&h.value===!1?ae(!1):a()})}),ke(()=>{y!==void 0&&y(),Q!==null&&(clearTimeout(Q),Q=null),m.value===!0&&ue(),t.instances[e.side]===X&&(t.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(p(w("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),pe.value)),a.push(ge("div",{ref:"backdrop",class:Ae.value,style:Te.value,"aria-hidden":"true",onClick:U},void 0,"backdrop",e.noSwipeBackdrop!==!0&&m.value===!0,()=>ze.value)));const s=A.value===!0&&c.mini!==void 0,q=[w("div",{...f,key:""+s,class:[$e.value,f.class]},s===!0?c.mini():J(c.default))];return e.elevated===!0&&m.value===!0&&q.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ge("aside",{ref:"content",class:Le.value,style:Ve.value},q,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Pe.value)),w("div",{class:"q-drawer-container"},a)}}});const ka={style:{position:"relative"}},La=ta({name:"MainLayout",__name:"MainLayout",setup(e){const c=la(),r=C(!0),f=C(!1);function l(){f.value=!f.value}return(b,i)=>{const x=na("router-view");return $(),L(va,{class:"main-layout",view:"lHh lpR lff"},{default:d(()=>[u(_a,{class:"main-layout__header"},{default:d(()=>[u(wa,null,{default:d(()=>[u(ya,null,{default:d(()=>[u(ga,{"menu-self":"top end","content-class":"main-layout__user-info",flat:"",unelevated:"","no-caps":""},{label:d(()=>[i[2]||(i[2]=M(" Ol\xE1, Matheus Alexander ")),u(oa,null,{default:d(()=>i[1]||(i[1]=[se("img",{src:"https://cdn.quasar.dev/img/avatar1.jpg"},null,-1)])),_:1})]),default:d(()=>[u(K,{"no-caps":"",class:"main-layout__exit-btn",unelevated:"",flat:"",icon:"logout",label:"Sair"})]),_:1})]),_:1})]),_:1})]),_:1}),u(xa,{class:"default__box-shadow",mini:f.value,"show-if-above":"",modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=D=>r.value=D),side:"left",behavior:"desktop"},{default:d(()=>[se("div",{class:ia(["main-layout__images",{"main-layout__images--minimized":f.value}])},[u(we,{width:f.value?"":"100px",src:"/brincaris.png"},null,8,["width"]),u(we,{width:f.value?"":"100px",src:"/ilumiare.png"},null,8,["width"]),u(K,{dense:"",flat:"",round:"",icon:f.value?"arrow_right":"arrow_left",onClick:l},null,8,["icon"])],2),u(ua),u(ca,{class:"fit"},{default:d(()=>[u(ye,{padding:""},{default:d(()=>[p(($(),L(W,{to:"/",active:I(c).path==="/","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{avatar:""},{default:d(()=>[u(j,{name:"home"})]),_:1}),u(S,null,{default:d(()=>i[3]||(i[3]=[M(" In\xEDcio ")])),_:1})]),_:1},8,["active"])),[[H]]),p(($(),L(W,{to:"/empresas",active:I(c).path==="/empresas","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{avatar:""},{default:d(()=>[u(j,{name:"store"})]),_:1}),u(S,null,{default:d(()=>i[4]||(i[4]=[M(" Empresas ")])),_:1})]),_:1},8,["active"])),[[H]]),p(($(),L(W,{to:"/especialidades",active:I(c).path==="/especialidades","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{avatar:""},{default:d(()=>[u(j,{name:"construction"})]),_:1}),u(S,null,{default:d(()=>i[5]||(i[5]=[M(" Especialidades ")])),_:1})]),_:1},8,["active"])),[[H]]),p(($(),L(W,{to:"/profissionais",active:I(c).path==="/profissionais","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{avatar:""},{default:d(()=>[u(j,{name:"engineering"})]),_:1}),u(S,null,{default:d(()=>i[6]||(i[6]=[M(" Profissionais ")])),_:1})]),_:1},8,["active"])),[[H]]),u(da,{label:"Pacientes",icon:"group",class:"default__border-radius main-layout__list-item"},{default:d(()=>[u(ye,null,{default:d(()=>[p(($(),L(W,{to:"/pacientes/ativos",active:I(c).path==="/pacientes/ativos","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,null,{default:d(()=>i[7]||(i[7]=[M(" Ativos ")])),_:1})]),_:1},8,["active"])),[[H]]),p(($(),L(W,{to:"/pacientes/interessados",active:I(c).path==="/pacientes/interessados","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{style:{"align-items":"flex-start","align-content":"baseline",gap:"10px"}},{default:d(()=>[se("div",ka,[i[9]||(i[9]=M(" Solicita\xE7\xF5es ")),u(qa,{rounded:""},{default:d(()=>i[8]||(i[8]=[M("2")])),_:1})])]),_:1})]),_:1},8,["active"])),[[H]])]),_:1})]),_:1}),p(($(),L(W,{to:"/agendamentos",active:I(c).path==="/agendamentos","active-class":"main-layout__list-item--active",class:"default__border-radius main-layout__list-item",clickable:""},{default:d(()=>[u(S,{avatar:""},{default:d(()=>[u(j,{name:"event_note"})]),_:1}),u(S,null,{default:d(()=>i[10]||(i[10]=[M(" Agendamentos ")])),_:1})]),_:1},8,["active"])),[[H]])]),_:1})]),_:1})]),_:1},8,["mini","modelValue"]),u(fa,null,{default:d(()=>[u(x)]),_:1})]),_:1})}}});export{La as default};
