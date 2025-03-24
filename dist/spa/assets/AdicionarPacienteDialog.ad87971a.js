import{G as N,r as i,J as D,K as k,L as d,T as r,b6 as A,M as o,b8 as s,N as v,bi as S,P as u,S as t,b9 as y,f as p,ba as F}from"./index.1c916e56.js";import{a as V}from"./use-dialog-plugin-component.be6b318e.js";import{_ as P}from"./Form.c9aa95a5.js";import{_ as n}from"./TextInput.ec38a954.js";import{_ as Q}from"./SelectInput.24e8409c.js";import{_ as B,a as G}from"./Label.7c811b84.js";const _=N({__name:"AdicionarPacienteDialog",props:{client:Object},emits:[...V.emits],setup(f){const m=f,l=i(m.client?m.client:{}),{dialogRef:b,onDialogHide:g,onDialogOK:x,onDialogCancel:U}=V();function C(){x()}const q=i([{label:"Masculino",value:"masculino"},{label:"Feminino",value:"feminino"}]),E=i([{label:"Sem g\xEAnero",value:"sem_genero"},{label:"Feminino",value:"feminino"},{label:"Masculino",value:"masculino"},{label:"Neutro",value:"neutro"},{label:"Transg\xEAnero",value:"transgenero"},{label:"Intersex",value:"intersex"},{label:"Outros",value:"outros"}]);return(O,e)=>(D(),k(A,{ref_key:"dialogRef",ref:b,onHide:r(g)},{default:d(()=>[o(F,{class:"activate-client-dialog default__border-radius default__box-shadow"},{default:d(()=>[o(s,{class:"activate-client-dialog__title"},{default:d(()=>[v(" Ativar Cliente - "+S(l.value.nome),1)]),_:1}),o(s,null,{default:d(()=>[o(P,{onSubmit:C,class:"activate-client-dialog__form"},{default:d(()=>[e[22]||(e[22]=u("div",{class:"activate-client-dialog__form-title"},"Dados Pessoais",-1)),u("section",null,[o(n,{required:"",modelValue:l.value.nome,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.nome=a),label:"Nome"},null,8,["modelValue"]),o(n,{required:"",type:"date",modelValue:l.value.datadenascimento,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.datadenascimento=a),label:"Data de nascimento"},null,8,["modelValue"])]),u("section",null,[o(n,{mask:"###-###-###.##",required:"",modelValue:l.value.cpf,"onUpdate:modelValue":e[2]||(e[2]=a=>l.value.cpf=a),label:"CPF"},null,8,["modelValue"]),o(n,{required:"",modelValue:l.value.rg,"onUpdate:modelValue":e[3]||(e[3]=a=>l.value.rg=a),label:"RG"},null,8,["modelValue"]),o(n,{required:"",modelValue:l.value.orgaoexpeditor,"onUpdate:modelValue":e[4]||(e[4]=a=>l.value.orgaoexpeditor=a),label:"Org\xE3o Expedidor do RG"},null,8,["modelValue"])]),u("section",null,[u("div",null,[o(B,null,{default:d(()=>e[21]||(e[21]=[v("Sexo")])),_:1}),o(G,{inline:"",label:"Sexo",required:"",modelValue:l.value.sexo,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.sexo=a),options:q.value},null,8,["modelValue","options"])]),o(Q,{modelValue:l.value.genero,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.genero=a),required:"",options:E.value,label:"G\xEAnero"},null,8,["modelValue","options"])]),u("section",null,[o(n,{modelValue:l.value.identificacao,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.identificacao=a),label:"N\xFAmero de identifica\xE7\xE3o"},null,8,["modelValue"]),o(n,{modelValue:l.value.controle,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.controle=a),label:"N\xFAmero de controle"},null,8,["modelValue"])]),o(n,{required:"",modelValue:l.value.nacionalidade,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.nacionalidade=a),label:"Nacionalidade"},null,8,["modelValue"]),o(t),e[23]||(e[23]=u("div",{class:"activate-client-dialog__form-title"},"Contato",-1)),u("section",null,[o(n,{modelValue:l.value.nomemae,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.nomemae=a),label:"Nome da m\xE3e"},null,8,["modelValue"]),o(n,{mask:"(##)#####-####",modelValue:l.value.telefonemae,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.telefonemae=a),label:"Telefone m\xE3e"},null,8,["modelValue"])]),u("section",null,[o(n,{modelValue:l.value.nomepai,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.nomepai=a),label:"Nome da pai"},null,8,["modelValue"]),o(n,{mask:"(##)#####-####",modelValue:l.value.telefonepai,"onUpdate:modelValue":e[13]||(e[13]=a=>l.value.telefonepai=a),label:"Telefone pai"},null,8,["modelValue"])]),o(t),e[24]||(e[24]=u("div",{class:"activate-client-dialog__form-title"},"Endere\xE7o",-1)),u("section",null,[o(n,{required:"",mask:"###-###-###.##",modelValue:l.value.cep,"onUpdate:modelValue":e[14]||(e[14]=a=>l.value.cep=a),label:"CEP"},null,8,["modelValue"]),o(n,{required:"",modelValue:l.value.endereco,"onUpdate:modelValue":e[15]||(e[15]=a=>l.value.endereco=a),label:"Endere\xE7o"},null,8,["modelValue"])]),u("section",null,[o(n,{required:"",modelValue:l.value.numero,"onUpdate:modelValue":e[16]||(e[16]=a=>l.value.numero=a),label:"N\xFAmero"},null,8,["modelValue"]),o(n,{required:"",modelValue:l.value.complemento,"onUpdate:modelValue":e[17]||(e[17]=a=>l.value.complemento=a),label:"Complemento"},null,8,["modelValue"])]),u("section",null,[o(n,{required:"",modelValue:l.value.bairro,"onUpdate:modelValue":e[18]||(e[18]=a=>l.value.bairro=a),label:"Bairro"},null,8,["modelValue"]),o(n,{required:"",modelValue:l.value.cidade,"onUpdate:modelValue":e[19]||(e[19]=a=>l.value.cidade=a),label:"Cidade"},null,8,["modelValue"])]),o(t),e[25]||(e[25]=u("div",{class:"activate-client-dialog__form-title"},"Financeiro",-1)),o(n,{required:"",modelValue:l.value.responsavel_financeiro,"onUpdate:modelValue":e[20]||(e[20]=a=>l.value.responsavel_financeiro=a),label:"Respons\xE1vel Financeiro"},null,8,["modelValue"])]),_:1})]),_:1}),o(y,{align:"right"},{default:d(()=>[o(p,{color:"primary",flat:"",unelevated:"",label:"Cancelar",onClick:r(U)},null,8,["onClick"]),o(p,{color:"primary",unelevated:"",label:"Confirmar",type:"submit"})]),_:1})]),_:1})]),_:1},8,["onHide"]))}});export{_};
