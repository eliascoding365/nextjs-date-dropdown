'use client'
import { useState } from "react";
import { DateDropdown } from "./DateDropdown";


export function Form (){
  const [date , setDate] = useState({
    day: '',
    month: '',
    year: '',
    birth: '',
  })
  const handleData = () =>{
    const { day, month, year } = date
    const dateConcatenada = `${day}/${month}/${year}`
    setDate(prevDate =>({
      ...prevDate,
      birth: dateConcatenada
    })); console.log(dateConcatenada)
  }
  return (
    <form>
      <DateDropdown
      getData={handleData}
      //dateDropdownValue =
      />
    </form>
  )
}