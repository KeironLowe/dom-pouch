type ListenerElements<T> = Window | Document | T;


/**
 * Loops through the elements and events and binds them.
 *
 * @template T
 * @param {ListenerElements<T>[]} elements
 * @param {string[]} events
 * @param {(element: ListenerElements<T>, event: Event) => void} callback
 */
function setListeners<T extends Element>(elements: ListenerElements<T>[], events: string[], callback: (element: ListenerElements<T>, event: Event) => void): void {
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
 * @param {(ListenerElements<T> | ListenerElements<T>[])} elements
 * @param {(string | string[])} events
 * @returns {[ListenerElements<T>[], string[]]}
 */
function prepareData<T extends Element>(elements: ListenerElements<T> | ListenerElements<T>[], events: string | string[]): [ListenerElements<T>[], string[]] {

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
 * @param {(ListenerElements<T> | ListenerElements<T>[])} elements
 * @param {(string | string[])} events
 * @param {(element: ListenerElements<T>, event: Event) => void} callback
 */
export function listen<T extends HTMLElement>(elements: ListenerElements<T> | ListenerElements<T>[], events: string | string[], callback: (element: ListenerElements<T>, event: Event) => void): void {
    [elements, events] = prepareData(elements, events);
    setListeners(elements, events, callback);
}


/**
 * Creates an event which is compatible with IE11
 *
 * @export
 * @param {string} eventName
 * @returns {Event}
 */
export function createEvent(eventName: string): Event {
    let event;
    if (typeof(Event) === 'function') {
        event = new Event(eventName);
    } else {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}
