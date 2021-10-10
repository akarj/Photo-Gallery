import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log("Doc URL", docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map(doc => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
            layout
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="img"
              style={{
                backgroundImage: `url(${doc.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
          </motion.div>
        ))}
    </div>
  );
};
export default ImageGrid;
