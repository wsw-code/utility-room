import { useEffect, useState } from 'react';
import axios from 'axios';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryClient } from './main'

import './App.css';



const getTodos = (data) => {



  return axios({
    url: '/api/get',
    method: 'get'
  }).then(res => {
    if (res.data.code === 0) {
      return res.data.data as { name: string }
    }
    return { name: '' }
  })
}

const postTodos = (data) => {
  console.log('data', data)
  return axios({
    url: '/api/post',
    method: 'post',
    data: data
  }).then(res => {
    if (res.data.code === 0) {
      return res.data.data as { name: string }
    }
    return { name: '' }
  })
}

const getKey = (id?: string) => ['todos', id || 'id']


const Child = () => {

  const { data, isLoading, ...rest } = useQuery({ queryKey: getKey(), queryFn: getTodos })



  const mutate = useMutation({
    mutationFn: postTodos,
    onMutate: (variables) => {
      variables.b = 2
      console.log('variables', variables)

      return { id: 1 }
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log('error')
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log('context', context)
      console.log('success', data)

    },
    onSettled: async (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log('onSettled')
    },
  })

  return (
    <div>
      <div>
        Child-{data?.name}
      </div>
      <div>
        <button onClick={() => {
          mutate.mutate({ a: 2 })

          // queryClient.setQueryData(getKey(), (pre) => {

          //   return { name: 'wsw' }
          // })

        }} >执行</button>
      </div>
    </div>
  )
}


const Child2 = () => {

  const { data, isLoading } = useQuery({ queryKey: getKey(), queryFn: getTodos });

  const queryClient = useQueryClient()

  console.log('渲染')

  return (
    <div>
      <div onClick={() => {
        queryClient.invalidateQueries({ queryKey: getKey(1) })
      }}>
        刷新
      </div>
      Child2-{data?.name}
    </div>
  )
}

function App() {





  return (
    <div>
      {/* <Child /> */}
      <Child2 />
    </div>
  )
}




const App2 = () => {

  const [page, setPage] = useState(1)
  const { isInitialLoading, isLoading, isError, data, error, refetch, isFetching, status, isPreviousData } =
    useQuery({
      queryKey: ['todos2', page],
      queryFn: postTodos,
      // enabled: false,
      // keepPreviousData: true,
      placeholderData: { name: 'wsw2' }
    })

  console.log('isLoading', isLoading);

  console.log('isPreviousData', isPreviousData)

  return (
    <div>
      <button onClick={() => refetch()}>Fetch Todos</button>
      <div>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>
      </div>
      <div>status:{status}</div>
      {data ? (
        <>
          <ul>
            {data.name}
          </ul>
        </>
      ) : isError ? (
        <span>Error: {error.message}</span>
      ) : isInitialLoading ? (
        <span>Loading...</span>
      ) : (
        <span>Not ready ...</span>
      )}

      <div>{isFetching ? 'Fetching...' : null}</div>
    </div>
  )

}


export default App
