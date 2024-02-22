'use client'
import { useState } from "react"



export function DateDropdownDay() {
  const [day,setDay] = useState({
    day: ''
  });

  return (
    <div>
      <select name="day" >
        <option value="">Day</option>
        {/* Options for days */}
        {Array.from({ length: 31 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
      </select>
    </div>
  )
}