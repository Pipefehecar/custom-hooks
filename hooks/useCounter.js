import {useState} from 'react'

export const useCounter = (inicial = 1) => {
const [counter, setCounter] = useState(inicial)
const incremento = ( ) => setCounter( counter + 1)

const decremento = ( ) => setCounter( Math.max(1, counter - 1))

const reset = () => setCounter( inicial )



return{
    incremento,
    decremento,
    reset,
    counter
}
}
