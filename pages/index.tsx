import type { NextPage } from 'next'
import Head from 'next/head'
import TodoItemProps from '../components/TodoItemType'
import TodoList from '../components/TodoList'



const data: Array<TodoItemProps> = [
  {
    id: 0,
    content: '메모1'
  },
  {
    id: 1,
    content: '메모2'
  }
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DONGD TS TODO LIST</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList data={data}/>
      </main>

      <footer>
        푸터
      </footer>
    </>
  )
}

export default Home
