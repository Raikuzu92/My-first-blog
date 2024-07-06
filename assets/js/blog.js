console.log('hello')
//retrive data
const formData = localStorage.getItem('formData');

const blogsContainer = document.querySelector('#blogs')


// Parse the JSON string back into an object
const storedData = JSON.parse(formData);

// Access the individual properties (username, title, content)
//const username = storedData.username.value.trim();
//const title = storedData.title;
//const content = storedData.content;

// Display the retrieved data on the new page as needed
//console.log(`Username: ${username.value.trim()}`);
//console.log(`Title: ${title}`);
//console.log(`Content: ${content}`);

//Event listener for light dark mode
('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Event listner for light dark mode
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

//display data
function renderstoredData() {

    if (formData) {
        const storedData = JSON.parse(formData);
    
        function renderStoredData() {
            if (storedData && Array.isArray(storedData)) {
                for (let i = 0; i < storedData.length; i++) {
                    const blog = storedData[i];
                
                    const li = document.createElement('li');
                    li.textContent = `Username: ${blog.username}, Title: ${blog.title}, Content: ${blog.content}`;
                    li.setAttribute('data-index', i);
                
                    blogsContainer.appendChild(li);
                }
            } else {
                const li = document.createElement('li');
                li.textContent = "No valid data found in storedData.";
                blogsContainer.appendChild(li);
            }
        }
    
        renderStoredData();
    } else {
        const li = document.createElement('li');
        li.textContent = "No data found in localStorage with key 'formData'.";
        blogsContainer.appendChild(li);
    }
}

console.log(storedData)

//back button Still in progress!!