export default class LocalStorageHelper {
  static setItemLocally = (key: string, value: unknown): void => {
    if (value !== undefined && value !== null) {
      localStorage.setItem(key, String(value));
    }
  };

  static getItemLocally(key: string): string | null {
    return localStorage.getItem(key);
  }

  static deleteItemLocally(key: string): void {
    localStorage.removeItem(key);
  }

  static deleteAll(): void {
    localStorage.clear();
  }
}
