'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { useModalRegister } from '@/hooks/useModalRegister'
import Modal from '@/components/Modal'
function ModalRegister() {
  const { isLoading, isOpen } = useModalRegister.use('isLoading', 'isOpen')
  const { setIsOpen, onSubmit } = useModalRegister.useFunction()
  return <Modal disabled={isLoading} isOpen={isOpen} title='Register' actionLabel='Continue' onClose={() => setIsOpen(false)} onSubmit={onSubmit} />
}
export default ModalRegister
