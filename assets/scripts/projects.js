// Array of project objects
const projects = [
    {
        title: "Spendr",
        image: "./assets/images/spendr.jpg",  // Using relative path
        category: "Frontend, AI/ML",
        date: "January 2025",
        status: "Completed",
        description: " A full-stack web application, Spendr is a dating platform that utilises AI/ML to match users based on their profiles and spending history. We won the best use of AI/ML award at Northeastern University Finhacks!",
        page: "inprogress.html",
        link: "https://github.com/harrydng/spendr"
    },
    {
        title: "Indian Food Dashboard",
        image: "./assets/images/food.png",    // Using relative path
        category: "Backend, Frontend",
        date: "February 2025",
        status: "Completed",
        description: "An interactive dashboard that lets you explore the rich and diverse world of Indian cuisine! Built with Panel and Python, this tool helps you discover interesting patterns and relationships in Indian food data.",
        page: "https://indian-food-dashboard.onrender.com/foodexplore",
        link: "https://github.com/shourya0523/Indian-Food-Dashboard"
    },
    {
        title: "Exploring Happiness",
        image: "assets/images/happiness.jpg",
        category: "Data Science, AI/ML",
        date: "November 2024",
        status: "Updating",
        description: "A data science project that explores the relationship between happiness and various socio-economic factors. This was my introduction to Python and Machine Learning.",
        page: "inprogress.html",
        link: "https://github.com/SeanBNU/world-happiness-model"
    },
    {
        title: "Portfolio Website",
        image: "assets/images/portfolio.jpg",
        category: "Frontend",
        date: "February 2025",
        status: "In Progress",
        description: "This website! Built using HTML, CSS, and JavaScript. Includes a companion document exploring how I leveraged AI tools to learn web development while building this site.",
        page: "index.html",
        link: "https://github.com/shourya0523/portfolio_site"
    },
    {
        title: "HuskyFair",
        image: "assets/images/huskyfair.jpg",
        category: "Business",
        date: "November 2024",
        status: "Completed",
        description: "A business plan for a startup that I designed for students at Northeastern University.",
        page: "inprogress.html",
        link: "error.html"
    }
];

function displayProjects() {
    const projectsGrid = document.getElementById("projects-grid");

    projects.forEach(project => {
        // Create project card
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Add project image
        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.title;

        // Add project details
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectCategory = document.createElement("p");
        projectCategory.textContent = `Category: ${project.category}`;

        const projectDate = document.createElement("p");
        projectDate.textContent = `Date: ${project.date}`;

        const projectStatus = document.createElement("p");
        projectStatus.textContent = `Status: ${project.status}`;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        projectDescription.classList.add("project-description"); // Add class for styling
        projectCard.appendChild(projectDescription);

        // Add link to full project page
        const projectLink = document.createElement("a");
        projectLink.href = project.page;
        projectLink.textContent = "View Project";
        projectLink.classList.add("btn");

        // Add external link (GitHub/Devpost)
        const externalLink = document.createElement("a");
        externalLink.href = project.link;
        externalLink.textContent = "View on GitHub";
        externalLink.target = "_blank";  // Opens in a new tab
        externalLink.classList.add("btn"); 

        // Append elements to project card
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectCategory);
        projectCard.appendChild(projectDate);
        projectCard.appendChild(projectStatus);
        projectCard.appendChild(projectLink);
        projectCard.appendChild(externalLink);

        // Append project card to grid
        projectsGrid.appendChild(projectCard);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayProjects);

// Upcoming Projects Array
const upcomingProjects = [
    "Northeastern Job Search Database Platform (Expected: March 2025)",
    "Music Industry Trends Analysis (Expected: March 2025)"
];

// Function to display upcoming projects
function displayUpcomingProjects() {
    const upcomingList = document.getElementById("upcoming-projects-list");

    upcomingProjects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = project;
        upcomingList.appendChild(listItem);
    });
}

// Call function for upcoming projects
document.addEventListener("DOMContentLoaded", displayUpcomingProjects);