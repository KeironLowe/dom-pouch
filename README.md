# Dom Pouch

Dom Pouch provides a variety of helper methods written in TypeScript for interacting with the DOM and reducing the amount of code needed to perform simple tasks.

## Installation
```
// Yarn
yarn add dom-pouch

// NPM
npm install dom-pouch
```

## Usage
Just import the methods you need
```
import { findFirst } from 'dom-pouch';
```

## Methods

### Selectors

#### `find(selector: stering, context: Document | Element = document): Element[]`
Returns an array of all elements which match the selector string.

#### `findFirst(selector: string, context: Document | Element = document): Element`
Returns the first element which matches the selector string.

---

### Attributes

#### `getAttr(element: Element, attribute: string): string | null`
Returns the value of an attribute for the element.

#### `setAttr(element: Element, attribute: string, value: string): void`
Sets the value of an attribute for the element.

#### `setDataAttr(element: HTMLElement | SVGElement, attribute: string, value: string): void`
Sets the value of a data attribute for the element.

#### `getDataAttr(element: HTMLElement | SVGElement, attribute: string): string | null`
Returns the value of a data attribute for the element.

#### `toggleAttrVal(element: Element, attribute: string, valueOne: string, valueTwo: string): void`
Toggles an attribute between two values for the element.

---

### Events

#### `listen<T extends HTMLElement>(elements: T | T[], events: string | string[], callback: (element: T, event: Event) => void): void`
Simple way of binding multiple events to multiple elements. Both elements and events accept either a single item or an array of items. The callback method passes the element as the first argument followed by the event object. By defualt, the passed element in the callback has the type of HTMLElement, but this can be changed by passing a type variable, e.g...

```
listen<HTMLFormElement>(forms, 'submit', (form, event) => {
    // The form argument is of type HTMLFormElement
});
```

#### `createEvent(eventName: string): Event`
Creates a new event which is compatible with IE11
