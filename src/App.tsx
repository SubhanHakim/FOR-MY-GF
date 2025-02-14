// import './App.css'

import { useState } from "react"
import Gallery from "./components/Gallery"
import { motion } from "framer-motion"
import DateInput from "./components/DateInput"
import LoveLetter from "./components/LoveLetter"
import Wishlist from "./components/Wishlist"


function App() {

  const [step, setStep] = useState(1)
  const [date, setDate] = useState("")

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center p-6 bg-pink-100">
      {step === 1 && <DateInput setDate={setDate} setStep={setStep} />}
      {step === 2 && <LoveLetter date={date} setStep={setStep} />}
      {step === 3 && <Gallery setStep={setStep} />}
      {step === 4 && <Wishlist />}
    </motion.div>
  )
}

export default App