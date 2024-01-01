import prisma from '@/utils/db'

const prismaHandlers = async () => {
  console.log('prismaHandlers')
  // await prisma.task.create({
  //   data: {
  //     content: 'Learn Prisma',
  //   },
  // })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return allTasks
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers()
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
  }

  return (
    <div>
      <h1 className="text-7xl">Prisma Example</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2 className="text-3xl">{task.content}</h2>
          <p className="text-gray-600">{task.createdAt.toString()}</p>
        </div>
      ))}
    </div>
  )
}
export default PrismaExample
