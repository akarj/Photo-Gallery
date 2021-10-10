import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log("Doc URL", docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map(doc => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <div
              className="img"
              style={{
                backgroundImage: `url(${doc.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
    </div>
  );
};
export default ImageGrid;
