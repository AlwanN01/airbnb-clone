import { InputProps } from '@/components/Input'
import { fieldForm, validate, objectMap } from '@/helpers'
import { createStore } from '@/libs/zustand'
import axios from 'axios'
import { toast } from 'react-hot-toast'

export const initstate = {
  dataForm: {
    name: fieldForm({ validation: /^[a-zA-Z\d]{5,20}$/, errMsg: 'String or Number contain min 5 & max 20 character' }),
    email: fieldForm({ validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errMsg: 'Invalid Email' }),
    password: fieldForm({
      validation: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])\S{7,15}$/,
      errMsg: 'atleast: 1 symbol | 1 lowercase | 1 uppercase and 7-5 char'
    })
  },
  isOpen: false,
  isLoading: false,
  error: null as unknown,
  refbnb: null as HTMLDivElement | null
}
type Key = keyof typeof initstate.dataForm
export const useModalRegister = createStore(initstate, (set, get) => ({
  getInputProps: (key: Key): InputProps => ({
    value: get().dataForm[key].value,
    errMsg: get().dataForm[key].errMsg,
    isError: get().dataForm[key].isError,
    onChange: e => set(state => void (state.dataForm[key].value = e.target.value)),
    onFocus: () => set(state => void (state.dataForm[key].isError = false)),
    onBlur: e => {
      const isValid = get().dataForm[key].validation.test(e.target.value)
      if (!isValid) set(state => void (state.dataForm[key].isError = true))
    }
  }),
  onSubmit: async () => {
    set({ isLoading: true })
    const ref = get().refbnb
    if (ref) ref.style.color = 'red'
    try {
      const form = get().dataForm
      validate(form, key => set(state => void (state.dataForm[key as Key].isError = true)))
      const data = objectMap(form, val => val.value)
      await axios.post('/api/register', data)
    } catch (error) {
      if (error instanceof Error) toast.error(error.message)
      set({ error })
    } finally {
      set({ isLoading: false })
    }
  }
}))
