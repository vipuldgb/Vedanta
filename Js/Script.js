const fileInput = document.getElementById('file-upload');
const fileDetails = document.getElementById('fileDetails');
const dropFileContainer = document.querySelector('.drop-file-container');
const dropFilePage2 = document.querySelector('.drop-file-page2');
const uploadedFilesSection = document.querySelector('.Uploaded-Files');
const deleteButton = document.getElementById('deleteSelected');
const messageContainer = document.querySelector('.message-type-container');
const deleteButtonPage1 = document.querySelector('.delete-page1');
const deleteButtonPage2 = document.querySelector('.delete-selected-files');
const searchPdf = document.querySelector('.submit-pdf');

// Select the input and button elements

const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton");
const searchPdfButton = document.getElementById('search-pdf-btn');


/*-----------------------------------------------File Upload Part-------------------------- */


let uploadedFiles = [];



// Function to display uploaded files with a preview


function renderUploadedFiles() {
    fileDetails.innerHTML = '';

    uploadedFiles.forEach((file, index) => {


        const fileContainer = document.createElement('div');
        fileContainer.className = 'File-Name-image';


        // Create a canvas element to render the first page of the PDF
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.className = 'pdf-preview'; // Add class for styling

        // Create a FileReader to read the PDF file
        const reader = new FileReader();
        reader.onload = function (e) {
            const typedarray = new Uint8Array(e.target.result);


            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';
            pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
                pdf.getPage(1).then(function (page) {
                    const scale = 1.5; // Scale for rendering the page
                    const viewport = page.getViewport({ scale: scale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    // Render PDF page into canvas context
                    const renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext).promise.then(function () {
                        // Append canvas to the file container after rendering
                        fileContainer.appendChild(canvas);

                        // Create the row for the PDF image and file name
                        const fileInfoRow = document.createElement('div');
                        fileInfoRow.className = 'file-info-row';

                        // Image below PDF preview (pdf.svg)
                        const pdfImage = document.createElement('img');
                        pdfImage.src = './Images/pdf.svg';
                        pdfImage.alt = 'PDF';
                        pdfImage.className = 'pdf-image';

                        const fileName = document.createElement('div');
                        fileName.className = 'file-name';
                        fileName.textContent = file.name.split(' ')[0];
                        //fileName.textContent = file.name.split(' ').slice(0, 2).join(' ');

                        // Create a checkbox for each file
                        const fileCheckbox = document.createElement('input');
                        fileCheckbox.type = 'checkbox';
                        fileCheckbox.className = 'file-checkbox';
                        fileCheckbox.dataset.fileIndex = index;

                        // Append PDF image and file name to the row
                        fileInfoRow.appendChild(pdfImage);
                        fileInfoRow.appendChild(fileName);

                        // Append elements to the container
                        fileContainer.appendChild(fileCheckbox);
                        fileContainer.appendChild(fileInfoRow);

                        // Append file container to the fileDetails section
                        fileDetails.appendChild(fileContainer);

                    });
                });
            });
        };

        // Read the file as an ArrayBuffer
        reader.readAsArrayBuffer(file);


    });

    // Make the uploaded files section visible if files are present
    uploadedFilesSection.style.display = uploadedFiles.length > 0 ? 'grid' : 'none';

}

// Handle file selection and upload

fileInput.addEventListener('change', async function (event) {

    const file = event.target.files[0]; // Get the selected file

    if (file) {

        // Check if the file is a PDF and under 5MB

        if (file.type === 'application/pdf') {
            uploadedFiles.push(file);
            renderUploadedFiles();
            dropFileContainer.style.display = 'none';
            dropFilePage2.style.display = 'block';
            messageContainer.style.display = 'none';
            deleteButtonPage2.style.display = 'block';
            deleteButtonPage1.style.display = 'none';
            searchPdf.style.display = 'block';
            

        } else {
            alert('Please upload a PDF file under 5MB.');
        }
    }


});

// Handle file deletion
deleteButton.addEventListener('click', function () {
    const selectedCheckboxes = document.querySelectorAll('.file-checkbox:checked');

    // Create a new array excluding selected files
    const filesToKeep = uploadedFiles.filter((file, index) => {
        return !Array.from(selectedCheckboxes).some(checkbox => checkbox.dataset.fileIndex == index);
    });

    // Update the uploaded files list

    uploadedFiles = filesToKeep;

    // Re-render the uploaded files

    renderUploadedFiles();

    // Check if there are any uploaded files left

    if (uploadedFiles.length === 0) {
        uploadedFilesSection.style.display = 'none';
        dropFilePage2.style.display = 'none';
        dropFileContainer.style.display = 'block';
        messageContainer.style.display = 'block';
        deleteButtonPage2.style.display = 'none';
        deleteButtonPage1.style.display = 'block';
        searchPdf.style.display = 'none';

        location.reload();

        // setTimeout(() => {
        //     location.reload();
        // }, 1000);

    }
});

// Trigger file input when clicking on "Browse"

document.querySelector('.Browse').addEventListener('click', function () {
    fileInput.click();
});


/*--------------------------------Mesage Part------------------------------- */

// Add event listener to the button


sendMessageButton.addEventListener("click", function () {
    const message = messageInput.value.trim(); // Get the input value (message) and trim whitespace

    if (message) {
        // Save the message in session storage
        sessionStorage.setItem("userMessage", message);

        // Clear the input after saving
        messageInput.value = "";

        console.log("Message saved:", message);

        // Navigate to text.html only if there is a message
        window.location.href = '../Chat-Bot/text.html'; // Replace with the actual URL or page path
    } else {
        console.log("Please type a message before sending.");
        alert("Please type a message before sending."); // Optionally, alert the user
    }
});


/*---------------------------------------Save PDF ON Local Storage------------------------------ */

// //Handle search functionality to store selected PDF in local storage
// searchPdfButton.addEventListener('click', function () {
//     const selectedCheckboxes = document.querySelectorAll('.file-checkbox:checked');

//     // Check if exactly one checkbox is selected
//     if (selectedCheckboxes.length === 1) {
//         const selectedFileIndex = selectedCheckboxes[0].dataset.fileIndex;
//         const selectedFile = uploadedFiles[selectedFileIndex];


        
//         // Create a FileReader to read the PDF file as a Data URL
//         const reader = new FileReader();
//         reader.onloadend = function (e) {
//             const base64String = btoa(e.target.result);
//             // Store the file in local storage
//             //localStorage.setItem("uploadedFile", reader.result);
//             localStorage.setItem('uploadedFile', base64String); 
//             // alert(`File "${selectedFile.name}" has been stored in local storage.`);
//         };
//         // reader.readAsDataURL(selectedFile);
//         reader.readAsBinaryString(selectedFile);
//     } else {

//         alert("Please select exactly one file to store.");
//     }
// });


// const sendButton = document.getElementById('search-pdf-btn');

// // Add a click event listener to the button
// sendButton.addEventListener('click', function() {
//     // Redirect to the pdf.html page when clicked
//     window.location.href = '../Chat-Bot/pdf.html';
// });



//const searchPdfButton = document.getElementById('search-pdf-btn');

searchPdfButton.addEventListener('click', function () {
    const selectedCheckboxes = document.querySelectorAll('.file-checkbox:checked');

    // Check if exactly one checkbox is selected
    if (selectedCheckboxes.length === 1) {
        const selectedFileIndex = selectedCheckboxes[0].dataset.fileIndex;
        const selectedFile = uploadedFiles[selectedFileIndex];


        // Create a FileReader to read the PDF file as a binary string



        // Create a FileReader to read the PDF file as a Data URL

        const reader = new FileReader();
        reader.onloadend = function (e) {
            // Convert the binary string to base64
            const base64String = btoa(e.target.result);
            // Store the base64 string of the file in local storage
            localStorage.setItem('uploadedFile', base64String);
            // Store the file name in local storage
            localStorage.setItem('uploadedFileName', selectedFile.name);
           // alert(`File "${selectedFile.name}" has been stored in local storage.`);
        };
        // Read the file as binary string
        reader.readAsBinaryString(selectedFile);
    } else {
        alert("Please select exactly one file to store.");
    }
});

// Add a click event listener to the button for navigation
const sendButton = document.getElementById('search-pdf-btn');

sendButton.addEventListener('click', function() {
    // Redirect to the pdf.html page when clicked
    window.location.href = '../Chat-Bot/pdf.html';
});

