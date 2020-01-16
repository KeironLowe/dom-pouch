/**
 * Returns all elements which match the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | HTMLElement)} [context=document]
 * @returns {HTMLElement}
 */
export function find(selector: string, context: Document | HTMLElement = document): HTMLElement[] {
    return Array.from(context.querySelectorAll(selector));
}


/**
 * Returns the first element which matches the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | HTMLElement)} [context=document]
 * @returns {HTMLElement}
 */
export function findFirst(selector: string, context: Document | HTMLElement = document): HTMLElement {
    return context.querySelector(selector);
}
