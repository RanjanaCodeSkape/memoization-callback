import  { useMemo, useState } from 'react'

const MemoHook = () => {
    const[add, setAdd] = useState(0)
    const[minus , setMinus] = useState(100)
   const multiplication = useMemo( function multiply (){
    console.log("multiply function rendered")
    return add * 10
},[add])

// memoization value example :-
// function memoization (){
//   let cache = {}
//   return (value) => {
//     if(value in cache){
//       console.log("fetching from Cache")
//       return cache[value]
//     } else{
//       console.log("fetching from result")
//       let result =value + 20
//       cache[value] = result
//       return result
//     }
//   }
// }
// const memoizeValue = memoization()
// console.log(memoizeValue(20))
// console.log(memoizeValue(20))
  return (
    <>
    <div>
    <h1>
   Learning Memo  </h1>
   <h1>{multiplication}</h1><br/>
   <button onClick={() =>setAdd(add + 1)}>Addition</button><span>{add}</span><br/>
   <button onClick={() => setMinus(minus -1)}>SubStaction</button><span>{minus}</span>
   </div>
   </>
  )
}

export default MemoHook
