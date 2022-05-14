import { useState, useEffect } from 'react'

export const useFetch = ( url ) => {
  const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: false,
  });

  useEffect( () =>{
    setState({data: null, loading: true, error: false,  })
    fetch( url )
        .then( resp => resp.json())
            .then(resp => {
                setTimeout( () =>{
                    setState({
                        data: resp,
                        loading: false,
                        error: false,
                    })
                },4000)
            });
  },[url]);

  return state;
}
