import * as L from 'leaflet';

declare module 'leaflet' {
  namespace control {
    function fullscreen(options?: FullscreenOptions): Fullscreen;
  }

  interface FullscreenOptions {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    title?: string;
    titleCancel?: string;
  }

  class Fullscreen extends Control {
    constructor(options?: FullscreenOptions);
  }
}

declare global {
  interface HTMLElement {
    _leaflet_id?: number;
  }
}