// console.log('hat')

const submitBtn = document.getElementById('submitForm');
const titleInput = document.getElementById('title');
const usernameInput = document.getElementById('Username');
const blogInput = document.getElementById('BlogPost');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const formData = {
        Username: usernameInput.value.trim(),
        Title: titleInput.value.trim(),
        Comments: blogInput.value.trim(),
    };

    if (usernameInput.value === "" || titleInput.value === "" || blogInput.value === "") {
        alert('Please enter all fields');
    } else {
        let blogs = JSON.parse(localStorage.getItem('Blogs')) || [];

        // Add the new form data to the array
        blogs.push(formData);

        // Store the updated array back into localStorage
        localStorage.setItem('Blogs', JSON.stringify(blogs));
    
        console.log(formData);

        location.href = "./blog.html";
    }
});

console.log('Username');
console.log('Title');
console.log('BlogPost');





