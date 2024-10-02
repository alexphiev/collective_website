declare global {
  interface Window {
    sa_event?: (eventName: string) => void;
  }
}

export const saEvent = (eventName: string) => {
  if (window && window.sa_event) return window.sa_event(eventName);
};