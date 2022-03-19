import React from 'react'
import useAsyncTask from '../../hooks/useAsyncTask'
function myApiRequest(data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10
      if(rnd <= 5) {
        resolve(`⏰${data}`) 
      } else {
        reject(new Error('💦'))
      }
    }, 2000)
  })
}
let a = 1
console.log(a)
const Demo = () => {
  const task = useAsyncTask(async (data: string) => myApiRequest(data))
  return (
    <>
      <div>{task.status}</div>
      <button type='button' onClick={() => task.run("🍎")}></button>
    </>
  )
}