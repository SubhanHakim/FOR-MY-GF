import * as motion from "motion/react-client";

interface LetterProps {
  setStep: (step: number) => void;
}

const letters = [
  {
    id: 1,
    text: "Seneng banget bisa berbagi cerita sama kamu. Semoga kita bisa terus barengan, hadapin apa aja sambil ketawa dan bahagia.",
  },
  {
    id: 2,
    text: "Setiap momen bareng kamu itu spesial. Aku pengen terus bikin kenangan seru sama kamu, sekarang, nanti, dan seterusnya.",
  },
  {
    id: 3,
    text: "Kamu itu bagian paling penting buat aku. Bareng-bareng, kita pasti bisa wujudin semua mimpi dan hadapin apa aja yang datang.",
  },
];

const Letter: React.FC<LetterProps> = ({ setStep }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">💌 Surat Untukmu</h2>

      {/* Loop Surat dengan Animasi Scroll */}
      {letters.map((letter, index) => (
        <LetterItem key={letter.id} letter={letter} index={index} />
      ))}

      {/* Tombol Next */}
      <button
        onClick={() => setStep(3)}
        className="mt-6 bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Lanjut ke Galeri 📸
      </button>
    </div>
  );
};

interface LetterItemProps {
  letter: { id: number; text: string };
  index: number;
}

function LetterItem({ letter, index }: LetterItemProps) {
  return (
    <motion.div
      className="relative bg-white shadow-lg rounded-lg p-6 text-left border-2 border-pink-300 my-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8, delay: index * 0.3 }}
    >
      <p className="text-lg text-gray-700">{letter.text}</p>
      <div className="mt-4 text-right text-pink-500 font-semibold">— Dari aku untuk kamu 💖</div>
    </motion.div>
  );
}

export default Letter;
