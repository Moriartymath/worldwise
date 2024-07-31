import { useEffect, useState } from "react";

function useLocalStorage(key: string) {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify([
        {
          country: "Ukraine",
          city: "Kyiv",
          lastVisited: new Date().toLocaleDateString(),
          notes: "Amazing",
          id: "712345",
        },
      ])
    );
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
