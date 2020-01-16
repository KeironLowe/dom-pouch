/**
 * Returns the value of an attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
export declare function getAttr(element: HTMLElement, attribute: string): string | null;
/**
 * Sets the value of an attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
export declare function setAttr(element: HTMLElement, attribute: string, value: string): void;
/**
 * Sets the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
export declare function setDataAttr(element: HTMLElement, attribute: string, value: string): void;
/**
 * Returns the value of a data attribute for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @returns {(string | null)}
 */
export declare function getDataAttr(element: HTMLElement, attribute: string): string | null;
/**
 * Toggles an attribute between two values for the element.
 *
 * @export
 * @param {HTMLElement} element
 * @param {string} attribute
 * @param {string} valueOne
 * @param {string} valueTwo
 */
export declare function toggleAttrVal(element: HTMLElement, attribute: string, valueOne: string, valueTwo: string): void;
