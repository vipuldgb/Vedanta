const fileInput = document.getElementById('file-upload');
const fileDetails = document.getElementById('fileDetails');
const dropFileContainer = document.querySelector('.drop-file-container');
const dropFilePage2 = document.querySelector('.drop-file-page2');
const uploadedFilesSection = document.querySelector('.Uploaded-Files');
const deleteButton = document.getElementById('deleteSelected');
const messageContainer = document.querySelector('.message-type-container');
const deleteButtonPage1 = document.querySelector('.delete-page1');
const deleteButtonPage2 = document.querySelector('.delete-selected-files');

// Select the input and button elements

const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessageButton")


/*-----------------------------------------------File Upload Part-------------------------- */


let uploadedFiles = [];



// Function to display uploaded files with a preview


function renderUploadedFiles() {
    fileDetails.innerHTML = '';

    uploadedFiles.forEach((file, index) => {


        const fileContainer = document.createElement('div');
        fileContainer.className = 'File-Name-image';

        const filePreview = document.createElement('embed');
        filePreview.src = URL.createObjectURL(file);
        filePreview.type = 'application/pdf';
        filePreview.className = 'pdf-preview';



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
        //fileName.textContent = file.name;
        fileName.textContent = file.name.split(' ')[0];


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
        fileContainer.appendChild(filePreview);
        fileContainer.appendChild(fileInfoRow);


        // Append file container to the fileDetails section

        fileDetails.appendChild(fileContainer);


    });

    // Make the uploaded files section visible if files are present
    uploadedFilesSection.style.display = uploadedFiles.length > 0 ? 'grid' : 'none';

}

// Handle file selection and upload

fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {

        // Check if the file is a PDF and under 5MB

        if (file.type === 'application/pdf' && file.size <= 5 * 1024 * 1024) {
            uploadedFiles.push(file); 
            renderUploadedFiles(); 
            dropFileContainer.style.display = 'none'; 
            dropFilePage2.style.display = 'block';
            messageContainer.style.display = 'none'; 
            deleteButtonPage2.style.display = 'block';
            deleteButtonPage1.style.display = 'none';
            // uploadedFilesSection.style.display = 'block';

            // dropFilePage2.classList.add('drop-file-page2'); 

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

        setTimeout(() => {
            location.reload();
        }, 1000);

    }
});

// Trigger file input when clicking on "Browse"

document.querySelector('.Browse').addEventListener('click', function () {
    fileInput.click();
});


/*--------------------------------Mesage Part------------------------------- */

// Add event listener to the button
sendMessageButton.addEventListener("click", function () {
    const message = messageInput.value; // Get the input value (message)

    if (message) {
        // Save the message in session storage
        sessionStorage.setItem("userMessage", message);

        // Clear the input after saving
        messageInput.value = "";

        console.log("Message saved:", message);
    } else {
        console.log("Please type a message before sending.");
    }
});