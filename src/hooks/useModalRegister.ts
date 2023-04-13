import objectMap from '@/helpers/objectMap'
import { createStore } from '@/libs/zustand'
import axios from 'axios'
export const initstate = {
  dataForm: {
    name: { value: '', validation: /^[a-zA-Z\d]{3,20}$/ }, //string & number & min3,max20
    email: { value: '', validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, //email
    password: { value: '', validation: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])\S{7,15}$/ } //atleast: 1 symbol | 1 lowercase | 1 uppercase and 7-5 char
  },
  isOpen: false,
  isLoading: false,
  error: null as unknown,
  refbnb: null as HTMLDivElement | null
}
type Key = keyof typeof initstate.dataForm
export const useModalRegister = createStore(initstate, (set, get) => ({
  setDataForm: (e: React.ChangeEvent<HTMLInputElement>) => (key: Key) => set(state => void (state.dataForm[key].value = e.target.value)),
  onSubmit: async () => {
    set({ isLoading: true, error: null })
    const ref = get().refbnb
    if (ref) ref.style.color = 'red'
    const data = objectMap(get().dataForm, (val, key, index) => val.value)
    console.log(data)
    try {
      await axios.post('/api/register', data)
    } catch (error) {
      console.log(error)
      set({ error })
    } finally {
      set({ isLoading: false })
    }
  }
}))
