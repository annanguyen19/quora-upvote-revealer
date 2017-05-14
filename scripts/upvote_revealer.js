/**
 * Removes the given class from all elements identified by the given selector.
 * @elementSelector the element selector string.
 * @classToRemove the name of the class to remove
 */
function removeClassFromElements(elementSelector, classToRemove) {
	const elements = document.querySelectorAll(elementSelector);

	[].forEach.call(elements, function(element) {
		element.classList.remove(classToRemove);
	})
}

// Show the upvote count by disabling the 'hide_in_feed' class from all
// elements of class 'count'.
const showUpvoteCount = function() {
	removeClassFromElements('.count.hide_in_feed', 'hide_in_feed');
};

// All the events that are observable by showUpvoteCount().
var events = ['scroll'];

// Show the upvote count on page load. If the page has already loaded,
// then showUpvoteCount() will be directly executed. Otherwise, the function
// will be registered as an event listener.
if (document.readyState === 'complete') {
	showUpvoteCount();
} else {
	events.push('load');
}

events.forEach(function(event) {
	window.addEventListener(event, showUpvoteCount);
})