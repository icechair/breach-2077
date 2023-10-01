// See https://kit.svelte.dev/docs/types#app

import type { CV } from "@techstark/opencv-js";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  CV
}

export {};
