/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-02 03:03:52
 * @LastEditTime: 2023-01-02 03:29:43
 */
import { useState } from 'react'

import 'pjy-starport/dist/main.css'
import { Starport, FloatContainer } from 'pjy-starport'

import TheNav from './components/TheNav'
import TheImage from './components/TheImage'
import Info from './components/Info'

import Router from './router'
import imgs from './data'

function App() {

  return (
    <Starport>
      <div className='bg-white w-full text-[#374751] h-full'>
        <TheNav />
        <div h='full'>
          <Router />
        </div>
      </div>
      {/* FloatContainer组件用来包裹所有想要不被销毁的组件 */}
      <FloatContainer slot={() => <Info />} port='13' />
      {imgs.map((img, index) => {
        return (
          <FloatContainer
            key={index}
            slot={() => <TheImage src={img} />}
            port={index + 1 + ''}
          />
        )
      })}
    </Starport>
  )
}

export default App
