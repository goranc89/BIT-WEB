/*Intro
Create a page that is using the jQuery library
Print ‘Hello, world!’ in console when DOM loads */
$(function () {
  console.log('Hello World');
});
$('li').click(function () {
  $(this).remove();
}); //removing element 'li' onclick;
