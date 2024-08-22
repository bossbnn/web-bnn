// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/NavBar";
import Info from "../Components/Info";
import Footer from "../Components/Footer";
import { storage, ref, getDownloadURL } from "../Components/Firebase";

function Home() {
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    // Path to your file in Firebase Storage
    const filePath = "bnn.pdf";

    // Create a reference to the file
    const fileRef = ref(storage, filePath);
    // Get the download URL for the file
    getDownloadURL(fileRef)
      .then((url) => {
        setFileUrl(url);
      })
      .catch((error) => {
        console.error("Error getting file URL:", error);
        setFileUrl(null);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="py-24">
        <Info fileUrl={fileUrl} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
