import{Q as i}from"./QImg.3d391c19.js";import{Q as f}from"./QPage.427b77fd.js";import{_ as d}from"./TextInput.c419ea0d.js";import{_ as v}from"./Button.961de4f0.js";import{G as w,r as n,bp as b,I as y,J as m,K as h,L as _,P as s,M as e,aE as x,aG as V}from"./index.83b5ee12.js";const E={class:"login-page__left"},L={class:"login-page__logos"},P={class:"login-page__right"},k={class:"login-page__container default__box-shadow default__border-radius"},B={key:0,class:"login-page__error"},I=w({name:"LoginPage",__name:"LoginPage",setup(C){const a=n({email:"",password:""}),l=n(!1),t=n(!1),p=b();function g(u){u.preventDefault(),l.value=!0,t.value=!1,a.value.email==="emailteste@gmail.com"&&a.value.password==="123"?setTimeout(()=>{l.value=!1,p.push("/")},2e3):setTimeout(()=>{l.value=!1,t.value=!0},2e3)}return(u,o)=>{const c=y("Form");return m(),h(f,{class:"login-page row justify-evenly"},{default:_(()=>[s("div",E,[s("div",L,[e(i,{width:"200px",src:"ilumiare.png"}),e(i,{width:"200px",src:"brincaris.png"})]),e(i,{width:"400px",src:"bg.png"})]),s("div",P,[s("div",k,[e(c,{onSubmit:g,class:"login-page__form"},{default:_(()=>[o[2]||(o[2]=s("div",{class:"login-page__message"},"Fa\xE7a seu Login",-1)),e(d,{required:"",type:"email",modelValue:a.value.email,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value.email=r),dense:!0,label:"Email"},null,8,["modelValue"]),e(d,{required:"",type:"password",modelValue:a.value.password,"onUpdate:modelValue":o[1]||(o[1]=r=>a.value.password=r),dense:!0,label:"Senha"},null,8,["modelValue"]),e(v,{loading:l.value,type:"submit",label:"Entrar",color:"primary"},null,8,["loading"]),t.value?(m(),x("div",B,"Email ou senha incorretos.")):V("",!0)]),_:1})])])]),_:1})}}});export{I as default};
