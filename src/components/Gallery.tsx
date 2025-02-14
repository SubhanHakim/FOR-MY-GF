import { useState } from "react";
import { motion } from "framer-motion";

interface Image {
  src: string;
  message: string;
}
interface GalleryProps {
  setStep: (step: number) => void;
}

const images: Image[] = [
  { src: "/assets/foto-1.jpg", message: "💇‍♂️ Momen pertama ditemenin potong rambut sama cewe" },
  { src: "/assets/foto-2.jpg", message: "📸 Foto ini abis fotsud anjayyy" },
  { src: "/assets/foto-3.jpg", message: "🌸 Ini juga sama abis fotsud, biar keliatan banyak" },
  { src: "/assets/foto-4.jpg", message: "😆 Ini abis maen sama temen pacarakuu" },
  { src: "/assets/foto-5.jpg", message: "💞 Ini kita double sama selingkuhan aku (Mario)" },
  { src: "/assets/foto-6.jpg", message: "🤔 Sama ini juga bingung blm ada foto lagi" },
  { src: "/assets/foto-7.jpg", message: "☕ Disini ngopi di kopitiam, seru ngobrol disini" },
  { src: "/assets/foto-8.jpg", message: "🎬 Ini nonton perayaan mati rasa, yang nangis Yulia bukan aku yah gaiss" },
  { src: "/assets/foto-9.jpg", message: "📸 Ini fotsud anjayyy, orang pertama yang ngajak aku fotsudd" },
  { src: "/assets/foto-10.JPG", message: "😍 Lucunyooooo inii" },
  { src: "/assets/foto-11.jpg", message: "🍛 Ini makan nasgor di AP, yang dimarahin ibu ibu hahahah" },
  { src: "/assets/foto-12.jpg", message: "💇‍♂️ Ini lagi nunggu potong rambutt" },
];

const Gallery: React.FC<GalleryProps> = ({ setStep }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto p-6 text-center">
      <motion.h2 
        className="text-3xl font-extrabold text-pink-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📸 Perjalanan Cinta Kita 💕
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Gambar */}
            <motion.div className="w-full aspect-w-1 aspect-h-1">
              <motion.img
                src={img.src}
                alt="Kenangan"
                className="w-full h-full object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </motion.div>

            {/* Overlay Hover */}
            {hoverIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center text-white text-center p-6 rounded-xl"
              >
                <p className="text-lg font-semibold">{img.message}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Tombol Next */}
      <motion.button
        onClick={() => setStep(4)}
        className="bg-gradient-to-r from-pink-500 to-red-400 text-white font-bold px-6 py-3 rounded-full mt-8 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        💌 Lanjut Ke Halaman Selanjutnya ➡️
      </motion.button>
    </div>
  );
};

export default Gallery;