'use server'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const createTask = async (formData) => {
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content,
    },
  })
  revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const content = formData.get('content')
  const Task = z.object({
    content: z.string().min(2),
  })
  try {
    Task.parse({ content })
    await prisma.task.create({
      data: {
        content,
      },
    })
    revalidatePath('/tasks')
    return { message: 'success' }
  } catch (error) {
    return { message: 'error' }
  }
}

export const deleteTask = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const id = formData.get('id')
  const Delete = z.object({
    id: z.string().uuid(),
  })
  try {
    Delete.parse({ id })
    await prisma.task.delete({
      where: {
        id: id,
      },
    })
    revalidatePath('/tasks')
    return { message: 'success' }
  } catch (error) {
    console.log(error)
    return { message: 'error' }
  }
}

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id: id,
    },
  })
}

export const editTask = async (formData) => {
  const id = formData.get('id')
  const content = formData.get('content')
  const completed = formData.get('completed')
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      content,
      completed: completed === 'on' ? true : false,
    },
  })
  redirect('/tasks')
}
