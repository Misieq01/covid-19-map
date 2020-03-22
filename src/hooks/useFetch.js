import {useEffect} from 'react'
import {fetchData} from '../store/actions'
import {useDispatch} from 'react-redux'

export const useFetchData = () =>{
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(fetchData())
   },[dispatch])
}