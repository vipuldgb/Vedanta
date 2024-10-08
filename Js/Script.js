const fileInput = document.getElementById("file-upload");
const fileDetails = document.getElementById("fileDetails");
const dropFileContainer = document.querySelector(".drop-file-container");
const dropFilePage2 = document.querySelector(".drop-file-page2");
const uploadedFilesSection = document.querySelector(".Uploaded-Files");
const deleteButton = document.getElementById("deleteSelected");
const messageContainer = document.querySelector(".message-type-container");
const deleteButtonPage1 = document.querySelector(".delete-page1");
const deleteButtonPage2 = document.querySelector(".delete-selected-files");
const searchPdf = document.querySelector(".submit-pdf");
const choosePDF = document.querySelector(".choose-files");
const goBack = document.querySelector(".back");

// Select the input and button elements

const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const searchPdfButton = document.getElementById("search-pdf-btn");

/*-----------------------------------------------File Upload Part-------------------------- */

let uploadedFiles = [];

// Function to display uploaded files with a preview

function renderUploadedFiles() {
  fileDetails.innerHTML = "";

  uploadedFiles.forEach((file, index) => {
    const fileContainer = document.createElement("div");
    fileContainer.className = "File-Name-image";

    // Create a canvas element to render the first page of the PDF
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.className = "pdf-preview";

    // Create a FileReader to read the PDF file
    const reader = new FileReader();
    reader.onload = function (e) {
      const typedarray = new Uint8Array(e.target.result);

      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js";
      pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
        pdf.getPage(1).then(function (page) {
          const scale = 1.5;
          const viewport = page.getViewport({ scale: scale });
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          // Render PDF page into canvas context
          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          page.render(renderContext).promise.then(function () {
            // Append canvas to the file container after rendering
            fileContainer.appendChild(canvas);

            // Create the row for the PDF image and file name
            const fileInfoRow = document.createElement("div");
            fileInfoRow.className = "file-info-row";

            // Image below PDF preview (pdf.svg)
            const pdfImage = document.createElement("img");
            pdfImage.src = "./Images/pdf.svg";
            pdfImage.alt = "PDF";
            pdfImage.className = "pdf-image";

            const fileName = document.createElement("div");
            fileName.className = "file-name";
            fileName.textContent = file.name.split(" ")[0];

            // Create a checkbox for each file
            const fileCheckbox = document.createElement("input");
            fileCheckbox.type = "checkbox";
            fileCheckbox.className = "file-checkbox";
            fileCheckbox.dataset.fileIndex = index;

            // Append PDF image and file name to the row
            fileInfoRow.appendChild(pdfImage);
            fileInfoRow.appendChild(fileName);

            // Append elements to the container
            fileContainer.appendChild(fileCheckbox);
            fileContainer.appendChild(fileInfoRow);

            // Append file container to the fileDetails section
            fileDetails.appendChild(fileContainer);

            fileContainer.addEventListener("click", function (event) {
              if (!event.target.classList.contains("file-checkbox")) {
                const reader = new FileReader();

                reader.onloadend = function (e) {
                  const base64String = btoa(e.target.result);
                  localStorage.setItem("uploadedFile", base64String);
                  localStorage.setItem("uploadedFileName", file.name);
                  window.location.href = "../Chat-Bot/pdf.html";
                };

                reader.readAsBinaryString(file);
              }
            });
          });
        });
      });
    };

    // Read the file as an ArrayBuffer
    reader.readAsArrayBuffer(file);
  });

  // Make the uploaded files section visible if files are present
  uploadedFilesSection.style.display =
    uploadedFiles.length > 0 ? "grid" : "none";
}

/*-------------------------------------------------Handle File Upload and Selection------------------------------------------ */

fileInput.addEventListener("change", async function (event) {
  const file = event.target.files[0];

  if (file) {
    if (file.type === "application/pdf") {
      uploadedFiles.push(file);
      renderUploadedFiles();
      dropFileContainer.style.display = "none";
      dropFilePage2.style.display = "block";
      deleteButtonPage2.style.display = "block";
      deleteButtonPage1.style.display = "none";
    } else {
      alert("Please upload a PDF file under 5MB.");
    }
  }
});

/*----------------------------------------------- Handle Delete File Functions------------------------------------------------------ */

deleteButton.addEventListener("click", function () {
  const selectedCheckboxes = document.querySelectorAll(
    ".file-checkbox:checked"
  );

  // Create a new array excluding selected files
  const filesToKeep = uploadedFiles.filter((file, index) => {
    return !Array.from(selectedCheckboxes).some(
      (checkbox) => checkbox.dataset.fileIndex == index
    );
  });

  // Update the uploaded files list

  uploadedFiles = filesToKeep;

  // Re-render the uploaded files

  renderUploadedFiles();

  // Check if there are any uploaded files left

  if (uploadedFiles.length === 0) {
    uploadedFilesSection.style.display = "none";
    dropFilePage2.style.display = "none";
    dropFileContainer.style.display = "block";
    deleteButtonPage2.style.display = "none";
    deleteButtonPage1.style.display = "block";

    location.reload();
  }
});

/*---------------------------------------------Trigger input Container----------------------------------------------------- */

document
  .querySelector(".drop-file-container")
  .addEventListener("click", function () {
    fileInput.click();
  });

document.querySelector(".choose-files").addEventListener("click", function () {
  fileInput.click();
});
