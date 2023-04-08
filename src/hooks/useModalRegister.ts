import { createStore } from '@/libs/zustand'
import axios from 'axios'
import { useEffect } from 'react'
export const initstate = {
  dataForm: { name: '', email: '', password: '' },
  isOpen: false,
  isLoading: false,
  error: null as any,
  refbnb: null as HTMLDivElement | null
}
type Key = keyof typeof initstate.dataForm
export const useModalRegister = createStore(initstate, (set, get) => ({
  setDataForm: (e: React.ChangeEvent<HTMLInputElement>) => (key: Key) => set(state => void (state.dataForm[key] = e.target.value)),
  onSubmit: async () => {
    set({ isLoading: true, error: null })
    const ref = get().refbnb
    if (ref) ref.style.color = 'red'
    try {
      await axios.post('/api/register', get().dataForm)
    } catch (error) {
      console.log(error)
      set({ error })
    } finally {
      set({ isLoading: false })
    }
  }
}))
