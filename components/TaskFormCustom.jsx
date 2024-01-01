'use client'

import { createTaskCustom } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? 'creating...' : 'create task'}
    </button>
  )
}

const initState = {
  message: null,
}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initState)
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('Error creating task')
      return
    }
    if (state.message) {
      toast.success('Task created')
      return
    }
  }, [state])
  return (
    <form action={formAction} className="mb-6">
      {/* {state.message ? <p className="mb-2">{state.message} </p> : null} */}
      <div className="w-full join">
        <input
          type="text"
          placeholder="type here"
          name="content"
          required
          className="input input-bordered join-item w-full"
        />
        <SubmitButton />
      </div>
    </form>
  )
}
export default TaskFormCustom
