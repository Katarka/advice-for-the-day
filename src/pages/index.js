import * as React from "react"
import { dayli } from "../data/daylinews"
import { useState } from "react"
import { useEffect } from "react"

const getRandomObj = (obj) => {
  let keys = Object.keys(obj)
  return obj[keys[keys.length * Math.random() << 0]]
}

let randomValue = getRandomObj(dayli)

const startDailyNews = (time) => {
  let now = new Date()

  let timeDiff = time.getTime() - now.getTime()
  if(timeDiff < 0) {
    timeDiff += 24 * 60 * 60 * 1000
  }

  setInterval(randomValue, timeDiff)
}

let time = new Date()
time.setHours(12, 0, 0, 0)

const IndexPage = () => {

  const [currentState, setCurrentState] = useState('')

  useEffect(() => {
    return setCurrentState(startDailyNews(time))
  }, [])

  return (
    <main className="bg-black h-screen">
      <div className="container mx-auto flex flex-col justify-center h-screen">
        <div className="flex flex-row justify-center items-center">
            <p className="text-white">{currentState}</p>
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
