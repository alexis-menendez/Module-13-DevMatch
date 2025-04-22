// file path: Module-13-DevMatch/src/pages/SavedCandidates.tsx

import type { Candidate } from '../interfaces/Candidate.interface';
import { useState, useEffect } from "react";
import "../index.css";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(candidates);
  }, []);

  const removeCandidate = (login: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.login !== login);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <main>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate) => (
              <tr key={candidate.login}>
                <td>
                  <img 
                    src={candidate.avatar_url} 
                    alt="Candidate Avatar" 
                    className="avatar"
                    width="50"
                    height="50" 
                  />
                </td>
                <td>
                  <a 
                    href={candidate.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#4cc6c6', textDecoration: 'underline' }}
                  >
                    {candidate.name || candidate.login}
                  </a>
                </td>
                <td>{candidate.location || 'Unknown'}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td>{candidate.bio || 'No bio available'}</td>
                <td>
                  <button className="button" onClick={() => removeCandidate(candidate.login)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </main>
  );
}

export default SavedCandidates;
