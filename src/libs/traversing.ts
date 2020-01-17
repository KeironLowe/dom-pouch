/**
 * Removes an element from the DOM
 *
 * @export
 * @param {Element} element
 */
export function removeElement(element: Element): void {
    const parent = element.parentNode;
    if(parent) parent.removeChild(element);
}


/**
 * Inserts the element after the reference element.
 *
 * @export
 * @param {Element} elementToInsert
 * @param {Element} referenceElement
 */
export function insertAfter(elementToInsert: Element, referenceElement: Element): void {
    const parent = referenceElement.parentNode;
    if(parent) parent.insertBefore(elementToInsert, referenceElement.nextSibling);
}


/**
 * Inserts the element before the reference element
 *
 * @export
 * @param {Element} elementToInsert
 * @param {Element} referenceElement
 */
export function insertBefore(elementToInsert: Element, referenceElement: Element): void {
    const parent = referenceElement.parentNode;
    if(parent) parent.insertBefore(elementToInsert, referenceElement);
}


/**
 * Add's an element to the start of the parentElement
 *
 * @export
 * @param {Element} elementToInsert
 * @param {Element} parentElement
 */
export function prependElement(elementToInsert: Element, parentElement: Element): void {
    if(parentElement) parentElement.insertBefore(elementToInsert, parentElement.firstElementChild);
}


/**
 * Add's an element to the end of the parentElement
 *
 * @export
 * @param {Element} elementToInsert
 * @param {Element} parentElement
 */
export function appendElement(elementToInsert: Element, parentElement: Element): void {
    if(parentElement) parentElement.appendChild(elementToInsert);
}
