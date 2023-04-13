'use client'

import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from './Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => Promise<void> | void
  title?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen)
  useEffect(() => setShowModal(isOpen), [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) return
    setShowModal(false)
    setTimeout(() => onClose(), 300)
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) return
    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return
    secondaryAction()
  }, [secondaryAction, disabled])

  if (!isOpen) return null

  return (
    <div
      onMouseDown={handleClose}
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden 
        bg-neutral-800/70 outline-none backdrop-blur-xs focus:outline-none'>
      <div
        onMouseDown={e => e.stopPropagation()}
        className='relative mx-auto my-6 h-full w-full outline-none
          md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5 '>
        <section
          aria-label='Modal Content'
          className={`translate h-full duration-300
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className='translate relative flex h-full w-full flex-col rounded-lg border-0 
              bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto'>
            <div aria-label='Modal Header' className='relative flex items-center justify-center rounded-t border-b-[1px] p-6'>
              <button className='absolute left-9 border-0 p-1 transition hover:opacity-70' onClick={handleClose}>
                <IoMdClose size={18} />
              </button>
              <h1 className='text-lg font-semibold'>{title}</h1>
            </div>
            <div aria-label='Modal Body' className='relative flex-auto p-6'>
              {children}
            </div>
            <div aria-label='Modal Footer' className='flex flex-col gap-2 p-6'>
              <div className='flex w-full flex-row items-center gap-4'>
                {secondaryAction && secondaryActionLabel && (
                  <Button disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} outline />
                )}
                <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
              </div>
              {footer}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Modal
