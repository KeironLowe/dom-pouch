declare type ListenerElements<T> = Window | Document | T;
/**
 * Prepares the data for use then binds the event listeners
 *
 * @export
 * @template T
 * @param {(ListenerElements<T> | ListenerElements<T>[])} elements
 * @param {(string | string[])} events
 * @param {(element: ListenerElements<T>, event: Event) => void} callback
 */
export declare function listen<T extends HTMLElement>(elements: ListenerElements<T> | ListenerElements<T>[], events: string | string[], callback: (element: ListenerElements<T>, event: Event) => void): void;
/**
 * Creates an event which is compatible with IE11
 *
 * @export
 * @param {string} eventName
 * @returns {Event}
 */
export declare function createEvent(eventName: string): Event;
export {};
