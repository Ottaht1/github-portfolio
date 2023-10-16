# GitHub Profile Viewer
The GitHub Profile Viewer is a web application built using React that allows users to explore GitHub user profiles, view repositories, and delve into the details of individual repositories. This application provides an interactive and user-friendly interface for accessing a user's GitHub data.

# Features
User Profile: Display essential user information, including their avatar, username, name, bio, location, email, followers, following, and public repositories.

Repositories List: View a list of the user's repositories, including details such as the repository name, primary language, and star count. The list is paginated to accommodate a user's various repositories.

Individual Repository Details: Access detailed information about a specific repository, covering aspects like the repository's language, forks, size, SSH URL, last push date, visibility, watchers, and more.

Navigation: Seamlessly move between different sections, such as the user's profile, repository list, and individual repository details.

Error Handling: A custom 404 error page provides a user-friendly experience when navigating to non-existent routes.

## Getting Started
Follow these steps to set up the GitHub Profile Viewer on your local machine:

1. Clone the GitHub Profile Viewer repository to your local machine:
git clone https://github.com/your-username/github-profile-viewer.git

2. Navigate to the project directory:
cd github-profile-viewer

3. Install project dependencies:
npm install

4. Start the development server:
npm start

5. Open your web browser and access the application at http://localhost:3000.

# Usage
Profile: When you open the application, you'll land on the user's profile page. This page displays basic user information.

Repositories: Click on "View Repositories" to explore the user's repositories. You can switch between repository pages, view repository details, and even navigate back to the profile page.

Individual Repository: Click on a specific repository to view detailed information about that repository.

Error Handling: If you attempt to access a non-existent route, the application provides a friendly "404 ERROR" message.

## How It Works
The GitHub Profile Viewer fetches data from the GitHub API, including user details and repository information. It uses React Router for navigation and responsive components to present data to the user.

## Preview Link:
Click on the link below to see a preview of My Own Github Profile Viewer
https://helpful-creponne-4cd7b6.netlify.app
