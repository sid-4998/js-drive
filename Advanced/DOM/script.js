// When a web page is loaded the the browser creates
// a document object model of the page and treats each 
// HTML element as an object. This DOM is a tree of 
// HTML elements represented as objects

// Capabilities of Javascript with DOM
// 1. JavaScript can change all the HTML elements in the page
// 2. JavaScript can change all the HTML attributes in the page
// 3. JavaScript can change all the CSS styles in the page
// 4. JavaScript can remove existing HTML elements and attributes
// 5. JavaScript can add new HTML elements and attributes
// 6. JavaScript can react to all existing HTML events in the page
// 7. JavaScript can create new HTML events in the page

// What is DOM?

// DOM is a platform and a language-neutral interface which allows programs
// and scripts to dynamically access and update the content, structure and style 
// of a document. DOM is a W3C(World Wide Web Consortium) Standard

// What is HTML DOM?
// It is the standard object model and programming interface for HTML.
// It defines HTML elements as objects 
// It defines properties for each HTML elements
// It defines methods to access all HTML elements
// It defines events for each HTML element

// At the top of the Object tree there is the document object
// The document object is the owner of all other HTML objects
// HTML DOM methods are actions we perform on HTML Elements
// HTML DOM properties are values of HTML elements that we can set or change


// Finding HTML Elements

let element = document.getElementById("first");
console.log(element); // See the output in browser console since document is
// a browser object
// Here 'first' is the ID of the div HTML element;

console.log(document.getElementsByClassName("div")); 
// This returns an HTML Collection
// The first element of this collection is our HTML element
// In order to access the element use the array index property 
// Here 'div' is the class name of our HTML element

console.log(document.getElementsByClassName("div")[0]);

console.log(document.getElementsByTagName("div"));
// Similar to getElementByClassName, getElementByTagName also
// returns a HTML collection with our element at the first position
// Here 'div' is the name of our HTML tag

console.log(document.getElementsByTagName("div")[0]);

// Using CSS Selectors

console.log(document.querySelector("#first"));
// This method finds a single HTML element with ID first

console.log(document.querySelectorAll(".div"));
// This method returns a NodeList of all HTML
// elements with class name div
// A NodeList is an array of HTML elements defined as objects
// with properties and methods along with their values

let nodes = document.querySelectorAll("div");
for(const node of nodes) console.log(node);

// Using HTML Object Collections

let collection = document.body;
console.log(collection);
// Here document.body returns the body element
console.log(collection.children);
// Every Node has some properties and methods along with some values
// Check the above logs in browser console to learn about them
// collection.children returns a HTML collection of childNodes of the body element
console.log(collection.childElementCount);

for(const child of collection.children) console.log(child);

// Changing CSS using DOM 
document.getElementById("first").style.backgroundColor = 'red';
// We can access each and every CSS property and change its value using the style method

// DOM Events and event handlers are already read and implemented in various projects

// Event Bubbling and Event Capturing
// There are two ways of event propagation in HTML DOM
// 1. Event Bubbling 
// 2. Event Capturing

// Event Propagation
// This is a way of defining the order of elements on which an event occurs
// Suppose there is a paragraph element inside a div element and 
// both of them have the same event 'onclick'. 
// When the user clicks the paragraph element which element's event
// should get triggered? 

// In event bubbling the inner most element's events gets triggered first
// followed the outer elements whereas in event capturing the outer most 
// element's event gets triggered first followed by inner elements.

// We can define the type of propagation by specifying the value of the
// boolean parameter useCapture

// element.addEventListener('event', function, useCapture);
// By default the value of useCapture parameter is false
// specifying that event bubbling should be performed during 
// event propagation. If we set the useCapture parameter value to 
// true we specify that the process of event propagation should 
// be event capturing.

// Nodes
// According to W3C everything in an HTML document is a node
// The entire document is a document node
// Every HTML element is a element node
// The attribute of an HTML element is a attribute node
// The text is a text node
// The comment is a comment node
// Each node has some properties and methods associated with it

//Adding and Deleting Elements

// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	            Write into the HTML output stream


//  DOM Navigation
// <html></html> is the root node 
// It has no parents
// The root node has 2 childNodes <head></head> and <body></body>
// The head node is the firstChild of the root node
// The body node is the lastChild of the root node
// Both the head and body node have a parentNode which is the root node
// The nextSibling of head node is the body node
// The previousSibling of body node is the head node
// The title node has a single childNode which is a text node
// The head node has 9 childNodes in the current HTML document

const childrenOfRootNode = document.documentElement.childNodes;
console.log(childrenOfRootNode);
// This returns a NodeList of three nodes which are
// 1. Head node
// 2. Body node
// 3. text node (newline character '/n' stored as a string is considered as a text node)

const childrenOfHeadNode = document.head.childNodes;
console.log(childrenOfHeadNode);
// The NodeList has 9 nodes

const childOfTitleNode = document.getElementsByTagName("title")[0].childNodes;
console.log(childOfTitleNode);

console.log(document.head.firstChild);
console.log(document.head.firstChild.nextSibling);
console.log(document.head.firstChild.nextSibling.parentNode);
console.log(document.head.lastChild);
console.log(document.head.lastChild.previousSibling);

console.log(document.body.firstChild);
console.log(document.body.firstChild.nextSibling);
console.log(document.body.firstChild.nextSibling.parentNode);
console.log(document.body.lastChild);
console.log(document.body.lastChild.previousSibling);
console.log(document.body.lastChild.previousSibling.previousSibling);

const paragraph1 = document.createElement("p");
const childTextNodeOfParagraph = document.createTextNode("This is a new paragraph element's text node");
paragraph1.appendChild(childTextNodeOfParagraph);

document.getElementById("first").appendChild(paragraph1);

const heading = document.createElement("h1");
const textNodeChildOfHeading = document.createTextNode("DOM Manipulation in HTML");
heading.appendChild(textNodeChildOfHeading);

document.body.insertBefore(heading, document.getElementById("first"));
// The appendChild() method adds chidren from the bottom of the node tree of the parent
// node whereas with the insertBefore() method we can add a child node before any of the
// existing child nodes of the parent node.

document.getElementById("first").removeChild(paragraph1);

const newHeading = document.createElement("h1");
const textNodeChildOfNewHeading = document.createTextNode("HTML DOM");
newHeading.appendChild(textNodeChildOfNewHeading);
document.body.replaceChild(newHeading, heading);

// Difference between HTML Collections object and NodeList object
// HTML Collections object is always dynamic, meaning they change as
// we try to add a HTML element to a parent node forming the HTML Collections
// or remove a HTML element from a parent node forming the HTML Collections
// whereas a NodeList retured by querySelectorAll() method is static
// and by childNodes property is dynamic
// Both HTML Collections object and NodeList object are array like lists
// And not exactly arrays, so we cannot use array methods on them except
// the length method. 