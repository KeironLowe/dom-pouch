/**
 * Returns all elements which match the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | Element)} [context=document]
 * @returns {Element}
 */
export function find(selector: string, context: Document | Element = document): Element[] {
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
export function findFirst(selector: string, context: Document | Element = document): Element {
    return context.querySelector(selector);
}
