# SportSee
Welcome to the SportSee User Profile Page project! This project aims to provide users with an enhanced profile page experience, allowing them to track their sessions and calories burned effectively.
## About SportSee
SportSee is a growing startup dedicated to sports coaching. As part of our expansion efforts, we are launching a new version of the user profile page to offer enhanced features and better insights into users' fitness journeys.
## Project Overview
The user profile page revamp will include features such as tracking the number of sessions completed and the calories burned. This information will be presented to users in the form of intuitive graphs, providing a clear visualization of their fitness progress over time.
## API Endpoints
This project consumes the following API endpoints:

[API OpenClassRooms](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
1. **User Information Endpoint:**
    - Endpoint: `/user/${userId}`
    - Description: Retrieves information about a user, including their first name, last name, age, today's score, and key data such as calorie intake and macronutrients.
2. **User Activity Endpoint:**
    - Endpoint: `/user/${userId}/activity`
    - Description: Retrieves a user's activity data day by day, including kilograms and calories burned.
3. **Average Sessions Endpoint:**
    - Endpoint: `/user/${userId}/average-sessions`
    - Description: Retrieves the average number of sessions completed by a user per day, with the week starting on Monday.
4. **Performance Endpoint:**
    - Endpoint: `/user/${userId}/performance`
    - Description: Retrieves a user's performance metrics such as energy levels and endurance.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install any necessary dependencies.
3. Run the project locally or deploy it to your preferred hosting environment.
4. uncomment
```sh
REACT_APP_MOCK_DATA=false
```
4. Ensure that the [API](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) endpoints are correctly configured and accessible.

## Technologies Used

- Frontend: [React](https://reactjs.org) - [React Router](https://reactrouter.com), [ReCharts](https://recharts.org)
