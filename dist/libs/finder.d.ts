/**
 * Returns all elements which match the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | HTMLElement)} [context=document]
 * @returns {HTMLElement}
 */
export declare function find(selector: string, context?: Document | HTMLElement): HTMLElement[];
/**
 * Returns the first element which matches the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | HTMLElement)} [context=document]
 * @returns {HTMLElement}
 */
export declare function findFirst(selector: string, context?: Document | HTMLElement): HTMLElement;
