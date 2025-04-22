// file path: Module-13-DevMatch/src/pages/CandidateSearch.tsx

import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(
    JSON.parse(localStorage.getItem('savedCandidates') || '[]')
  );
  const [singleCandidate, setSingleCandidate] = useState<Candidate>({
    login: "",
    avatar_url: "",
    html_url: "",
  });

  const fetchCandidates = async () => {
    const data: Candidate[] = await searchGithub();
    if (!data.length) {
      setSingleCandidate({
        login: "",
        avatar_url: "",
        html_url: "",
        name: "No more candidates available.",
        location: "",
        email: "",
        company: "",
        bio: "",
      });
      return;
    }

    setCandidates(data); 
    const randomCandidate = data[Math.floor(Math.random() * data.length)];
    const candidateDetails = await searchGithubUser(randomCandidate.login);
    setSingleCandidate(candidateDetails);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  useEffect(() => {
    if (candidates.length) {
      console.log("Fetched candidates list:", candidates);
    }
  }, [candidates]);

  const Accepted = () => {
    if (singleCandidate) {
      const updatedList = [...savedCandidates, singleCandidate];
      setSavedCandidates(updatedList);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
      fetchCandidates();
    }
  };

  const Rejected = () => {
    fetchCandidates();
  };

  return (
    <>
      <h1>Candidate Search</h1>

      <article>
        <img
          src={singleCandidate.avatar_url || 'https://placekitten.com/100/100'}
          alt="Candidate Avatar"
        />
        <h2>{singleCandidate?.name || ''} {singleCandidate.login}</h2>
        <p>Location: {singleCandidate?.location || 'N/A'}</p>
        <p>Email: {singleCandidate?.email || 'N/A'}</p>
        <p>Company: {singleCandidate?.company || 'N/A'}</p>
        <p>Bio: {singleCandidate?.bio || 'N/A'}</p>
      </article>

      <div className="button-group">
        <button className="reject-button" type="button" title="Reject candidate" onClick={Rejected}>-</button>
        <button className="accept-button" type="button" title="Save candidate" onClick={Accepted}>+</button>
        <button className="search-button" type="button" onClick={fetchCandidates}>
          🔍 Search New Candidate
        </button>
      </div>
    </>
  );
};

export default CandidateSearch;
