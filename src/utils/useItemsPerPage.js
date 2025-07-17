import { useEffect, useState } from "react";

export const useItemsPerPage = (breakpoints = { sm: 640, lg: 1024 }) => {
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < breakpoints.sm) {
        setItemsPerPage(1);
      } else if (width < breakpoints.lg) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, [breakpoints]);

  return itemsPerPage;
};
