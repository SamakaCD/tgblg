export const fetchWithCorsAnywhere = (input: RequestInfo, init?: RequestInit) =>
  fetch(`https://cors-anywhere.herokuapp.com/${input}`, init);
