import { Notify } from 'quasar'

export function showNotification (message : string, position: any, color: string) : void {
  Notify.create({
    message,
    color,
    position
  })
}
