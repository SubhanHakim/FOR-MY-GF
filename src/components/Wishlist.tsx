import { motion } from "framer-motion";
import React, { useState } from "react";

const Wishlist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (item: string) => {
    setCheckedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const wishlistItems = [
    { id: 1, text: "🌍 Jalan-jalan ke luar negeri" },
    { id: 2, text: "🌍 Ke joga" },
    { id: 3, text: "🌍 Ke Bandung" },
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-bold mb-4">✨ Wishlist Kita ✨</h2>
      <ul className="list-disc px-6">
        {wishlistItems.map((item) => (
          <motion.li
            key={item.id}
            className={`cursor-pointer ${
              checkedItems.includes(item.text) ? "line-through text-gray-500" : ""
            }`}
            onClick={() => handleCheck(item.text)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {checkedItems.includes(item.text) ? "✅ " : "⬜ "} {item.text}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Wishlist;