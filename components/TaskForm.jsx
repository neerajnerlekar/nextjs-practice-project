import { createTask } from '@/utils/actions'

const TaskForm = () => {
  return (
    <form action={createTask} className="mb-6">
      <div className="w-full join">
        <input
          type="text"
          placeholder="type here"
          name="content"
          required
          className="input input-bordered join-item w-full"
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  )
}
export default TaskForm
