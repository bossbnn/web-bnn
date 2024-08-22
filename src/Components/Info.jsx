// src/Components/Info.jsx
import React from "react";
import Kets from "./Kets";
import PDFViewer from "./PDFViewer";

function Info({ fileUrl }) {
  return (
    <div className="rounded-lg shadow-md md:px-10 sm:px-5 px-5">
      <h1 className="bg-gray-100 px-0 sm:px-5 py-3 rounded-t-lg font-semibold text-2xl text-start">
        Informasi Dokumen
      </h1>
      <table className="w-full border-collapse">
        <tbody>
          <Kets name="Nama Dokumen" ket="SKHPN_66c40b7530750_20-08-2024.pdf" />
          <Kets name="Ditandatangani oleh" ket="KATINO" />
          <Kets name="Ditandatangani pada" ket="2024-08-21 17:12:58.931" />
          <Kets
            name="Issuer"
            ket="C=ID,O=Lembaga Sandi Negara,CN=OSD LU Kelas 2"
          />
          <Kets
            name="Catatan"
            ket={`Untuk cek validitas lebih lengkap, dapat di cek pada TTE Kominfo di link <a href="https://tte.kominfo.go.id/verifyPDF" class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://tte.kominfo.go.id/verifyPDF</a> dengan melampirkan file yang digenerate dari sistem.`}
          />
          {/* Include PDFViewer if fileUrl is available */}
          {fileUrl && (
            <tr>
              <PDFViewer fileUrl={fileUrl} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Info;
