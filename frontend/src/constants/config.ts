export const API_SERVER = process.env.REACT_APP_API_SERVER || 'http://localhost:8000';
export const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN || 'access-token';
export const PAGE_LIMIT = 10;

export const Hosts = [
  { type: 'github', host: 'github.com', label: 'Github' },
  { type: 'bitbucket', host: 'bitbucket.org', label: 'Bitbucket' },
  { type: 'gitlab', host: 'gitlab.com', label: 'Gitlab' },
  { type: 'azure', host: 'azure.microsoft.com', label: 'Azure DevOps' },
];
