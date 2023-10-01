document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // You can perform further validation here if needed

    const output = document.getElementById("output");
    output.innerHTML = `
        <h2>Registration Successful</h2>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
    `;
});
