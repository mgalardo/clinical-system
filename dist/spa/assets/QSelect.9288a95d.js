import{ar as Et,r as R,a as f,w as me,C as J,au as Rt,aH as Lt,av as Tt,aw as Ht,l as vt,h as y,i as je,c as Qe,aV as Ue,aW as mt,aX as St,aY as ht,v as Dt,aI as Pt,y as $t,aJ as Nt,E as Kt,Q as Be,aZ as jt,V as Qt,ak as ne,a_ as Ut,a$ as Wt,b0 as rt,b1 as ke,b2 as Xt,b3 as Yt,a0 as $e,b4 as Jt,s as ve,$ as Zt,b5 as Gt,b6 as el,q as tl}from"./index.1c916e56.js";import{n as ct,Q as ll,c as ul,d as nl,a as il}from"./format.36b1d5ff.js";let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const r=document.createElement("div");Object.assign(r.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(r),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const K=1e3,ol=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,al=window.getComputedStyle(document.body).overflowAnchor===void 0?Et:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const a=e.children||[];gt.call(a,O=>O.dataset&&O.dataset.qVsAnchor!==void 0).forEach(O=>{delete O.dataset.qVsAnchor});const d=a[r];d&&d.dataset&&(d.dataset.qVsAnchor="")}))};function Se(e,r){return e+r}function Ne(e,r,a,d,O,o,F,b){const g=e===window?document.scrollingElement||document.documentElement:e,z=O===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-b,scrollMaxSize:0,offsetStart:-F,offsetEnd:-b};if(O===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=g.scrollLeft,c.scrollViewSize+=g.clientWidth),c.scrollMaxSize=g.scrollWidth,o===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=g.scrollTop,c.scrollViewSize+=g.clientHeight),c.scrollMaxSize=g.scrollHeight),a!==null)for(let w=a.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=w[z]);if(d!==null)for(let w=d.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=w[z]);if(r!==e){const w=g.getBoundingClientRect(),C=r.getBoundingClientRect();O===!0?(c.offsetStart+=C.left-w.left,c.offsetEnd-=C.width):(c.offsetStart+=C.top-w.top,c.offsetEnd-=C.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function st(e,r,a,d){r==="end"&&(r=(e===window?document.body:e)[a===!0?"scrollWidth":"scrollHeight"]),e===window?a===!0?(d===!0&&(r=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):a===!0?(d===!0&&(r=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function xe(e,r,a,d){if(a>=d)return 0;const O=r.length,o=Math.floor(a/K),F=Math.floor((d-1)/K)+1;let b=e.slice(o,F).reduce(Se,0);return a%K!==0&&(b-=r.slice(o*K,a).reduce(Se,0)),d%K!==0&&d!==O&&(b-=r.slice(d,F*K).reduce(Se,0)),b}const yt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},hl=Object.keys(yt),dt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...yt};function rl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:a,virtualScrollItemSizeComputed:d}){const O=je(),{props:o,emit:F,proxy:b}=O,{$q:g}=b;let z,c,w,C=[],k;const A=R(0),H=R(0),s=R({}),D=R(null),W=R(null),T=R(null),_=R({from:0,to:0}),pe=f(()=>o.tableColspan!==void 0?o.tableColspan:100);d===void 0&&(d=f(()=>o.virtualScrollItemSize));const M=f(()=>d.value+";"+o.virtualScrollHorizontal),X=f(()=>M.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);me(X,()=>{j()}),me(M,Z);function Z(){ie(c,!0)}function he(l){ie(l===void 0?c:l)}function G(l,i){const m=r();if(m==null||m.nodeType===8)return;const q=Ne(m,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);w!==q.scrollViewSize&&j(q.scrollViewSize),P(m,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,ol.indexOf(i)!==-1?i:c!==-1&&l>c?"end":"start")}function qe(){const l=r();if(l==null||l.nodeType===8)return;const i=Ne(l,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),m=e.value-1,q=i.scrollMaxSize-i.offsetStart-i.offsetEnd-H.value;if(z===i.scrollStart)return;if(i.scrollMaxSize<=0){P(l,i,0,0);return}w!==i.scrollViewSize&&j(i.scrollViewSize),ge(_.value.from);const B=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(k[m],i.scrollViewSize/2));if(B>0&&Math.ceil(i.scrollStart)>=B){P(l,i,m,i.scrollMaxSize-i.offsetEnd-C.reduce(Se,0));return}let V=0,h=i.scrollStart-i.offsetStart,E=h;if(h<=q&&h+i.scrollViewSize>=A.value)h-=A.value,V=_.value.from,E=h;else for(let S=0;h>=C[S]&&V<m;S++)h-=C[S],V+=K;for(;h>0&&V<m;)h-=k[V],h>-i.scrollViewSize?(V++,E=h):E=k[V]+h;P(l,i,V,E)}function P(l,i,m,q,B){const V=typeof B=="string"&&B.indexOf("-force")!==-1,h=V===!0?B.replace("-force",""):B,E=h!==void 0?h:"start";let S=Math.max(0,m-s.value[E]),$=S+s.value.total;$>e.value&&($=e.value,S=Math.max(0,$-s.value.total)),z=i.scrollStart;const Y=S!==_.value.from||$!==_.value.to;if(Y===!1&&h===void 0){ye(m);return}const{activeElement:ze}=document,Q=T.value;Y===!0&&Q!==null&&Q!==ze&&Q.contains(ze)===!0&&(Q.addEventListener("focusout",Ae),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",Ae)})),al(Q,m-S);const Ie=h!==void 0?k.slice(S,m).reduce(Se,0):0;if(Y===!0){const ee=$>=_.value.from&&S<=_.value.to?_.value.to:$;_.value={from:S,to:ee},A.value=xe(C,k,0,S),H.value=xe(C,k,$,e.value),requestAnimationFrame(()=>{_.value.to!==$&&z===i.scrollStart&&(_.value={from:_.value.from,to:$},H.value=xe(C,k,$,e.value))})}requestAnimationFrame(()=>{if(z!==i.scrollStart)return;Y===!0&&ge(S);const ee=k.slice(S,m).reduce(Se,0),te=ee+i.offsetStart+A.value,Oe=te+k[m];let we=te+q;if(h!==void 0){const Le=ee-Ie,Ve=i.scrollStart+Le;we=V!==!0&&Ve<te&&Oe<Ve+i.scrollViewSize?Ve:h==="end"?Oe-i.scrollViewSize:te-(h==="start"?0:Math.round((i.scrollViewSize-k[m])/2))}z=we,st(l,we,o.virtualScrollHorizontal,g.lang.rtl),ye(m)})}function ge(l){const i=T.value;if(i){const m=gt.call(i.children,S=>S.classList&&S.classList.contains("q-virtual-scroll--skip")===!1),q=m.length,B=o.virtualScrollHorizontal===!0?S=>S.getBoundingClientRect().width:S=>S.offsetHeight;let V=l,h,E;for(let S=0;S<q;){for(h=B(m[S]),S++;S<q&&m[S].classList.contains("q-virtual-scroll--with-prev")===!0;)h+=B(m[S]),S++;E=h-k[V],E!==0&&(k[V]+=E,C[Math.floor(V/K)]+=E),V++}}}function Ae(){T.value!==null&&T.value!==void 0&&T.value.focus()}function ie(l,i){const m=1*d.value;(i===!0||Array.isArray(k)===!1)&&(k=[]);const q=k.length;k.length=e.value;for(let V=e.value-1;V>=q;V--)k[V]=m;const B=Math.floor((e.value-1)/K);C=[];for(let V=0;V<=B;V++){let h=0;const E=Math.min((V+1)*K,e.value);for(let S=V*K;S<E;S++)h+=k[S];C.push(h)}c=-1,z=void 0,A.value=xe(C,k,0,_.value.from),H.value=xe(C,k,_.value.to,e.value),l>=0?(ge(_.value.from),J(()=>{G(l)})):oe()}function j(l){if(l===void 0&&typeof window!="undefined"){const h=r();h!=null&&h.nodeType!==8&&(l=Ne(h,a(),D.value,W.value,o.virtualScrollHorizontal,g.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const i=parseFloat(o.virtualScrollSliceRatioBefore)||0,m=parseFloat(o.virtualScrollSliceRatioAfter)||0,q=1+i+m,B=l===void 0||l<=0?1:Math.ceil(l/d.value),V=Math.max(1,B,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/q));s.value={total:Math.ceil(V*q),start:Math.ceil(V*i),center:Math.ceil(V*(.5+i)),end:Math.ceil(V*(1+i)),view:B}}function Re(l,i){const m=o.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+m]:d.value+"px"};return[l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[y("tr",[y("td",{style:{[m]:`${A.value}px`,...q},colspan:pe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[m]:`${A.value}px`,...q}}),y(l,{class:"q-virtual-scroll__content",key:"content",ref:T,tabindex:-1},i.flat()),l==="tbody"?y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[y("tr",[y("td",{style:{[m]:`${H.value}px`,...q},colspan:pe.value})])]):y(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[m]:`${H.value}px`,...q}})]}function ye(l){c!==l&&(o.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:_.value.from,to:_.value.to-1,direction:l<c?"decrease":"increase",ref:b}),c=l)}j();const oe=Rt(qe,g.platform.is.ios===!0?120:35);Lt(()=>{j()});let be=!1;return Tt(()=>{be=!0}),Ht(()=>{if(be!==!0)return;const l=r();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?st(l,z,o.virtualScrollHorizontal,g.lang.rtl):G(c)}),vt(()=>{oe.cancel()}),Object.assign(b,{scrollTo:G,reset:Z,refresh:he}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:s,setVirtualScrollSize:j,onVirtualScrollEvt:oe,localResetVirtualScroll:ie,padVirtualScroll:Re,scrollTo:G,reset:Z,refresh:he}}var cl=Qe({name:"QField",inheritAttrs:!1,props:{...Ue,tag:{type:String,default:"label"}},emits:mt,setup(){return St(ht({tagProp:!0}))}});const sl={xs:8,sm:10,md:14,lg:20,xl:24};var dl=Qe({name:"QChip",props:{...Dt,...Pt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:a}){const{proxy:{$q:d}}=je(),O=$t(e,d),o=Nt(e,sl),F=f(()=>e.selected===!0||e.icon!==void 0),b=f(()=>e.selected===!0?e.iconSelected||d.iconSet.chip.selected:e.icon),g=f(()=>e.iconRemove||d.iconSet.chip.remove),z=f(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=f(()=>{const s=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(s?` text-${s} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(O.value===!0?" q-chip--dark q-dark":"")}),w=f(()=>{const s=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...s,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||d.lang.label.remove};return{chip:s,remove:D}});function C(s){s.keyCode===13&&k(s)}function k(s){e.disable||(a("update:selected",!e.selected),a("click",s))}function A(s){(s.keyCode===void 0||s.keyCode===13)&&(ne(s),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function H(){const s=[];z.value===!0&&s.push(y("div",{class:"q-focus-helper"})),F.value===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const D=e.label!==void 0?[y("div",{class:"ellipsis"},[e.label])]:void 0;return s.push(y("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},jt(r.default,D))),e.iconRight&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&s.push(y(Be,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...w.value.remove,onClick:A,onKeyup:A})),s}return()=>{if(e.modelValue===!1)return;const s={class:c.value,style:o.value};return z.value===!0&&Object.assign(s,w.value.chip,{onClick:k,onKeyup:C}),Kt("div",s,H(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Qt,e.ripple]])}}});const ft=e=>["add","add-unique","toggle"].includes(e),fl=".*+?^${}()|[]\\",vl=Object.keys(Ue);function Ke(e,r){if(typeof e=="function")return e;const a=e!==void 0?e:r;return d=>d!==null&&typeof d=="object"&&a in d?d[a]:d}var gl=Qe({name:"QSelect",inheritAttrs:!1,props:{...dt,...Ut,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:dt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...mt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:a}){const{proxy:d}=je(),{$q:O}=d,o=R(!1),F=R(!1),b=R(-1),g=R(""),z=R(!1),c=R(!1);let w=null,C=null,k,A,H,s=null,D,W,T,_;const pe=R(null),M=R(null),X=R(null),Z=R(null),he=R(null),G=Wt(e),qe=Jt(ut),P=f(()=>Array.isArray(e.options)?e.options.length:0),ge=f(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:ie,localResetVirtualScroll:j,padVirtualScroll:Re,onVirtualScrollEvt:ye,scrollTo:oe,setVirtualScrollSize:be}=rl({virtualScrollLength:P,getVirtualScrollTarget:Ct,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ge}),l=ht(),i=f(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,u=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&k!==void 0?k:[],v=u.map(p=>Vt(p,n));return e.modelValue===null&&t===!0?v.filter(p=>p!==null):v}return u}),m=f(()=>{const t={};return vl.forEach(u=>{const n=e[u];n!==void 0&&(t[u]=n)}),t}),q=f(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=f(()=>rt(i.value)),V=f(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),h=f(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=f(()=>P.value===0),S=f(()=>i.value.map(t=>N.value(t)).join(", ")),$=f(()=>e.displayValue!==void 0?e.displayValue:S.value),Y=f(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ze=f(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(Y.value))),Q=f(()=>l.focused.value===!0?e.tabindex:-1),Ie=f(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return b.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${b.value}`),t}),ee=f(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=f(()=>i.value.map((t,u)=>({index:u,opt:t,html:Y.value(t),selected:!0,removeAtIndex:wt,toggleOption:le,tabindex:Q.value}))),Oe=f(()=>{if(P.value===0)return[];const{from:t,to:u}=Ae.value;return e.options.slice(t,u).map((n,v)=>{const p=ae.value(n)===!0,x=He(n)===!0,L=t+v,I={clickable:!0,active:x,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":x===!0?"true":"false",id:`${l.targetUid.value}_${L}`,onClick:()=>{le(n)}};return p!==!0&&(b.value===L&&(I.focused=!0),O.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&re(L)})),{index:L,opt:n,html:Y.value(n),label:N.value(n),selected:I.active,focused:I.focused,toggleOption:le,setOptionIndex:re,itemProps:I}})}),we=f(()=>e.dropdownIcon!==void 0?e.dropdownIcon:O.iconSet.arrow.dropdown),Le=f(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=f(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),U=f(()=>Ke(e.optionValue,"value")),N=f(()=>Ke(e.optionLabel,"label")),ae=f(()=>Ke(e.optionDisable,"disable")),_e=f(()=>i.value.map(U.value)),bt=f(()=>{const t={onInput:ut,onChange:qe,onKeydown:et,onKeyup:Ze,onKeypress:Ge,onFocus:Ye,onClick(u){A===!0&&ve(u)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=qe,t});me(i,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&o.value!==!0||B.value!==!0)&&(H!==!0&&fe(),(F.value===!0||o.value===!0)&&ce(""))},{immediate:!0}),me(()=>e.fillInput,fe),me(o,De),me(P,Bt);function We(t){return e.emitValue===!0?U.value(t):t}function Te(t){if(t!==-1&&t<i.value.length)if(e.multiple===!0){const u=e.modelValue.slice();a("remove",{index:t,value:u.splice(t,1)[0]}),a("update:modelValue",u)}else a("update:modelValue",null)}function wt(t){Te(t),l.focus()}function Xe(t,u){const n=We(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(N.value(t),!0,!0),a("update:modelValue",n);return}if(i.value.length===0){a("add",{index:0,value:n}),a("update:modelValue",e.multiple===!0?[n]:n);return}if(u===!0&&He(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();a("add",{index:v.length,value:n}),v.push(n),a("update:modelValue",v)}function le(t,u){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const n=U.value(t);if(e.multiple!==!0){u!==!0&&(Ce(e.fillInput===!0?N.value(t):"",!0,!0),ue()),M.value!==null&&M.value.focus(),(i.value.length===0||ke(U.value(i.value[0]),n)!==!0)&&a("update:modelValue",e.emitValue===!0?n:t);return}if((A!==!0||z.value===!0)&&l.focus(),Ye(),i.value.length===0){const x=e.emitValue===!0?n:t;a("add",{index:0,value:x}),a("update:modelValue",e.multiple===!0?[x]:x);return}const v=e.modelValue.slice(),p=_e.value.findIndex(x=>ke(x,n));if(p!==-1)a("remove",{index:p,value:v.splice(p,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const x=e.emitValue===!0?n:t;a("add",{index:v.length,value:x}),v.push(x)}a("update:modelValue",v)}function re(t){if(O.platform.is.desktop!==!0)return;const u=t!==-1&&t<P.value?t:-1;b.value!==u&&(b.value=u)}function Me(t=1,u){if(o.value===!0){let n=b.value;do n=ct(n+t,-1,P.value-1);while(n!==-1&&n!==b.value&&ae.value(e.options[n])===!0);b.value!==n&&(re(n),oe(n),u!==!0&&e.useInput===!0&&e.fillInput===!0&&Fe(n>=0?N.value(e.options[n]):D,!0))}}function Vt(t,u){const n=v=>ke(U.value(v),t);return e.options.find(n)||u.find(n)||t}function He(t){const u=U.value(t);return _e.value.find(n=>ke(n,u))!==void 0}function Ye(t){e.useInput===!0&&M.value!==null&&(t===void 0||M.value===t.target&&t.target.value===S.value)&&M.value.select()}function Je(t){Zt(t,27)===!0&&o.value===!0&&(ve(t),ue(),fe()),a("keyup",t)}function Ze(t){const{value:u}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),fe(),typeof u=="string"&&u.length!==0){const n=u.toLocaleLowerCase(),v=x=>{const L=e.options.find(I=>String(x.value(I)).toLocaleLowerCase()===n);return L===void 0?!1:(i.value.indexOf(L)===-1?le(L):ue(),!0)},p=x=>{v(U)!==!0&&x!==!0&&v(N)!==!0&&ce(u,!0,()=>p(!0))};p()}else l.clearValue(t)}function Ge(t){a("keypress",t)}function et(t){if(a("keydown",t),Gt(t)===!0)return;const u=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(b.value!==-1||u===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&n===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&o.value===!1){ne(t),de();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&a("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ne(t),b.value=-1,Me(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ie.value!==void 0&&(ne(t),b.value=Math.max(-1,Math.min(P.value,b.value+(t.keyCode===33?-1:1)*ie.value.view)),Me(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ne(t),Me(t.keyCode===38?-1:1,e.multiple));const v=P.value;if((T===void 0||_<Date.now())&&(T=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||T.length!==0)){o.value!==!0&&de(t);const p=t.key.toLocaleLowerCase(),x=T.length===1&&T[0]===p;_=Date.now()+1500,x===!1&&(ne(t),T+=p);const L=new RegExp("^"+T.split("").map(Pe=>fl.indexOf(Pe)!==-1?"\\"+Pe:Pe).join(".*"),"i");let I=b.value;if(x===!0||I<0||L.test(N.value(e.options[I]))!==!0)do I=ct(I+1,-1,v-1);while(I!==b.value&&(ae.value(e.options[I])===!0||L.test(N.value(e.options[I]))!==!0));b.value!==I&&J(()=>{re(I),oe(I),I>=0&&e.useInput===!0&&e.fillInput===!0&&Fe(N.value(e.options[I]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||T!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&ne(t),b.value!==-1&&b.value<v){le(e.options[b.value]);return}if(u===!0){const p=(x,L)=>{if(L){if(ft(L)!==!0)return}else L=e.newValueMode;if(Ce("",e.multiple!==!0,!0),x==null)return;(L==="toggle"?le:Xe)(x,L==="add-unique"),e.multiple!==!0&&(M.value!==null&&M.value.focus(),ue())};if(e.onNewValue!==void 0?a("newValue",g.value,p):p(g.value),e.multiple!==!0)return}o.value===!0?se():l.innerLoading.value!==!0&&de()}}function tt(){return A===!0?he.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function Ct(){return tt()}function kt(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?te.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?te.value.map((t,u)=>y(dl,{key:"option-"+u,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(u)}},()=>y("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[y("span",{[ze.value===!0?"innerHTML":"textContent"]:$.value})]}function lt(){if(E.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:g.value}):void 0;const t=r.option!==void 0?r.option:n=>y(il,{key:n.index,...n.itemProps},()=>y(ul,()=>y(nl,()=>y("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let u=Re("div",Oe.value.map(t));return r["before-options"]!==void 0&&(u=r["before-options"]().concat(u)),tl(r["after-options"],u)}function xt(t,u){const n=u===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,v={ref:u===!0?M:void 0,key:"i_t",class:V.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...n,id:u===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...bt.value};return t!==!0&&A===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),y("input",v)}function ut(t){w!==null&&(clearTimeout(w),w=null),C!==null&&(clearTimeout(C),C=null),!(t&&t.target&&t.target.qComposing===!0)&&(Fe(t.target.value||""),H=!0,D=g.value,l.focused.value!==!0&&(A!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,ce(g.value)},e.inputDebounce)))}function Fe(t,u){g.value!==t&&(g.value=t,u===!0||e.inputDebounce===0||e.inputDebounce==="0"?a("inputValue",t):C=setTimeout(()=>{C=null,a("inputValue",t)},e.inputDebounce))}function Ce(t,u,n){H=n!==!0,e.useInput===!0&&(Fe(t,!0),(u===!0||n!==!0)&&(D=t),u!==!0&&ce(t))}function ce(t,u,n){if(e.onFilter===void 0||u!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?a("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&H!==!0&&t===N.value(i.value[0])&&(t="");const v=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);s!==null&&clearTimeout(s),s=v,a("filter",t,(p,x)=>{(u===!0||l.focused.value===!0)&&s===v&&(clearTimeout(s),typeof p=="function"&&p(),c.value=!1,J(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(u===!0?o.value===!0&&ue():o.value===!0?De(!0):o.value=!0),typeof x=="function"&&J(()=>{x(d)}),typeof n=="function"&&J(()=>{n(d)})}))},()=>{l.focused.value===!0&&s===v&&(clearTimeout(s),l.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function pt(){return y(ll,{ref:X,class:h.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:it,onBeforeHide:qt,onShow:At},lt)}function qt(t){ot(t),se()}function At(){be()}function zt(t){ve(t),M.value!==null&&M.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ve(t),J(()=>{z.value=!1})}function Ot(){const t=[y(cl,{class:`col-auto ${l.fieldClass.value}`,...m.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:zt,onBlur:It},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(y("div",{ref:he,class:h.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:$e,onScrollPassive:ye},lt())),y(el,{ref:Z,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:it,onBeforeHide:_t,onHide:Mt,onShow:Ft},()=>y("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function _t(t){ot(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Mt(t){ue(),l.focused.value===!1&&a("blur",t),fe()}function Ft(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&M.value!==null&&M.value!==t&&M.value.focus(),be()}function se(){F.value!==!0&&(b.value=-1,o.value===!0&&(o.value=!1),l.focused.value===!1&&(s!==null&&(clearTimeout(s),s=null),l.innerLoading.value===!0&&(a("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function de(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),F.value=!0,J(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ce(g.value):(E.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function ue(){F.value=!1,se()}function fe(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&N.value(i.value[0])||"",!0,!0)}function De(t){let u=-1;if(t===!0){if(i.value.length!==0){const n=U.value(i.value[0]);u=e.options.findIndex(v=>ke(U.value(v),n))}j(u)}re(u)}function Bt(t,u){o.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),J(()=>{o.value===!0&&l.innerLoading.value===!1&&(t>u?j():De(!0))}))}function nt(){F.value===!1&&X.value!==null&&X.value.updatePosition()}function it(t){t!==void 0&&ve(t),a("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ot(t){t!==void 0&&ve(t),a("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function at(){A=O.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),W=O.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Xt(at),Yt(nt),at(),vt(()=>{w!==null&&clearTimeout(w),C!==null&&clearTimeout(C)}),Object.assign(d,{showPopup:de,hidePopup:ue,removeAtIndex:Te,add:Xe,toggleOption:le,getOptionIndex:()=>b.value,setOptionIndex:re,moveOptionSelection:Me,filter:ce,updateMenuPosition:nt,updateInputValue:Ce,isOptionSelected:He,getEmittingOptionValue:We,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>U.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:f(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:pe,targetRef:M,hasValue:B,showPopup:de,floatingLabel:f(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||rt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||E.value!==!0||r["no-option"]!==void 0))return A===!0?Ot():pt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{fe(),se()})},onClick(t){if($e(t),A!==!0&&o.value===!0){se(),M.value!==null&&M.value.focus();return}de(t)}},getControl:t=>{const u=kt(),n=t===!0||F.value!==!0||A!==!0;if(e.useInput===!0)u.push(xt(t,n));else if(l.editable.value===!0){const p=n===!0?Ie.value:void 0;u.push(y("input",{ref:n===!0?M:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:$.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:et,onKeyup:Je,onKeypress:Ge})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&u.push(y("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(G.value!==void 0&&e.disable!==!0&&_e.value.length!==0){const p=_e.value.map(x=>y("option",{value:x,selected:!0}));u.push(y("select",{class:"hidden",name:G.value,multiple:e.multiple},p))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return y("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},u)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[y(Be,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:we.value})]:null}),St(l)}});export{gl as Q,rl as a,hl as c,dt as u};
