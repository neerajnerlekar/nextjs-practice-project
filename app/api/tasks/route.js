import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request) => {
  const tasks = await db.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return Response.json({
    status: 200,
    body: tasks,
  })
}

export const POST = async (request) => {
  const data = await request.json()
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  })
  return NextResponse.json({ status: 200, body: task })
}
