//   Importing the SVG files from the Assets Folder
    const DBRX = "../Assets/dbrx.svg";  // Change to the correct image path
    const Meta = "../Assets/meta.svg";  // Change to the correct image path
    const GPT = "../Assets/gpt.svg";    // Change to the correct image path
    const Bard = "../Assets/bard.svg";  // Change to the correct image path

// Creating the array of objects  where content is stored 
const data = [
    {
        id:1,
        name:'DBRX',
        img:DBRX,
        content:"Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the companys competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality. Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the company’s competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality."
    },
    {
        id:2,
        name:"Meta AI",
        img:Meta,
        content:"Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the companys competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality. Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the company’s competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality."
    },
    {
        id:3,
        name:"ChatGPT",
        img:GPT,
        content:"Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the companys competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality. Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the company’s competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality."
    },
    {
        id:4,
        name:"Bard AI",
        img:Bard,
        content:"Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the companys competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality. Non-Disclosure Agreements (NDAs) are crucial tools for businesses aiming to protect sensitive information shared with potential partners, clients. These legal contracts are designed to keep proprietary information, trade secrets, and business strategies confidential, thus preserving the company’s competitive advantage in the industry. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors In collaborative environments, companies often share valuable insights and data that can greatly influence their operations. By implementing NDAs, businesses can communicate openly and share critical information without the risk of it being exposed to competitors, allowing both parties to work together efficiently while ensuring confidentiality."
    }
]




    const populateData = () => {
        const container = document.getElementById('content-container');
        data.forEach(company => {
            // Create a div for each company
            const part2Div = document.createElement('div');
            part2Div.className = 'part2';

            // Create logo container
            const logoContainer = document.createElement('div');
            logoContainer.className = 'logo-container';
            const nameElement = document.createElement('p');
            nameElement.innerText = company.name;
            const logoElement = document.createElement('img');
            logoElement.src = company.img;
            logoElement.alt = company.name;
            logoContainer.appendChild(nameElement);
            logoContainer.appendChild(logoElement);
            part2Div.appendChild(logoContainer);

            // Create paragraph container
            const paragraphContainer = document.createElement('div');
            paragraphContainer.className = 'paragraph-container';
            const contentElement = document.createElement('p');
            contentElement.innerText = company.content;
            paragraphContainer.appendChild(contentElement);
            part2Div.appendChild(paragraphContainer);

           // Create thumb container
           const thumbContainer = document.createElement('div');
           thumbContainer.className = 'thumb-container';
           ""
           // Like button
           const likeButton = document.createElement('button');
           likeButton.className = 'btn';
           likeButton.innerHTML = '<span class="material-symbols-outlined">thumb_up</span>';
           // Dislike button
           const dislikeButton = document.createElement('button');
           dislikeButton.className = 'btn';
           dislikeButton.innerHTML = '<span class="material-symbols-outlined">thumb_down</span>';
           
            // Add event listeners for like and dislike buttons
            likeButton.addEventListener('click', () => {
            // Remove the disliked class from the dislike button
            dislikeButton.classList.remove('disliked');
            // Toggle the liked class for the like button
            likeButton.classList.toggle('liked');
        });

        dislikeButton.addEventListener('click', () => {
            // Remove the liked class from the like button
            likeButton.classList.remove('liked');
            // Toggle the disliked class for the dislike button
            dislikeButton.classList.toggle('disliked');
        });

           thumbContainer.appendChild(likeButton);
           thumbContainer.appendChild(dislikeButton);
           part2Div.appendChild(thumbContainer);


            // Append to the main container
            container.appendChild(part2Div);
        });
    };

    // Populate all data on load
    populateData();


    // const pdfInput = document.getElementById('pdf-input');
    //  const pdfNameDisplay = document.getElementById('pdf-name');
    //  const pdfNameDisplay2 = document.getElementById('pdf-name2');
    //  const pdfImage = document.getElementById('pdf-image');

    // pdfInput.addEventListener('change', function(event) {
    //     const file = event.target.files[0];
    //     if (file && file.type === 'application/pdf') {
           
    //         pdfNameDisplay.innerText = file.name;
    //         pdfNameDisplay2.innerText = file.name;

           
    //         const reader = new FileReader(); 
    //         reader.onload = function(e) {
    //             const typedarray = new Uint8Array(e.target.result);

               
    //             pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js';
    //             pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                   
    //                 pdf.getPage(1).then(function(page) {
    //                     const scale = 1.5; 
    //                     const viewport = page.getViewport({ scale: scale });
    //                     const canvas = document.createElement('canvas');
    //                     const context = canvas.getContext('2d');
    //                     canvas.height = viewport.height;
    //                     canvas.width = viewport.width;

    //                     const renderContext = {
    //                         canvasContext: context,
    //                         viewport: viewport
    //                     };
    //                     page.render(renderContext).promise.then(function() {
                
    //                         const imgData = canvas.toDataURL('image/png');
    //                         pdfImage.src = imgData; 
    //                         pdfImage.style.display = 'block'; 
    //                     });
    //                 });
    //             });
    //         };
    //         reader.readAsArrayBuffer(file);
    //     } else {
          
    //         pdfNameDisplay.innerText = 'No PDF selected';
    //         pdfImage.src = '';
    //         pdfImage.style.display = 'none';
    //     }
    // });

   