export type StorageProps = {
  readonly get: (key: string) => string | null | void;
  readonly set: (key: string, input: any) => void;
  readonly remove: (key: string) => void;
}

export type DialogOptions = {
  type?: 'alert' | 'confirm',
  title?: string,
  message: string,
  confirmLabel?: string,
  cancelLabel?: string
}
