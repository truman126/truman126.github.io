import { useInterval } from "react-use"
import styled , { keyframes } from 'styled-components'
import { useEffect, useState } from 'react';




function AnimatedTitle() {
  const titleArray = ["Developer", "Problem Solver", "Strong Researcher"]
  const [item, setItem] = useState(titleArray[0])
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)

  useInterval(
    () => {
    setItem(titleArray[0])
    setCount(count + 1)

    if (count == 1){
      setCount(2)
      setItem(titleArray[1])
    }
    else if (count == 2){
      setCount(0)
      setItem(titleArray[2])
    }
    }, play ? 6000 : null

  )
  useEffect(() => {
    
    const timer = setTimeout(() => {
      
      setItem(titleArray[1])
      setPlay(true)


    }, 6000)

    return () => clearTimeout(timer)
  }, [] )
  return (
    <Wrapper>{item}</Wrapper>
  );
}


const animation = keyframes` 
0% { opacity: 0; transform: translateY(100px)rotateX(30deg); filter: blur(10px);}
25% { opacity: 1; transform: translateY(0) ; filter: blur(0); }
75% { opacity: 1; transform: translateY(0); filter: blur(0); }
100% { opacity: 0; transform: translateY(100px) rotateX(30deg) ; filter: blur(10px);}
`
const Wrapper = styled.span`
  opacity:.3;
  display:inline-block;
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`


export default AnimatedTitle;
