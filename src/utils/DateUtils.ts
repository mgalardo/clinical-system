export function getNowDate () {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const date = String(today.getDate()).padStart(2, '0')
  // Formatando no formato year/month/date
  const formattedDate = `${year}/${month}/${date}`
  return formattedDate
}

export function formatToUsDate (date : string) {
  const today = new Date(date)
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  // Formatando no formato year/month/date
  const formattedDate = `${year}/${month}/${day}`
  return formattedDate
}

export const getLocale = {
  days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
  daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
  months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
  monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
  firstDayOfWeek: 1,
  format24h: true,
  pluralDay: 'dias'
}

export function getHour () {
  const agora = new Date()

  const horas = String(agora.getHours()).padStart(2, '0')

  return parseInt(horas)
}

export function getFormattedHour () {
  const agora = new Date()

  const horas = String(agora.getHours()).padStart(2, '0')
  const minutos = String(agora.getMinutes()).padStart(2, '0')
  const segundos = String(agora.getSeconds()).padStart(2, '0')

  const horaAtual = `${horas}:${minutos}:${segundos}`

  return horaAtual
}
