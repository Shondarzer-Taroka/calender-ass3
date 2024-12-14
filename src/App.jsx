
import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Calendar } from './components/ui/calendar'

function App() {
  const [date, setDate] = useState(new Date())
console.log(date);

  return (
    <>
   <Button>Click me</Button>
   <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </>
  )
}

export default App
