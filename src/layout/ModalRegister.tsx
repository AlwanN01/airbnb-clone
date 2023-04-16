'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { useModalRegister } from '@/hooks/useModalRegister'
import Modal from '@/components/Modal'
import Heading from './components/Heading'
import Input from '@/components/Input'

export function ModalRegister() {
  const { isLoading, isOpen, setIsOpen, onSubmit } = useModalRegister.use('isLoading', 'isOpen', 'setIsOpen', 'onSubmit')
  return (
    <Modal disabled={isLoading} isOpen={isOpen} title='Register' actionLabel='Continue' onClose={() => setIsOpen(false)} onSubmit={onSubmit}>
      <ModalBody />
    </Modal>
  )
}
function ModalBody() {
  const { getInputProps } = useModalRegister.use('getInputProps', 'dataForm')
  return (
    <section className='grid gap-4'>
      <Heading title='Welcome to Airbnb' subTitle='Create an account' />
      <Input label='User Name' type='text' {...getInputProps('name')} autoComplete='name' />
      <Input label='Email' type='email' {...getInputProps('email')} autoComplete='on' />
      <Input label='Password' type='password' {...getInputProps('password')} />
    </section>
  )
}
