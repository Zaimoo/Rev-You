import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjs from 'pdfjs-dist';
import Modal from 'react-modal';  // Import react-modal
import './css/FileUpload.css';
import upload from '../upload-icon.png';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();
  const modalRef = useRef();

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      convertPdfToText(selectedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  const convertPdfToText = async (pdfFile) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const buffer = reader.result;
      const typedArray = new Uint8Array(buffer);

      const extractedText = await extractTextFromPdf(typedArray);
      setText(extractedText);
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  const extractTextFromPdf = async (pdfData) => {
    try {
      const loadingTask = pdfjs.getDocument({ data: pdfData });
      const pdfDocument = await loadingTask.promise;
      const numPages = pdfDocument.numPages;
      let extractedText = '';

      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const page = await pdfDocument.getPage(pageNumber);
        const pageText = await page.getTextContent();
        pageText.items.forEach((item) => {
          extractedText += item.str + ' ';
        });
      }

      return extractedText;
    } catch (err) {
      alert('Please upload PDF Files only!');
    }
  };

  const handleGenerateClick = () => {
    if (text) {
      setIsModalOpen(true);
    } else {
      return;
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    // Handle the account name and account number as needed
    // For now, we'll just log them
    console.log('Account Name:', accountName);
    console.log('Account Number:', accountNumber);

    // Close the modal
    setIsModalOpen(false);

    // Navigate to the result page
    navigate('/result', { state: { text } });
  };
  

  const customStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      marginBottom: '20px',
      fontSize: '1.5em',
      color: '#333',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
      color: '#555',
    },
    input: {
      width: '90%',
      padding: '8px',
      fontSize: '1em',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '15px',
      marginTop: '15px'
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '10px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    cancelButton: {
      backgroundColor: '#ccc',
      color: '#333',
    },
    cancelButtonHover: {
      backgroundColor: '#999',
    },
  };
  

  return (
    <div className="file-upload container">
      <div className='file-upload-container'>
        <div {...getRootProps()} className="file-label">
          <input {...getInputProps()} />
          <img src={upload} alt="Upload icon" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>{file ? file.name : 'Drag and drop or upload your reading material.'}</p>
          )}
        </div>
        <button className='convert-button' onClick={handleGenerateClick}>Generate</button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Account Information Modal"
        style={customStyles}
        ref={modalRef}
      >
        <h2 style={customStyles.title}>Enter GCASH Information</h2>
        <label style={customStyles.label}>
          Account Name:
          <input type="text" style={customStyles.input} value={accountName} onChange={(e) => setAccountName(e.target.value)} />
        </label>
        <label style={customStyles.label}>
          Account Number:
          <input type="text" style={customStyles.input} value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
        </label>
        <button style={customStyles.button} onClick={handleConfirm}>Confirm</button>
        <button style={{ ...customStyles.button, ...customStyles.cancelButton }} onClick={handleModalClose}>Cancel</button>
      </Modal>

      <Footer />
    </div>
  );
};

export default FileUpload;
