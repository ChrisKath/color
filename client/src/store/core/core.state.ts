import { CoreState } from './core.interface'

export const initialState: CoreState = {
  appVersion: 'v0.1-beta (Jan, 2021)',
  lang: 'en-US',
  loader: {
    status: true,
    text: 'rendering...'
  }
}
