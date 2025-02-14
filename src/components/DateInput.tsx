import { useState } from "react";
import { motion } from "framer-motion";

interface DateInputProps {
  setDate: (date: string) => void;
  setStep: (step: number) => void;
}

const DateInput: React.FC<DateInputProps> = ({ setDate, setStep }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleNextStep = () => {
    if (inputValue === "180125") {
      setDate(inputValue);
      setStep(2);
    } else {
      alert("Input number salah. Silakan coba lagi.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold mb-4">💖 Masukkan Nomor Jadian</h2>
      <motion.div className="flex flex-col items-center gap-8">
        <motion.div className="flex flex-col items-center"> 
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 border rounded mb-4"
          />
          <button
            onClick={handleNextStep}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg"
          >
            Lanjut
          </button>
        </motion.div>
        <p className="text-xs text-gray-300">Masa lupaa sihh, Kalau lupa mahh parahh sihhhh</p>
      </motion.div>
    </motion.div>
  );
};

export default DateInput;