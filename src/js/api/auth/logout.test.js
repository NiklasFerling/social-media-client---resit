import { logout } from './logout.js';

global.window = Object.create(window);
Object.setPrototypeOf(global.window, window.__proto__);

describe('Logout Function', () => {

  it('clears the token and profile from localStorage', () => {
    window.localStorage.setItem('token', 'testToken');
    window.localStorage.setItem('profile', JSON.stringify({ name: 'John Doe' }));

    logout();

    expect(window.localStorage.getItem('token')).toBeNull();
    expect(window.localStorage.getItem('profile')).toBeNull();
  });
});