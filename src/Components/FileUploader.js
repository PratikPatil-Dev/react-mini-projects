import React, { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const displayFile = () => {
    if (file) {
      const fileType = file.type;
      let fileComponent = null;

      if (fileType.startsWith("image/")) {
        fileComponent = (
          <img
            src={URL.createObjectURL(file)}
            alt="image"
            className="max-w-full"
          />
        );
      } else if (fileType === "application/pdf") {
        fileComponent = (
          <iframe
            title="PDF Document"
            width="100%"
            height="500"
            src={URL.createObjectURL(file)}
          />
        );
      } else {
        fileComponent = (
          <object
            data={URL.createObjectURL(file)}
            type={fileType}
            width="100%"
            height="500"
          >
            <p className="text-red-500">
              Your browser does not support viewing this file type.
            </p>
          </object>
        );
      }

      return <div className="mt-4">{fileComponent}</div>;
    }
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">FileUploader</h1>
      <input
        type="file"
        accept="image/*, application/pdf, .doc, .docx, .txt"
        onChange={(e) => handleFileChange(e)}
        className="mb-4"
      />
      {displayFile()}
    </div>
  );
};

export default FileUploader;
