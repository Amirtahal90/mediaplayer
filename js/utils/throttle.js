export function throttle(fn, wait = 0) { let ready = true; return (...args) => { if (!ready) return; ready = false; fn(...args); setTimeout(() => { ready = true; }, wait); }; }
