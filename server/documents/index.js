module.exports = ({ name, designation, about, eq, skills, projects, pno, email, address }) => {
return `
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
    body {
        font-family: Lato, sans-serif;
        margin: 0;
    }
    nav {
        background-color: black;
        width: 100%;
        height: 100%;
        top: 0;
        color: white;
        padding: 20px 0px;
        text-align: center;
    }
    nav > .head {
        font-weight: 900;
        font-size: 25px;
    }
    nav > .tail {
        font-weight: 300;
    }
    .flex {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 2%;
    }
    .sec1, .sec2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .vl {
        border-left: 2px solid black;;
        height: auto;
        text-align: center;

    }
    .sec1 > .profile > h2 {
        font-weight: 900;
        font-size: medium;
    }
    .sec1 > .skills > h2 {
        font-weight: 900;
        font-size: medium;
    }
    .sec2 > .edu > h2 {
        font-weight: 900;
        font-size: medium;
    }
    .sec2 > .projects > h2 {
        font-weight: 900;
        font-size: medium;
    }
    .sec1 > .profile > p {
        font-weight: 400;
    }
    .sec1 > .skills > p {
        font-weight: 400;
    }
    .sec2 > .edu > p {
        font-weight: 400;
    }
    .sec2 > .projects > p {
        font-weight: 400;
    }
    .contact {
      margin: 2%;
    }
    .contact > h2 {
      font-weight: 900;
      font-size: medium;
    }
</style>
</head>
<body>
    <nav>
        <h1 class="head">${name}</h1>
        <h3 class="tail">${designation}</h3>
    </nav>
    <div class="flex">
        <div class="sec1">
            <div class="profile">
                <h2>Profile</h2>
                <p>${about}</p>
            </div>
            <div class="skills">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>

        </div>
        <div class="vl"></div>
        <div class="sec2">
            <div class="edu">
                <h2>Education</h2>
                <p>${eq}</p>
            </div>
            <div class="projects">
                <h2>Projects</h2>
                <p>${projects}</p>
            </div>
        </div>
    </div>
    <div class="contact">
        <h2>Contact</h2>
        <table>
            <tr>
                <td>Phone Number:</td>
                <td>${pno}</td>
            </tr>
            <tr>
                <td>Email Address:</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>${address}</td>
            </tr>
        </table>
    </div>
</body>
</html>
    `;
};