/**
 * Loops through the elements and events and binds them.
 *
 * @template T
 * @param {T[]} elements
 * @param {string[]} events
 * @param {(element: T, event: Event) => void} callback
 */
function setListeners(elements, events, callback) {
    elements.forEach(function (element) {
        events.forEach(function (event) {
            element.addEventListener(event, function (event) { return callback(element, event); });
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
function prepareData(elements, events) {
    // If the element isn't an array, add it to one for each of use later
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    // Same with the events
    if (!Array.isArray(events)) {
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
function listen(elements, events, callback) {
    var _a;
    _a = prepareData(elements, events), elements = _a[0], events = _a[1];
    setListeners(elements, events, callback);
}
/**
 * Creates an event which is compatible with IE11
 *
 * @export
 * @param {string} eventName
 * @returns {Event}
 */
function createEvent(eventName) {
    var event;
    if (typeof (Event) === 'function') {
        event = new Event(eventName);
    }
    else {
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}

/**
 * Returns all elements which match the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | Element)} [context=document]
 * @returns {Element}
 */
function find(selector, context) {
    if (context === void 0) { context = document; }
    return Array.from(context.querySelectorAll(selector));
}
/**
 * Returns the first element which matches the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | Element)} [context=document]
 * @returns {Element}
 */
function findFirst(selector, context) {
    if (context === void 0) { context = document; }
    return context.querySelector(selector);
}

/**
 * Returns the value of an attribute for the element.
 *
 * @export
 * @param {Element} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
function getAttr(element, attribute) {
    var _a;
    return _a = element.getAttribute(attribute), (_a !== null && _a !== void 0 ? _a : null);
}
/**
 * Sets the value of an attribute for the element.
 *
 * @export
 * @param {Element} element
 * @param {string} attribute
 * @param {string} value
 */
function setAttr(element, attribute, value) {
    element.setAttribute(attribute, value);
}
/**
 * Sets the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement | SVGElement} element
 * @param {string} attribute
 * @param {string} value
 */
function setDataAttr(element, attribute, value) {
    element.dataset[attribute] = value;
}
/**
 * Returns the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement | SVGElement} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
function getDataAttr(element, attribute) {
    var _a;
    return _a = element.dataset[attribute], (_a !== null && _a !== void 0 ? _a : null);
}
/**
 * Toggles an attribute between two values for the element.
 *
 * @export
 * @param {Element} element
 * @param {string} attribute
 * @param {string} valueOne
 * @param {string} valueTwo
 */
function toggleAttrVal(element, attribute, valueOne, valueTwo) {
    if (element.getAttribute(attribute) === valueTwo) {
        element.setAttribute(attribute, valueOne);
    }
    else {
        element.setAttribute(attribute, valueTwo);
    }
}

export { createEvent, find, findFirst, getAttr, getDataAttr, listen, setAttr, setDataAttr, toggleAttrVal };
