/**
 * Returns all elements which match the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | Element)} [context=document]
 * @returns {Element}
 */
export declare function find(selector: string, context?: Document | Element): Element[];
/**
 * Returns the first element which matches the selector.
 *
 * @export
 * @param {string} selector
 * @param {(Document | Element)} [context=document]
 * @returns {Element}
 */
export declare function findFirst(selector: string, context?: Document | Element): Element;
