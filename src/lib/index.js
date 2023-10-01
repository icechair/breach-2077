// place files you want to import through the `$lib` alias in this folder.
import { browser } from "$app/environment";

/** @return {Promise<void>} */
export function waitForCv() {
  return new Promise((resolve, reject) => {
    if (!browser) {
      return reject();
    }

    let timeout = setTimeout(() => {
      if (window.hasOwnProperty("cv")) {
        clearTimeout(timeout);
        resolve();
      }
    }, 100);
  });
}
