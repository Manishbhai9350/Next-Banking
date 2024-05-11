'use client'
import CountUp from 'react-countup'

const Counter = ({amount}:{amount:number}) => {
  return (
    <>
     <CountUp
     prefix='$'
     duration={2}
     end={amount} />
    </>
  )
}

export default Counter