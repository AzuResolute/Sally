# Sally - Dating Application

Sally is a Dating Site that utilizes Angular for our front-end and ASP Net MVC for our back-end.

The beating heart of Sally is its users and their ability to interact with one another.

Users have these functionalities:

    - Register by providing only the minimum requirements
    - Update their profile details, including Descriptions, Looking For, and Interests
    - Upload, optionally using drag and drop, photos. Photo storage is powered by Cloudinary.
    - Selecting which of these photos is their main.

Users can interact with others by:

    - Specifying the gender, age range, and sorting order of Users they are interested in meeting
    - Liking other Users - Users are given lists of those they liked, and who liked them back
    - Messaging other Users - Users are given an inbox and outbox for these messages
    - Accessing other Users' Details, showing their descriptions, photos, and message history with the current User

Register now and find your next match with Sally! <3

## How to Start on Development Mode

You will to install the following in order to run Sally:

    - Microsoft Visual Studio or Miccrosoft Visual Code
    - Download at least the 2019 .Net Core SDK Ver 2.2 along with its Runtime counterpart.

On your terminal, navigate to the DatingApp-SPA directory. This directory houses our Angular Framework. Run `npm install` to download Angular and other dependencies.

Afterward, navigate to the DatingApp.API directory. This directory houses our ASP Net server and the Angular Build assets. Run `dotnet run` to activate the back-end ASP Net server, which now serves up our Angular components as well.

Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.
