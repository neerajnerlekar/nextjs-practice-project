'use client'

import { deleteTask } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const DeleteButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-error btn-xs" disabled={pending}>
      {pending ? 'deleting...' : 'delete'}
    </button>
  )
}

const initState = {
  message: null,
}

const DeleteForm = ({ id }) => {
  const [state, formAction] = useFormState(deleteTask, initState)
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('Error deleting task')
      return
    }
    if (state.message === 'success') {
      toast.success('Task deleted')
      return
    }
  }, [state])
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  )
}
export default DeleteForm
