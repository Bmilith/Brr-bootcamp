# Brr-bootcamp
Button - task

Create a new project using create-react-app.

Create a private GitHub repository for the task and add the "blazingedge-engineering" user as a collaborator.

Push the initial commit without your changes.

You can run it with npm start.

Replace the p tag with components specified below.

Button specification:

clicking the button should get a random color from GET http://www.colr.org/json/color/random
use the random color for the text of the button
add the previous color to the list described below, but only if not already listed
List specification:

Lists previous (unique) text colors.
1 color per line
Printed in hex and using that color
Currently applied color should be bolded (highlighted)
Add functionality to move colors up and down (arrows or drag-n-drop)
Bonus: At the end of the list, add an input field to manually enter the next color (on enter key)
If input text is not a valid hex color, show an error message.
The new color is used to color the text in the button above
And if new, add it to the list
Text Input specifications:

Changing the text on the input should change the text in the button above.
Notes:

No requirements regarding implementation.
Extra points for functional components and hooks.
Extra points for nice UI, but keep it clean. Prefer function over aesthetics.
Feel free to add dependencies.
You can use the Fetch API.
Push your changes.
