import { dispatch, coreActions } from '@/store'
import { DialogOptions } from '@/types/utils'

export async function dialog(options: DialogOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    let payload = coreActions.setDialog({
      ...options,
      visible: true,
      resolvePromise: resolve,
      rejectPromise: reject
    })

    dispatch(payload)
  })
}

export function loader(visible: boolean, text?: string): void {
  let payload = coreActions.setLoader({
    visible,
    text: text || 'rendering...'
  })

  dispatch(payload)
}

export function develop(): void {
  dialog({
    title: 'Coming soon',
    message: 'This feature is not available.'
  })
}
