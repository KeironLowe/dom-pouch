/**
 * Loops through the elements and events and binds them.
 *
 * @template T
 * @param {T[]} elements
 * @param {string[]} events
 * @param {(element: T, event: Event) => void} callback
 */
function setListeners<T extends Element>(elements: T[], events: string[], callback: (element: T, event: Event) => void): void {
    elements.forEach(element => {
        events.forEach(event => {
            element.addEventListener(event, event => callback(element, event));
        });
    });
}


/**
 * Prepares the data for easier use, converts single values into arrays
 *
 * @template T
 * @param {(T | T[])} elements
 * @param {(string | string[])} events
 * @returns {[T[], string[]]}
 */
function prepareData<T extends Element>(elements: T | T[], events: string | string[]): [T[], string[]] {

    // If the element isn't an array, add it to one for each of use later
    if(!Array.isArray(elements)) {
        elements = [elements];
    }

    // Same with the events
    if(!Array.isArray(events)) {
        events = [events];
    }

    return [elements, events];
}


/**
 * Prepares the data for use then binds the event listeners
 *
 * @export
 * @template T
 * @param {(T | T[])} elements
 * @param {(string | string[])} events
 * @param {(element: T, event: Event) => void} callback
 */
export function listen<T extends HTMLElement>(elements: T | T[], events: string | string[], callback: (element: T, event: Event) => void): void {
    [elements, events] = prepareData(elements, events);
    setListeners(elements, events, callback);
}
