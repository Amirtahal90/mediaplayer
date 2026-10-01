export function debounce(fn, wait = 0) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); }; }
