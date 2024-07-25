import 'react-datepicker/dist/react-datepicker.css'

import DatePicker from 'react-datepicker'
import { useState } from 'react'

const App = () => {
  const [selectedDate, setStartDate] = useState<Date | null>(new Date())

  const subtractDays = (date: Date, days: number): Date => {
    const result = new Date(date)
    result.setDate(result.getDate() - days)
    return result
  }

  const adjustDays = (date: Date, days: number): Date => {
    const result = new Date(date)
    result.setDate(result.getDate() + days) // Додаємо або віднімаємо дні (від'ємні значення віднімуть дні)
    return result
  }

  const minDate = new Date(new Date().setDate(new Date().getDate() - 30))
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 90))

  const filterDate = (date: Date): boolean => {
    return date >= minDate && date <= maxDate
  }

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MM/yyyy"
      // filterDate={filterDate}
      // minDate={subtractDays(new Date(), 30)}
      // maxDate={adjustDays(new Date(), 90)}
      isClearable
      // showYearDropdown
    />
  )
}

export default App
