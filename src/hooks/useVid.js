import { useEffect, useState } from "react";

export default function useVid(id) {
  const [vidData, setVidData] = useState({
    id: id,
    data: {},
  });

  useEffect(() => {
    fetch(`http://localhost:4000/video/${vidData.id}/data`)
      .then((res) => res.json())
      .then((res) => setVidData((prev) => ({ data: res, ...prev })))
      .catch((err) => console.error(err));
  });
  return vidData;
}
