import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function RightSide() {
  const video1 =
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4";
  const [currentVideo, setCurrentVideo] = useState(video1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleScroll() {
    const vid1 = document.getElementById("id0");

    const rect1 = vid1.getBoundingClientRect();
    if (rect1.top < window.innerHeight && rect1.bottom > 0) {
      setCurrentVideo(video1);
      if ($(window).scrollTop() > 400) {
        $(".right").css("position", "fixed");
        $(".right").css("top", -100);
        $(".right").css("right", 120);
      } else {
        $(".right").css("position", "static");
      }
    }

    const vid2 = document.getElementById("id1");

    const rect2 = vid2.getBoundingClientRect();
    if (rect2.top < window.innerHeight && rect2.bottom > 0) {
      const video2 =
        "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4";
      setCurrentVideo(video2);
    }

    const vid3 = document.getElementById("id2");

    const rect3 = vid3.getBoundingClientRect();
    if (rect3.top < window.innerHeight && rect3.bottom > 0) {
      const video3 =
        "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4";
      setCurrentVideo(video3);
    }
  }

  return (
    <div className="right">
      <div className="test">
        <video
          key={currentVideo}
          className="video-mask"
          width="700"
          height="550"
          autoPlay
          muted
          loop
        >
          <source src={currentVideo} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default RightSide;
