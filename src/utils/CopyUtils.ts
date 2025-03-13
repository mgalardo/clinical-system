import { copyToClipboard } from 'quasar'
import { showNotification } from './NotificationUtil'

export function copyTextToClipboard (link : string) {
  copyToClipboard(link)
    .then(() => {
      showNotification('Link copiado para área de transferência', 'top', 'positive')
    })
    .catch(() => {
      showNotification('Erro ao copiar link', 'top', 'negative')
    })
}
