// utils/storage.js

class StorageUtil {
  // Local Storage
  static setLocalStorage(key: string, value: any) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getLocalStorage(key: string) {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  }

  static removeLocalStorage(key: string) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  // Session Storage
  static setSessionStorage(key: string, value: any) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  static getSessionStorage(key: string) {
    if (typeof window !== "undefined") {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  }

  static removeSessionStorage(key: string) {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(key);
    }
  }

  // Cookies
  static setCookie(name: any, value: any, days = 7) {
    if (typeof window !== "undefined") {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
  }

  static getCookie(name: any) {
    if (typeof window !== "undefined") {
      const nameEQ = `${name}=`;
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    return null;
  }

  static deleteCookie(name: any) {
    if (typeof window !== "undefined") {
      document.cookie = `${name}=; Max-Age=-99999999;`;
    }
  }
}

export default StorageUtil;
