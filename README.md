### Questions and Answers.

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans. getElementById search a unique id in the html file where getElementsByClassName has multiple class with the same name in the file & querySelector finds the 1st element in the file that matches where querySelectorAll gets all which matches the classname.

2. How do you **create and insert a new element into the DOM**?
Ans. By using the document.createElement() we can create new and by appendChild() we can insert element into the DOM.

3. What is **Event Bubbling** and how does it work?
Ans. By Event Bubbling i understand when we want to catch a target element in the DOM we can go towards it and ultimately reach the target destination it calls bubbling. It uses target element and Event Handler.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans.Event Delegation improves both the performance and maintainability of your code, especially when dealing with dynamic content or a large number of elements.Event Delegation is a useful pattern that allows you to write cleaner code, and create fewer event listeners with similar logic.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans. preventDefault() this method stops the default action of the element and stopPropagation() stops the propagation to go further up in the DOM.
