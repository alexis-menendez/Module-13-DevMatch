import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [_candidates, setCandidates] = useState<Array<any>>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>
  (JSON.parse(localStorage.getItem('savedCandidates') || '[]'));
  const [singleCandidate, setSingleCandidate] = useState<Candidate>({
    login: "",
    avatar_url: "",
    html_url: "",
  });



  const fetchCandidates = async () => {
    const data: Array<any> = await searchGithub();
    const login = data.pop().login;
    
    setCandidates(data);

    const candidate = await searchGithubUser(login);
    setSingleCandidate(candidate);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

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
        <img src={singleCandidate.avatar_url || 'default-avatar.png'} alt="Candidate Avatar" />
        <h2>{singleCandidate?.name || ''} {singleCandidate.login}</h2>
        <p>Location: {singleCandidate?.location || 'Where in the world is Carmen SanDiego?'}</p>
        <p>Email: {singleCandidate?.email || 'Not today!'}</p>
        <p>Company: {singleCandidate?.company || 'N/A'}</p>
        <p>Bio: {singleCandidate?.bio || 'work in progress'}</p>
      </article>

  <div className="button-group">
        <button className="reject-button" type='button' title='Reject candidate' onClick={Rejected}>-</button>  
        <button className="accept-button" type='button' title='Save candidate' onClick={Accepted}>+</button>
      </div>    </>
  );
};

export default CandidateSearch;