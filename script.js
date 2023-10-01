// Create an array to store form submissions
const submissions = [];

document.getElementById("enrollmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const portfolio = document.getElementById("portfolio").value;
    const image = document.getElementById("image").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
    const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(skill => skill.value);

    // Create an object to represent the submission
    const submission = {
        name,
        email,
        portfolio,
        image,
        gender,
        skills,
    };

    // Add the submission to the submissions array
    submissions.push(submission);

    // Clear the form fields
    document.getElementById("enrollmentForm").reset();

    // Display all submissions
    displaySubmissions();
});

document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("enrollmentForm").reset();
});

// Function to display all submissions
function displaySubmissions() {
    const output = document.getElementById("output");
    output.innerHTML = '';

    submissions.forEach((submission, index) => {
        const submissionDiv = document.createElement('div');
        submissionDiv.className = 'submission';

        submissionDiv.innerHTML = `
        <h2>Submission ${index + 1}</h2>
        <p>Name: ${submission.name}</p>
        <p>Email: ${submission.email}</p>
        <p>Portfolio Website: <a href="${submission.portfolio}" target="_blank">${submission.portfolio}</a></p>
        <div id="imageContainer">
            <img src="${submission.image}" alt="Student's Image">
        </div>
        <p>Gender: ${submission.gender}</p>
        <p>Skills: ${submission.skills.join(", ")}</p>
    `;
    

        output.appendChild(submissionDiv);
    });
}
