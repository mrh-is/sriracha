**************************************

get that sriracha!

is a javascript game created by:
jennifer tran (jtran1)
michael helmbrecht (mhelmbre)
michelle lew (mlew1)

29 jan 2013

**************************************

HOW TO PLAY

Goal is for player to cover the surface of the bowl of food with sriracha sauce before the hunger bar reaches 100%.  Player can use the arrow keys to move the bottle of sriracha around the screen; spacebar toggles the bottle valve opening and closing.

There are 5 levels.  With each level, the bowl gets smaller, BUT the allotted time before 100% hunger gets shorter and the player is required to cover a greater percentage of the bowl in order to get to the next level.  If a player loses, they have to start over from level 1.

CONCEPTS FROM LECTURE

First-Class Functions:
- Uses first class functions to assign methods to objects

Closures:
- 

Arrays:
- Uses array to store status of "filled" status of each bowl grid square

Math:
- uses max, min, and round to implement progress bar/colors
- uses math to calculate boundaries of colorable bowl area, coloring grid, etc

Objects:
- created object constructors for each major element (level, bottle, schloo, bowl, bars)

Canvas:
- Makes use of drawn rectangles/paths and text for the "hunger bar" and the "progress bar," as well as the text instructions and win/lose messages.
- Alpha transparency is used for coloring on the background of the win/lose messages.

Events:
- Uses keyboard events to track direction of movement (up/right/left/down) and spacebar toggle.

Timer Events:
- Uses setInterval to redraw objects on the canvas as elements get updated.

Images and Sprites:
- Uses PNG files as primary illustrations for background, player animations, and bottle cursor.
- Uses sprites for illustration of player animations to optimize image loading



