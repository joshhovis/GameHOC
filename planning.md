# Project Two

## GameHOC Pitch:

-   **Team: It Works on Local**

    -   Joshua Hovis
    -   David Oliveros
    -   Sam Cowing

-   **App Name**

    -   GameHOC

-   **Description**

    -   A comprehensive database of games for users to browse by categories and learn more about selected games. Users can make collections and then save games to specific collections of their choice. Collections can be deleted or modified by the user.
    -   Key to the game data will be using the RAWG.io API (GET https://api.rawg.io/api/). The team has completed successful testing to ensure this will not be a potential blocker.

-   **Wirefames**

    ![Insert Image here](https://i.imgur.com/nMnpJsY.png)
    ![Insert Image here](https://i.imgur.com/dfoVNzc.png)
    ![Insert Image here](https://i.imgur.com/zBK1tIc.png)
    ![Insert Image here](https://i.imgur.com/Zoq8xuk.png)

    -   Figma Link: (https://www.figma.com/file/MXjOQCxlmF8a7gr5v8Lu8C/Project-2-Wireframe?node-id=0%3A1)

-   **User Stories**

    -   As a user I want to find games I'm interested in by navigating threw categories so that I can determine if there are games I would like to buy
    -   As a uesr I want to be able to click on games I'm interested in so that I can learn more about them
    -   As a user I want to save games I'm interested in so that I can view them later or compare
    -   As a user I want to be able to create individual collections of games based on any criteria I determine
        As a user I want to be able to add games to my collection lists
    -   As a user I want to be abel to edit or delete any collections as needed

-   **MVP Goals**

    -   Homepage of specific featured (new/trending) games
    -   Categories page where you can view game by selecting categories in the nav
    -   Game detail page where you can find info on a selected game
    -   Collections page of all user made collections
    -   Collection or list page that displays the contents of a given collection
    -   User will have the ability to create, edit and modify their collections
    -   User will be able to add games to a collection from any game category or detail page

-   **ERD**

    ![Insert Image here](https://i.imgur.com/oWl7SAt.png)

-   **Routing Charts**

Home Routes

|  #  | Action  |              Functionality              | URL | Method |   Views   |
| :-: | :-----: | :-------------------------------------: | :-: | :----: | :-------: | --- |
|  1  |  Index  | Display a handful of the trending games |  /  |  GET   | index.ejs |
|  2  |  Show   |                                         |     |        |           |
|  3  |   New   |                                         |     |        |           |
|  4  | Create  |                                         |     |        |           |
|  5  |  Edit   |                                         |     |        |           |
|  6  | Update  |                                         |     |        |           |
|  7  | Destroy |                                         |     |        |           |     |

Categories Routes

|  #  | Action  |             Functionality             |       URL       | Method |          Views          |
| :-: | :-----: | :-----------------------------------: | :-------------: | :----: | :---------------------: | --- |
|  1  |  Index  | Display all games in a given category |   /categories   |  GET   |  categories/index.ejs   |
|  2  |  Show   |         Display a single game         | /categories/:id |  GET   |   categories/show.ejs   |
|  3  |   New   |                                       |                 |        |                         |
|  4  | Create  |    Add a new game to the database     |   /categories   |  POST  | redirect to /categories |
|  5  |  Edit   |                                       |                 |        |                         |
|  6  | Update  |                                       |                 |        |                         |
|  7  | Destroy |                                       |                 |        |                         |     |

Collection Routes

|  #  | Action  |             Functionality              |       URL        | Method |              Views               |
| :-: | :-----: | :------------------------------------: | :--------------: | :----: | :------------------------------: |
|  1  |  Index  |         Display all wishlists          |   /collections   |  GET   |       collection/index.ejs       |
|  2  |  Show   |       Display a single wishlist        | /collections/:id |  GET   |    redirect to /wishlist/:id     |
|  3  |   New   |         Create a new wishlist          | /collections/new |  GET   |        collection/new.ejs        |
|  4  | Create  | Add a new wishlist to the collections  |   /collections   |  POST  |     redirect to /collection      |
|  5  |  Edit   | Edit the wishlist name and description | /collections/:id |  GET   |       collection/edit.ejs        |
|  6  | Update  |           Update a wishlist            | /collections/:id |  PUT   | redirect to collection/index.ejs |
|  7  | Destroy |           Delete a wishlist            | /collections/:id | DELETE |     redirect to /collection      |
