import React from "react";
import useFirestore from "../hooks/useFirestore";

export const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return <div className="img-grid"></div>;
};
