import { useState, useEffect } from "react";
import axios from "axios";

export default function Generator() {
  const [msg, setMsg] = useState([]);
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);

  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        const { data: [image] } = await axios.get(
          `https://cardgeneratordiwali.herokuapp.com/images/${id}`
        );
        setImages(image);
        setLoading(false);
      } catch (error) {
        return alert("Sorry, no images");
      }
    };
    getImages();
  }, [id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const { data: [message] } = await axios.get(
          `https://cardgeneratordiwali.herokuapp.com/messages/${id}`
        );
        setMsg(message);

        setLoading(false);
      } catch (error) {
        return alert("Sorry, no msgs");
      }
    };
    getMessages();
  }, [id]);

  console.log(msg);

  function generate() {
	setId(Math.floor(Math.random() * 10) + 1);
    // if (msg) {
    //   const phrase = msg[Math.floor(Math.random() * 3)];
    //   const newBg = Math.floor(Math.random() * 3 + 1);
    //   console.log("phrase", phrase);
    //   setMsg(phrase);
    //   setImages(newBg);
    }
  
  console.log(images);
  return (
    <>
      <div className={`bgGlobal bgChooser${images}`}>
        <p>
          {msg && msg.title}
          {msg && msg.text}
          {/* you might want to use the images.url property as a src attribute in an img tag */}
          {images && <img  src={images.url} />}
        </p>
      </div>
      <button onClick={generate}>GENERATE</button>
    </>
  );
}
