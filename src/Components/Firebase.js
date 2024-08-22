import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL,uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEuFH8C7bVCnCcl83yg8gCbSvWruCu_i4",
  authDomain: "bnn-file-pdf.firebaseapp.com",
  projectId: "bnn-file-pdf",
  storageBucket: "bnn-file-pdf.appspot.com",
  messagingSenderId: "944487162020",
  appId: "1:944487162020:web:dc259414163498f14e8631",
  measurementId: "G-5X07FJPFRX",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, getDownloadURL ,uploadBytes};
