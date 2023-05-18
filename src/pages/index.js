import * as React from "react"
import { dayli } from "../data/daylinews"
import { useState } from "react"
import { useEffect } from "react"

const IndexPage = () => {

  const [state, setState] = useState('')

  const getRandomObj = (obj) => {
    const keys = Object.keys(obj)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return obj[randomKey]
  }

  let randomValue = getRandomObj(dayli)

  const startDailyNews = (time) => {
    let now = new Date()

    let timeDiff = time.getTime() - now.getTime()
    if (timeDiff < 0) {
      timeDiff += 24 * 60 * 60 * 1000
    }

    setInterval(randomValue, timeDiff)
  }

  let time = new Date()
  time.setHours(16, 20, 59, 0)
  startDailyNews(time)
  setState(randomValue)
  
  console.log(state)

  return (
    <main className="bg-black h-screen">
      <div className="container mx-auto flex flex-col justify-center h-screen">
        <div className="flex flex-row justify-center items-center">
          {/* <p className="text-white">{state}</p> */}
          <p className="text-white text-center">Дорогие читатели! Наступила новая неделя, и пред нами открываются новые возможности и вызовы. Но не волнуйтесь, вам всё под силу! Сегодняшний совет - не забывайте о своих целях и мечтах. Независимо от того, какие задачи вы ставите перед собой, помните, что каждый шаг в направлении своих целей - это успех. Не бойтесь трудностей и не сдавайтесь на полпути - вы сможете преодолеть любые препятствия и достичь своих целей, если будете настойчивы и верите в себя. Помните, что только вы можете решить, как будет выглядеть ваша жизнь, и только вы можете сделать её яркой и насыщенной. Вперёд, к вершинам!</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center mb-10">
          <p className="text-white">Можем, умеем, практикуем</p>
        </div>
      </div>
    </main>
  )

}

export default IndexPage

export const Head = () => <title>Home Page</title>


