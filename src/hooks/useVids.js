import { useEffect, useState } from "react";

export default function useVids() {
  const videos = [
    {
      key: "video-id-7e527615-dc6a-40e5-aa4e-9c19170197b4",
      duration: "2 mins",
      title: "Video 1",
      description: "This is video 1",
      likes: 0,
      comments: 0,
    },
    {
      key: "a",
      duration: "20 mins",
      title: "Video 2",
      description: "This is video 2",
      likes: 0,
      comments: 0,
    },
    {
      key: "b",
      duration: "30 mins",
      title: "Video 3",
      description: "This is video 3",
      likes: 0,
      comments: 0,
    },
  ];

  return videos;
}
