import{Q as p}from"./QPage.477f3827.js";import{u}from"./use-dialog-plugin-component.be6b318e.js";import{_ as f}from"./PageTitle.0dce80ef.js";import{_ as x}from"./Table.486fea1f.js";import{ab as v,ad as _,bk as g,G as b,r as s,J as E,K as h,L as r,M as c,N as w,P as C}from"./index.1c916e56.js";import{_ as P}from"./AdicionarPacienteDialog.ad87971a.js";import"./Button.059cf228.js";import"./QList.cc04f5c7.js";import"./QSelect.9288a95d.js";import"./format.36b1d5ff.js";import"./Form.c9aa95a5.js";import"./TextInput.ec38a954.js";import"./SelectInput.24e8409c.js";import"./Label.7c811b84.js";function k(a){const e=document.createElement("textarea");e.value=a,e.contentEditable="true",e.style.position="fixed";const o=()=>{};v(o),document.body.appendChild(e),e.focus(),e.select();const n=document.execCommand("copy");return e.remove(),_(o),n}function N(a){return navigator.clipboard!==void 0?navigator.clipboard.writeText(a):new Promise((e,o)=>{const n=k(a);n?e(!0):o(n)})}function l(a,e,o){g.create({message:a,color:o,position:e})}function T(a){N(a).then(()=>{l("Link copiado para \xE1rea de transfer\xEAncia","top","positive")}).catch(()=>{l("Erro ao copiar link","top","negative")})}const y={class:"default__box-shadow"},G=b({name:"Pacientes",__name:"PacientesInteressados",setup(a){const e=s([{name:"nome",label:"Nome",align:"left",field:"nome"},{name:"idade",align:"center",label:"Data de Nascimento <span>Idade</span>",field:"idade"},{name:"telefone",align:"center",label:"Telefone Respons\xE1vel",field:"telefone"},{name:"periodo",align:"center",label:"Per\xEDodo",field:"periodo"},{name:"email",align:"left",label:"email",field:"email"},{name:"servicos",align:"center",label:"Servi\xE7os",field:"servicos"},{name:"actions_custom",align:"center",label:"A\xE7\xF5es",field:"actions_custom",actions:[{icon:"upgrade",title:"Ativar cliente",execute:d}]}]),o=s([{nome:"Joaquina Am\xE9lia",idade:"11/02/2018 <span>(7 anos, 1 meses e 0 dias)</span>",telefone:"(11)98647-2022",periodo:"Manh\xE3",email:"responsavel@gmail.com",servicos:"Artes Marciais",nomedacrianca:"Jo\xE3o Silva",datadenascimento:"2018-05-12",jafazacompanhamento:!0,acompanhamento:"Faz acompanhamento com fonoaudi\xF3logo h\xE1 1 ano",diagnostico:"tea",preocupacoes:"Dificuldade de comunica\xE7\xE3o e intera\xE7\xE3o social",nomemae:"Maria Silva",telefonemae:"(11) 98765-4321",nomepai:"Carlos Silva",telefonepai:"(11) 91234-5678",veiopor:"Indica\xE7\xE3o de um amigo"},{nome:"Fernando Torres",idade:"24/10/2008 <span>(16 anos, 3 meses e 0 dias)</span>",telefone:"(41)98789-3256",periodo:"Tarde",email:"responsavel2@gmail.com",servicos:"Psicopedagia"}]);function n(){T(window.location.origin+"/pacientes/primeiro-contato")}const m=u();function d(i){m.dialog({component:P,componentProps:{client:i}})}return(i,t)=>(E(),h(p,null,{default:r(()=>[c(f,{onClick:n,"add-button":!0,"add-button-label":"Gerar lista de interesse"},{default:r(()=>t[0]||(t[0]=[w("Pacientes Interessados")])),_:1}),C("section",y,[c(x,{rows:o.value,columns:e.value},null,8,["rows","columns"])])]),_:1}))}});export{G as default};
