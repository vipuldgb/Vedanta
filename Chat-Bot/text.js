let searchData = [];
const data = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut"
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
        content: data 
    });
    displaySearchData(message, data);
    sessionStorage.removeItem('userMessage'); 
}
