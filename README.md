# day-planner
A day planner app for managing time blocks during normal business hours

![Screenshot of the complete application](...)

## About
This day planner application dynamically generates time blocks for normal business hours (9 AM through 5 PM).

Each block contains the time, a textarea input, and a save button. Users can enter notes into the textarea and, when the save button is pressed, the item will be saved to localstorage.

When the page is loaded, the application checks if the page was last loaded today. If not, it clears the localstorage.

If the date is the same, it pulls the items from localstorage and displays them.

## Deployment

The page repository can be found at [the GitHub page](https://github.com/chriseld/day-planner).
The deployed version of the page can be found at [GitHub Pages](https://chriseld.github.io/day-planner/).