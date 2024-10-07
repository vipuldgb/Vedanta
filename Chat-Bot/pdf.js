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





    // ------------------------      Dynamic data printing in the pdf.html File  -------------------------------------------//
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




const content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut"

 let searchData = [
    {
        data:content,
        img:"../Assets/dbrx.svg",
        name:"DBRX",
        res:content
    },
    {
        data:content,
        img:"../Assets/meta.svg",
        name:"Meta AI",
        res:content
    },
    {
        data:content,
        img:"../Assets/gpt.svg",
        name:"Chat GPT",
        res:content
    },
    {
        data:content,
        img:"../Assets/bard.svg",
        name:"Bard AI",
        res:content
    },
 ];




function displaySearchData(inputMessage, searchData) {
    // Create the main parent container: content-container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    // -----------------  Part 1 (User Message Section) ---------------------//
    
    // Create the part1 container for user message
    const part1Container = document.createElement('div');
    part1Container.classList.add('part1');

    // Create the static part1_user container
    const part1User = document.createElement('div');
    part1User.classList.add('part1_user');

    // Create the static image element
    const userLogo = document.createElement('img');
    userLogo.classList.add('userlogo');
    userLogo.src = '../Assets/user-2.svg';
    userLogo.alt = 'Neelima';

    // Create the static name element
    const userName = document.createElement('p');
    userName.textContent = 'Neelima';

    // Append the image and name to the part1_user div
    part1User.appendChild(userLogo);
    part1User.appendChild(userName);

    // Create the dynamic paragraph element for the user message
    const dynamicParagraph = document.createElement('p');
    dynamicParagraph.textContent = inputMessage; // Set dynamic content

    // Append both static part1_user and dynamic paragraph to the part1 container
    part1Container.appendChild(part1User);
    part1Container.appendChild(dynamicParagraph);

    // Append part1 container to the contentContainer
    contentContainer.appendChild(part1Container);

    // -----------------  Part 2 (Company Section) ---------------------//

    searchData.forEach(company => {
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

        // Create paragraph container for company content
        const paragraphContainer = document.createElement('div');
        paragraphContainer.className = 'paragraph-container';
        const contentElement = document.createElement('p');
        contentElement.innerText = company.res;  // Ensure that the company object has a `res` property for the content
        paragraphContainer.appendChild(contentElement);
        part2Div.appendChild(paragraphContainer);

        // Create thumb container
        const thumbContainer = document.createElement('div');
        thumbContainer.className = 'thumb-container';

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
            dislikeButton.classList.remove('disliked');
            likeButton.classList.toggle('liked');
        });

        dislikeButton.addEventListener('click', () => {
            likeButton.classList.remove('liked');
            dislikeButton.classList.toggle('disliked');
        });

        // Append the buttons to the thumb container
        thumbContainer.appendChild(likeButton);
        thumbContainer.appendChild(dislikeButton);
        part2Div.appendChild(thumbContainer);

        // Append each part2Div (company data) to the contentContainer
        contentContainer.appendChild(part2Div);
    });

    // Append the entire contentContainer to the DOM (inside the existing container)
    const container = document.getElementById('content-container');
    container.appendChild(contentContainer);
}




// Add event listener for the button click
document.getElementById('sendButton').addEventListener('click', function() {
    // Get the value from the input field
    let inputMessage = document.getElementById('messageInput').value;

    // Check if the input is not empty
    if (inputMessage.trim() !== "") {
        // Add the new message to the searchData array
        // searchData.push({
        //     msg: inputMessage,
        //     content: data 
        // });

        // Clear the input field after storing the data
        document.getElementById('messageInput').value = "";

        // Call the function to display the new search data
        displaySearchData(inputMessage, searchData );
        
        // For testing, log the updated searchData to the console
        console.log('Updated searchData:', searchData);
    }
});




    