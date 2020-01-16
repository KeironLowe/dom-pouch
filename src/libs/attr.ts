/**
 * Returns the value of an attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
export function getAttr(element: HTMLElement, attribute: string): string | null {
    return element.getAttribute(attribute) ?? null;
}


/**
 * Sets the value of an attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
export function setAttr(element: HTMLElement, attribute: string, value: string): void {
    element.setAttribute(attribute, value);
}


/**
 * Sets the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
export function setDataAttr(element: HTMLElement, attribute: string, value: string): void {
    element.dataset[attribute] = value;
}


/**
 * Returns the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
export function getDataAttr(element: HTMLElement, attribute: string): string | null {
    return element.dataset[attribute] ?? null;
}


/**
 * Toggles an attribute between two values for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} valueOne
 * @param {string} valueTwo
 */
export function toggleAttrVal(element: HTMLElement, attribute: string, valueOne: string, valueTwo: string): void {
    if(element.getAttribute(attribute) === valueTwo) {
        element.setAttribute(attribute, valueOne);
    } else {
        element.setAttribute(attribute, valueTwo);
    }
}
