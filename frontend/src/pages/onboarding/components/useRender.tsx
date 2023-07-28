import React, { useEffect, useState } from "react";

const useRender = () => {
  const [render, setRender] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setRender((prev) => prev + 1);
  });
  return render;
};

export default useRender;
