import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import TodoItemProps from '../components/TodoItemType'
import TodoList from '../components/TodoList'


const Home: NextPage = () => {

  const [data, setData] = useState<Array<TodoItemProps>>(
    [
      {
        id: 0,
        content: '메모1'
      },
      {
        id: 1,
        content: '메모2'
      }
    ]
  )

  const saveTodoItem = (content: string): void => {
    setData(data.concat({ id: data.length+1, content: content }))
  }

  return (
    <>
      <Head>
        <title>DONGD TS TODO LIST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList data={data} fnSave={saveTodoItem}/>
      </main>

      <footer>
        푸터
      </footer>
    </>
  )
}

export default Home
