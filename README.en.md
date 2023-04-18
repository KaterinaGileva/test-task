Social Media Profile Component
This is a React component that displays a social media profile. The profile includes the user's name, avatar image, number of tweets, and number of followers. The component also includes a button to follow or unfollow the user.

Installation
Clone the repository on your local machine.
Install dependencies using the following command:
npm install
Start the development server:
npm start
Open a web browser and navigate to http://localhost:3000 to view the program.

Usage
To use the ProfileMarkup component, pass the following properties:

user: a string representing the user's name
id: a number representing the user's identifier
avatar: a string representing the path to the user's avatar image
tweets: a number representing the total number of user's tweets
followersCount: a number representing the total number of user's followers
isFollowing: a boolean value indicating whether the current user is following the user whose profile is being displayed

Local Storage
The component uses localStorage to store the state of the follow button and the number of followers. When the Follow button is clicked, the state is stored in localStorage and retrieved upon loading the component.



