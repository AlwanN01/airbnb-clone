type PropsForm = {
  value?: string
  validation?: RegExp
  isError?: boolean
  errMsg?: string
  required?: boolean
}
export const fieldForm = ({ value, isError, errMsg, validation, required }: PropsForm) => ({
  value: value ?? '',
  validation: validation ?? (required ? /[\s\S]+/ : /.*/),
  isError: isError ?? false,
  errMsg: errMsg ?? (required ? 'Field is Required' : 'Invalid Type')
})

export const validate = (form: { [key: string]: PropsForm }, callBack?: (key: string) => any) => {
  let invalid = false
  for (const key in form) {
    const value = form[key].value!
    const regex = form[key].validation!
    if (!regex.test(value)) {
      callBack && callBack(key)
      invalid = true
    }
  }
  if (invalid) throw new Error('Invalid fields value')
}
