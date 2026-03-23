import React, { useState } from "react";

function Notice() {
  const previousNotices = [
    { id: 39, date: "2023-06-15", pdf: "path/to/notice39.pdf" },
    { id: 38, date: "2023-05-10", pdf: "path/to/notice38.pdf" },
    { id: 37, date: "2023-04-20", pdf: "path/to/notice37.pdf" },
    { id: 1, date: "2023-03-01", pdf: "path/to/notice1.pdf" },
  ];

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/upload-endpoint", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        setFile(null);
      } else {
        alert("Failed to upload file. Please try again.");
      }
    } catch (error) {
      alert("An error occurred while uploading the file. Please try again.");
    }
  };

  return (
    <div>
      <section className="bg-gray-200 text-gray-800 p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Notice Section
          </h2>

          <div className="relative mb-5 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Latest notice to be uploaded here.
            </h3>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
              <span className="text-gray-500 truncate">
                Upload latest notice
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-2 border-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-500 truncate">
                    Sign/seal of principal
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <button className="mb-2 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Previous Notices PDF View
            </button>
            <ul>
              {previousNotices.map((notice) => (
                <li
                  key={notice.id}
                  className="mb-2 flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <a
                    href={notice.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Notice #{notice.id} {notice.date && ` - ${notice.date}`}
                  </a>
                  <a
                    href={notice.pdf}
                    download
                    className="ml-4 py-1 px-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notice;
