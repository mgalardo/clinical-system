import{c as _,r as E,az as P,av as A,aw as B,t as q,h as k,d as I,g as R,Z as V,ak as C,v as D,ai as $,bb as j,A as w,D as O,E as Q,F as z,aH as H}from"./index.7de34237.js";var K=_({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(a,{slots:d,emit:c}){const m=R(),r=E(null);let i=0;const u=[];function v(e){const s=typeof e=="boolean"?e:a.noErrorFocus!==!0,f=++i,x=(t,o)=>{c(`validation${t===!0?"Success":"Error"}`,o)},S=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(a.greedy===!0?Promise.all(u.map(S)).then(t=>t.filter(o=>o.valid!==!0)):u.reduce((t,o)=>t.then(()=>S(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===i&&x(!0),!0;if(f===i){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),x(!1,o),s===!0){const g=t.find(({comp:F})=>typeof F.focus=="function"&&V(F.$)===!1);g!==void 0&&g.comp.focus()}}return!1})}function b(){i++,u.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&C(e);const s=i+1;v().then(f=>{s===i&&f===!0&&(a.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function h(e){e!==void 0&&C(e),c("reset"),D(()=>{b(),a.autofocus===!0&&a.noResetFocus!==!0&&l()})}function l(){$(()=>{if(r.value===null)return;const e=r.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||r.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||r.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(r.value.querySelectorAll("[tabindex]"),s=>s.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}P(j,{bindComponent(e){u.push(e)},unbindComponent(e){const s=u.indexOf(e);s!==-1&&u.splice(s,1)}});let p=!1;return A(()=>{p=!0}),B(()=>{p===!0&&a.autofocus===!0&&l()}),q(()=>{a.autofocus===!0&&l()}),Object.assign(m.proxy,{validate:v,resetValidation:b,submit:y,reset:h,focus:l,getValidationComponents:()=>u}),()=>k("form",{class:"q-form",ref:r,onSubmit:y,onReset:h},I(d.default))}});const Z=w({__name:"Form",emits:["submit"],setup(a,{emit:d}){const c=d;function m(){c("submit")}return(r,i)=>(O(),Q(K,{onSubmit:m},{default:z(()=>[H(r.$slots,"default")]),_:3}))}});export{Z as _};
