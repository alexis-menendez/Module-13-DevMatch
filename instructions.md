# Module 13: DevMatch

# TypeScript and React
Using TypeScript with React makes development easier, leading to better, more reliable applications.

# Challenge: Candidate Search
Your task is to complete a candidate search application that retrieves data from the GitHub API and displays it in the browser.
The back end is already set up to get data from the GitHub API.
You need to build the front end using TypeScript, connect it to the API, and deploy the app to Render.
To understand the GitHub API data, check the GitHub REST API documentation.
You will need a GitHub Personal Access Token to increase the API rate limit.

# Steps to Get Started:
Download and unzip the starter code.
Create a new GitHub repository using the starter code.
Generate a GitHub Personal Access Token and add it to a .env file as VITE_GITHUB_TOKEN.
Complete the CandidateSearch and SavedCandidates pages.
Use local storage to store candidate data.
Deploy your app to Render.

# User Story
As an employer, I want a candidate search app so I can find and save the best candidates.

# Acceptance Criteria
When the page loads, it shows a candidate's details (name, username, location, avatar, email, GitHub profile, company).
Clicking the "+" button saves the candidate and shows the next one.
Clicking the "−" button skips the candidate without saving.
If there are no more candidates, a message should appear.
A separate page should display saved candidates.
Saved candidates should persist even after refreshing the page.
If no candidates have been saved, a message should indicate this.

# Bonus Features
Add options to sort and filter saved candidates.

# Grading Criteria

## Technical (40%)
The app retrieves data from the GitHub API.
TypeScript is used to define user data types.
The app saves candidates to local storage.

## Deployment (32%)
The app is deployed and works correctly.
The GitHub repository is submitted and contains the full project.

## Quality (28%)
The app is easy to use, visually clean, and works as shown in the mock-up.
The GitHub repo follows best practices (naming, file structure, indentation, comments, commit messages, and a README with a description, screenshot, and deployed app link).

## Bonus (up to 10 points)
Add sorting (5 points).
Add filtering (5 points).

# Submission Requirements

## Submit both:
The live deployed app link.
The GitHub repository link with a README.

# Important Notes
If your submission is incomplete (missing code, only a README, or only starter code), it will be marked zero and won’t count toward graduation.
You can miss up to two challenges and still earn your certificate. Your lowest two scores will be dropped.
If you work with others or use external code, add a note in your README specifying where the code came from.
If you need help, use:
Xpert LA Chat+ for live support.
Office hours with instructors.
Tutoring sessions through Bootcampspot.
Student Success Advisors for additional support.

