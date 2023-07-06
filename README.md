## Namaste React

# React Components, Elements, and Instances

An element is a plain object describing a component instance or DOM node and its desired properties. It contains only information about the component type (for example, a Button), its properties (for example, its color), and any child elements inside it.

An element is not an actual instance.

DOM Elements
When an element’s type is a string, it represents a DOM node with that tag name, and props correspond to its attributes. This is what React will render. For example:

```
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

```

This element is just a way to represent the following HTML as a plain object:

```
<button class='button button-blue'>
  <b>
    OK!
  </b>
</button>

```

React elements are easy to traverse, don’t need to be parsed, and of course they are much lighter than the actual DOM elements—they’re just objects!


