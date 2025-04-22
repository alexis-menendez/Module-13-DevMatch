# DevMatch

## **Description**

**DevMatch** is a responsive React app that helps users discover talented developers on GitHub and build a shortlist of potential candidates. With a sleek, simplified UI and clear actions, DevMatch makes it easy to explore random profiles and save standout developers—all backed by real GitHub data.

Users can:

- Browse random GitHub developer profiles with live data
- Save candidates with a single click
- View and manage saved candidates across sessions
- Access each candidate's GitHub profile directly
- Enjoy a consistent, mobile-friendly user experience

Designed for ease of use and practical candidate screening, DevMatch is ideal for employers, recruiters, or anyone looking for technical talent in an engaging and lightweight interface.

| **Key Features**                                      | **Technology Stack**                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Randomly fetch GitHub users                           | **Languages:** [TypeScript](https://www.typescriptlang.org/docs/), [JavaScript](https://developer.mozilla.org/) |
| Save and manage potential candidates via localStorage | **Front-End:** [React](https://react.dev/), [React Router](https://reactrouter.com/) |
| Click-to-save, click-to-skip workflow                 | **Styling:** [CSS Modules](https://github.com/css-modules/css-modules)               |
| Open GitHub profiles in new tab                       | **API:** [GitHub REST API](https://docs.github.com/en/rest)                          |
| Persistent saved candidates                           | **Build Tools:** [Vite](https://vitejs.dev/)                                         |
| Responsive layout for desktop and mobile              | **Deployment:** [Render](https://render.com/)                                        |

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [Future Development](#future-development)
- [License](#license)
- [Contact](#contact)

---

## Installation

You can access the app live here. To run the app locally:

**1. Clone the Repository**

```bash
git clone https://github.com/yourusername/devmatch.git
cd devmatch
```

**2. Install Dependencies**

```bash
npm install
```
 
**3. Add Your GitHub Token**

Create a .env file in the root of the project with the following:

```env
VITE_GITHUB_TOKEN=your_personal_access_token
```

**4. Start the Dev Server**

```bash
npm run dev
```

---

## Usage
1. Launch the app through localhost http://localhost:3000 or at follow this link for the live deployment https://devmatch.onrender.com/.
2. Navigate to Search to begin browsing developers.
3. Use the + button to save a developer and the − button to skip.
4. Go to the Saved tab to view your shortlist.
5. Click a candidate’s name to open their GitHub profile in a new tab.

---

## Screenshots

![homepage-screenshot](https://github.com/yourusername/devmatch/assets/preview.png)
![searchpage-screenshot](https://github.com/yourusername/devmatch/assets/preview.png)
![homepage-savedpage](https://github.com/yourusername/devmatch/assets/preview.png)

---

## Walkthrough Video

[![DevMatch Walkthrough](https://app.screencastify.com/v3/watch/wiVgzVRKIoAq9boSQlmS)](https://app.screencastify.com/v3/watch/wiVgzVRKIoAq9boSQlmS)

---

## Live Demo

You can access the live version of the app here: [DevMatch Live](https://devmatch.onrender.com/)

---

## Contributing

We welcome improvements and contributions!
To contribute:
- Fork this repo
- Create a new branch
- Commit your changes
- Submit a pull request

---

## Future Development

- Add sorting and filtering to the Saved Candidates page
- Option to view candidates in card layout
- Dark mode toggle
- Search GitHub by keyword or location

---

## License

This project is open source and available under the MIT License.

---

## Contact

[### **Alex Menendez**](https://alex-menendez.onrender.com/) – Junior Developer, Junior Project Manager, and Junior UI/UX Designer

- [**Portfolio**](https://alex-menendez.onrender.com/)
- **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
- **Email**: [alexis.menendez@austincc.edu](https://alex-menendez.onrender.com/contact)