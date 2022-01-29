# ObserverJS
Implementation of Observer Pattern in JS


How-to:

Add as many buttons and checkboxes as you want using 'Add Button' and 'Add Checkbox'. Initially, no checkbox is listening to no button.

Use 'Set Listeners' to change app state. In this state, you can check the checkboxes and click on buttons, that you want them to listen. After adding all listeners, click 'Setting Listeners!' button to revert the app state. Now, you can press buttons and see listening checkboxes being checked or unchecked.

Things to repair:
1. You can pair the same checkbox and button again. It would looks like you remove the observer but actually you notify the checkbox twice. That means, checkbox changes state twice - going to initial state. (Add removing observers via html element - code for it is there).
