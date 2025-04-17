// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    name?: string;
    email?: string;
    avatar_url: string;
    html_url: string;
    company?: string;
    location?: string;
    bio?: string;
    }