import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage, ref, uploadBytes } from "../Components/Firebase"; // Pastikan path sesuai

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); // Inisialisasi useNavigate di luar fungsi handleFileChange

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type === "application/pdf") {
      // Membaca file
      const reader = new FileReader();
      reader.onload = () => {
        // Membuat Blob dengan nama file baru
        const newFile = new Blob([reader.result], { type: file.type });
        const renamedFile = new File([newFile], "bnn.pdf", { type: file.type });

        // Mengunggah file ke Firebase Storage
        const fileRef = ref(storage, "bnn.pdf"); // Mengunggah dengan nama file 'bnn.pdf'
        uploadBytes(fileRef, renamedFile)
          .then(() => {
            navigate("/"); // Arahkan pengguna ke halaman utama setelah file diunggah
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload PDF</h2>
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full text-center p-2 border border-gray-300 rounded-lg"
          />
          {selectedFile && (
            <p className="mt-4 text-gray-700 text-center">
              {selectedFile.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
