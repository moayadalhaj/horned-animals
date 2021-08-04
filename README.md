# Horned Animals project
it is an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

# lab02
-------

## Feature #1: Display images
Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

What are we going to implement?

- Given that a user opens the application in the browser

- When the user navigates to the home page, then the photo gallery should display all of the images in the gallery

How are we implementing it?

- The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

Estimate of time needed to complete: 1 hour

Start time: 5:00

Finish time: 5:30

Actual time needed to complete: 30 minutes

## Feature #2: Allow users to vote for their favorite beast

Why are we implementing this feature?

- As a user, I want to be able to interact with the site and pick my favorite beast.
What are we going to implement?

- Given that a user clicks on an image, the number of “favorites” displayed on that image will increase by one.

How are we implementing it?

- Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

- Put a heart in each horned beast with the number of times it was “favorited” next to it.

Estimate of time needed to complete: 1 hour

Start time: 5:30

Finish time: 6:00

Actual time needed to complete: 30 minutes

## Feature 3: Bootstrap

Why are we implementing this feature?

As a user, I want to see a visually pleasing application that is also reponsive when I view 
this application on different screen sizes.

What are we going to implement?

- Given that a user opens the application in the browser

- When the images are displayed on the screen

- Then each image should be rendered in a visually pleasing way
The images should be displayed in columns, as screen width allows

How are we implementing it?

- Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

Estimate of time needed to complete: 2

Start time: 9:00

Finish time: 11:30

Actual time needed to complete: 2:30

# Lab03
------

## Feature #1: Display a Modal

Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

What are we going to implement?

- Given that a user wants to view the details of the image  

- When the user clicks on an individual image  

- Then the image should render larger on the screen with the description displayed

Estimate of time needed to complete: 2

Start time: 3:00

Finish time: 4:30

Actual time needed to complete: 1:30

# Lab04
-----

## Feature 1. Filter by Numbers of Horns

Why are we implementing this feature?

- As a user, I want to be able to view the beasts by the number of horns

What are we going to implement?

- Given that a user is presented with filtering options  

- When the user clicks on one option  

- Then the images should be filtered accordingly

How are we implementing it?

- Using the `Form` component of `react-bootstrap`, build a drop down menu so that the user can choose to filter by number of horns.
- When the user chooses one of the options, the correct images should be displayed.

Estimate of time needed to complete: 1

Start time: 2:00

Finish time: 3:30

Actual time needed to complete: 1:30
