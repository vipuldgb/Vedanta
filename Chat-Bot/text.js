let searchData = [];
const data = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ratione voluptatum modi. Fugit similique delectus cum ipsam numquam, quis itaque odit! Voluptates dolore exercitationem nobis corrupti aut, dicta repellat aperiam quidem aspernatur accusantium? Dolorem est corrupti non quaerat, sequi iure adipisci commodi minus aliquid explicabo?";

// Function to display messages and content
function displaySearchData(msg, content) {
    // Create a new container for the search messages
    const newSearchContainer = document.createElement('div');
    newSearchContainer.classList.add('search-Container');

    // Create user message container
    const userLogoContainer = document.createElement('div');
    userLogoContainer.classList.add('userlogo-container');
    userLogoContainer.innerHTML = `
        <span class="logo">
            <img src="../Assets/user-2.svg" alt="">
            <p>Username</p>
        </span>
        <div class="search-content-container">
            <p>User: ${msg}</p>
        </div>
    `;
    
    // Create AI response container
    const aiLogoContainer = document.createElement('div');
    aiLogoContainer.classList.add('AIlogo-container');
    aiLogoContainer.innerHTML = `
        <span class="logo">
            <img src="../Assets/AI-ChatBot.svg" alt="">
            <p>AI Assistant</p>
        </span>
        <div class="get-content-container">
            <p>AI: ${content}</p>
        </div>
    `;

    // Append user and AI containers to the new search container
    newSearchContainer.appendChild(userLogoContainer);
    newSearchContainer.appendChild(aiLogoContainer);
    
    // Append the new search container to the section1 div
    document.querySelector('.section1').appendChild(newSearchContainer);
}

// Add event listener for the button click
document.getElementById('sendButton').addEventListener('click', function() {
    // Get the value from the input field
    let inputMessage = document.getElementById('messageInput').value;

    // Check if the input is not empty
    if (inputMessage.trim() !== "") {
        // Add the new message to the searchData array
        searchData.push({
            msg: inputMessage,
            content: data // You can customize this if you have different content for each message
        });

        // Clear the input field after storing the data
        document.getElementById('messageInput').value = "";

        // Call the function to display the new search data
        displaySearchData(inputMessage, data);
        
        // For testing, log the updated searchData to the console
        console.log('Updated searchData:', searchData);
    }
});

// Check for existing messages in sessionStorage and display them if present
if (sessionStorage.getItem('userMessage')) {
    const message = sessionStorage.getItem('userMessage');
    searchData.push({
        msg: message,
        content: data // Initial content for the first message
    });
    displaySearchData(message, data);
    sessionStorage.removeItem('userMessage'); // Clear the sessionStorage
}
