import{Q as p}from"./QPage.427b77fd.js";import{a as u,_ as f}from"./AdicionarPacienteDialog.33eded84.js";import{_ as x}from"./PageTitle.726b0bdc.js";import{_ as v}from"./Table.0f1aacd7.js";import{a1 as _,a3 as g,bk as b,G as E,r as s,J as h,K as w,L as r,M as c,N as C,P}from"./index.83b5ee12.js";import"./Label.2aab76b3.js";import"./TextInput.c419ea0d.js";import"./Button.961de4f0.js";import"./QItemLabel.5f4e151d.js";import"./format.ef5f6091.js";function k(a){const e=document.createElement("textarea");e.value=a,e.contentEditable="true",e.style.position="fixed";const o=()=>{};_(o),document.body.appendChild(e),e.focus(),e.select();const n=document.execCommand("copy");return e.remove(),g(o),n}function N(a){return navigator.clipboard!==void 0?navigator.clipboard.writeText(a):new Promise((e,o)=>{const n=k(a);n?e(!0):o(n)})}function l(a,e,o){b.create({message:a,color:o,position:e})}function T(a){N(a).then(()=>{l("Link copiado para \xE1rea de transfer\xEAncia","top","positive")}).catch(()=>{l("Erro ao copiar link","top","negative")})}const y={class:"default__box-shadow"},Q=E({name:"Pacientes",__name:"PacientesInteressados",setup(a){const e=s([{name:"nome",label:"Nome",align:"left",field:"nome"},{name:"idade",align:"center",label:"Data de Nascimento <span>Idade</span>",field:"idade"},{name:"telefone",align:"center",label:"Telefone Respons\xE1vel",field:"telefone"},{name:"periodo",align:"center",label:"Per\xEDodo",field:"periodo"},{name:"email",align:"left",label:"email",field:"email"},{name:"servicos",align:"center",label:"Servi\xE7os",field:"servicos"},{name:"actions_custom",align:"center",label:"A\xE7\xF5es",field:"actions_custom",actions:[{icon:"upgrade",title:"Ativar cliente",execute:d}]}]),o=s([{nome:"Joaquina Am\xE9lia",idade:"11/02/2018 <span>(7 anos, 1 meses e 0 dias)</span>",telefone:"(11)98647-2022",periodo:"Manh\xE3",email:"responsavel@gmail.com",servicos:"Artes Marciais",nomedacrianca:"Jo\xE3o Silva",datadenascimento:"2018-05-12",jafazacompanhamento:!0,acompanhamento:"Faz acompanhamento com fonoaudi\xF3logo h\xE1 1 ano",diagnostico:"tea",preocupacoes:"Dificuldade de comunica\xE7\xE3o e intera\xE7\xE3o social",nomemae:"Maria Silva",telefonemae:"(11) 98765-4321",nomepai:"Carlos Silva",telefonepai:"(11) 91234-5678",veiopor:"Indica\xE7\xE3o de um amigo"},{nome:"Fernando Torres",idade:"24/10/2008 <span>(16 anos, 3 meses e 0 dias)</span>",telefone:"(41)98789-3256",periodo:"Tarde",email:"responsavel2@gmail.com",servicos:"Psicopedagia"}]);function n(){T(window.location.origin+"/pacientes/primeiro-contato")}const m=u();function d(i){m.dialog({component:f,componentProps:{client:i}})}return(i,t)=>(h(),w(p,null,{default:r(()=>[c(x,{onClick:n,"add-button":!0,"add-button-label":"Gerar lista de interesse"},{default:r(()=>t[0]||(t[0]=[C("Pacientes Interessados")])),_:1}),P("section",y,[c(v,{rows:o.value,columns:e.value},null,8,["rows","columns"])])]),_:1}))}});export{Q as default};
