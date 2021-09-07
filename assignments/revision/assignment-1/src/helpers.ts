export const HTML_CONSTANTS = {
  start: `<!DOCTYPE html><html lang="en"><head><title>Assignment 1 (revision)</title></head><body>`,
  end: `</body></html>`,
  list: `<ul><li>C</li><li>C++</li><li>Java</li><li>Python</li><li>TypeScript</li></ul>`
} as const;

export const HTTP_METHODS = { GET: 'GET', POST: 'POST' } as const;

export const ROUTE_CONSTANTS = {
  root: '/',
  users: '/users',
  createUser: '/create-user'
} as const;

export const getGreeting = () => {
  const hoursNow = new Date().getHours();
  return `Good ${hoursNow < 12 && hoursNow >= 4 ? 'Morning' : hoursNow > 12 && hoursNow < 16 ? 'Afternoon' : 'Evening'}!`;
};
