// file path: Module-13-DevMatch/src/api/API.tsx

console.log("Env: ", import.meta.env.VITE_GITHUB_TOKEN);

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response when fetching user details');
    }
    console.log('Fetched user:', data);
    return data;
  } catch (err) {
    console.error('Error in searchGithubUser:', err);
    return null;
  }
};

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );

    const users = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response when fetching user list');
    }

    // Fetch detailed profiles for a subset of users
    const detailedProfiles = await Promise.all(
      users.slice(0, 5).map((user: any) => searchGithubUser(user.login))
    );

    // Filter out any null values in case of fetch failure
    return detailedProfiles.filter(Boolean);
  } catch (err) {
    console.error('Error in searchGithub:', err);
    return [];
  }
};

export { searchGithub, searchGithubUser };
