[![JavaScript Style Guide](https://----------------------)](https://standardjs.com)

# ![ESP Galleries](Insert logo link here)

## Coder Academy MERN Stack Project By C(4)
## Cassandra Daw, Casey Manning, Charles McGovern, Chris Barford

insert an image?


## INDEX


[1. BUSINESS PROBLEM](#businessproblem)

[2. BUSINESS SOLUTION](#businesssolution)

[3. CONSTRAINTS AND RISKS](#constraints)
[5. PROJECT PLANNING](#planning)
* [User Stories](#userstories)
* [User Stories](#userstories)
* [Project management](#project)
* [Client Communication](#client)
* [Wireframes](#wireframes)
* [Entity Relationship Diagram (ERD)](#erd)

[6. KEY FEATURES](#keyfeatures)

[4. TECHNOLOGY STACK](#stack)

[3. INSTALLATION INSTRUCTIONS](#installation)

[7. FURTHER WORK](#furtherwork)

[8. TESTING](#tests)

---
<a name="businessproblem"/>

### 1. BUSINESS PROBLEM
</a>

Our client, ESP Gallery, needs a user friendly, aesthetically inviting online art platform allowing users to display, sell or buy artwork. Our client wants to receive a commission on all art sales processed by the site. A hireable main gallery section (i.e. the homepage), is needed for artists who want more exposure for their art. It is important that the site promotes the same sense of community, for which ESP Gallery is known. The site admin must be able to alter key aspects of the site. 

---
<a name="businesssolution"/>

### 2. BUSINESS SOLUTION
</a>

ESP Gallery App is a progressive online web application using MongoDB, Express, React,Node and Bootstrap technologies.  

The application provides:

1. Registration 
App users are able to register on the site to its services. Possible users include: artists/art sellers, art buyers, and App admin.  

2. Online sales platform
Artists are able to sell their art on the platform, while art connosieurs can purchase art. 30% of the sales price is charged to artists/sellers and will be sent to ESP Gallery. Sales will be managed through Stripe and/or Paypal. 

3.  Online Gallery
Artists can request their art be displayed in the Gallery for a fee. This is negotiated directly between artist and ESP Gallery. The Gallery admin will then be able to upload the artist's work to the viewing gallery.  

4. Admin Account 
Admin access will provide the following:
a) Ability to create, edit and delete all user generated content 
b) Ability to create, edit and delete key website content 
c) A view of sales records.
 

Dashboard from client logged onto the system.
![Client Dashboard](/backend/public/clientdash.png)

---
The Same screen from Admin Dashboard with pay option.

![Admin Dashboard](/backend/public/admindash.png)


---
<a name="constraints"/>

### 3. CONSTRAINTS AND RISKS

</a>

b. Plan information gathering activities to determine project requirements,
constraints and risks

g. Reassess ongoing project scope changes, risks and issues

---
<a name="installation"/>

### 1. Installation Instructions

</a>

View the project online [here](http://cherri-finance.netlify.com/) [currently with deployment issues].

To use this project locally:

```
$ git clone https://github.com/GoldenLuckyDragon/Cherri.git
```
Move into the directory:  
```
$ cd Cherri
```
The project consists of both a front and back end.

#### Back End
To begin with, you will need a stripe account. Go to  https://dashboard.stripe.com/register
and register an account. In the Stripe dashboard, sign up for Stripe Connect (which allows the platform to be a middleman in a transaction between two clients).

Once you have a Stripe account, register your platform here:
https://dashboard.stripe.com/account/applications/settings

Important Note: you must verify your identity on Stripe for Stripe Connect to accept payments.

In Terminal, move into the backend folder and create a dotenv file that will host your environment variables.

```
$ cd backend && touch .env
```

Copy and paste the following inside the dotenv file:
```
STRIPE_DEV_SECRET=
CLIENT_ID=

```
Fill in your Client ID from your Stripe dashboard under Settings (and keep your dashboard open, as it will be used again).

Update your modules with the following command in Terminal:
```
$ yarn install
```
Stripe requires a handshake verification process which must be done over https and cannot be done on localhost. As such, download and install ngrok from
https://ngrok.com/download (which will facilitate the handshake verification).

Move to the download directory with the following Terminal command:

```
  cd [PATH TO NGROK - likely to be "/downloads"]
```
and run the following command to create a secure public connection to your localhost:
```
 $ ngrok http 8080
```
![ngrok](/backend/public/ngrok.png)

Then copy the https url and go back to your Stripe dashboard. There will be a new redirect_URI on the bottom left of the dashboard. Select "Viewing test data" as per below:

![test_data](backend/public/test_data.png)

Go to your dashboard - when you add your redirect_URI, make sure to add the following to the end of your ngrok https url:

```
/users/auth/stripe_connect
```

It might look something like this:
```
https://2221ajecb.ngrok.io/users/auth/stripe_connect

```

Then click on "API" on the left of the dashboard and save both your stripe secret key to your new .env file. The dashboard should look like this:

![redirect](backend/public/redirect.png)

Keep Terminal open inside the /backend folder
and run:
```
$ yarn start
```
You should see:
 ```
 Server running on port: 8080
 Successful connection to MongoDB
 ```

If you do not already have MongoDb, you will need to install it with the following steps.

#### MongoDb

Open a new Terminal window with <kbd>CMD</kbd> + <kbd>T</kbd>

We use MongoDb - with this project you can install it using Homebrew.

You can find the MongoDb docs [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

First update your homebrew with the following:

```
$ brew update
```

Then run:
```
$ brew install mongodb
```
Once the installation is complete, run:

```
$ mongod --dbpath /usr/local/var/mongodb
```

A successful connection will display as follows:
```
waiting for connections on port 27017
```

#### Cloudinary

Our team used Cloudinary for image upload and retrieval. We created two presets to allow images to be uploaded directly from the platform without requiring the user to be authorised (the Cloudinary API and Cloudinary Secret Key are stored within the .env file).

If you wish to establish your own Cloudinary account and presets (so that you can access the images uploaded to the website), then follow these steps:

1. Sign up for a Cloudinary account [here](https://cloudinary.com/). Under settings, set the Cloudinary cloud name to Cherri.

2. Create two folders: one called invoices and the other called companydocs.

3. Create two upload presets with the following settings:

![Cloudinary presets](http://res.cloudinary.com/cherri/image/upload/v1516782118/cloudinarypresets.png)

#### Front End

Open a new Terminal window (keep the other windows open) by pressing
 <kbd>CMD</kbd>  + <kbd>T</kbd>

Now type:
```
$ cd ..
```
to go back a folder and then:
```
$ cd frontend
```
to move to the front end folder.

Make a new .env file by entering in Terminal:

```
$ touch .env
```

and copy the following inside:

```
REACT_APP_STRIPE_DEV_PUBLISH=
REACT_APP_SERVER_URL=http://localhost:8080
```
Fill in the STRIPE_DEV_PUBLISH with your test publishable key from your stripe dashboard; then run:
```
$ yarn install
```

You should have 3 terminal windows running:

1. Cherri/backend.

2. Mongodb.

3. Cherri/frontend.

Type into Terminal:
```
$ yarn start
```
to start the website.

---
<a name="stack"/>

### 2. TOOLS & METHODOLOGIES
</a>

#### Linter  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

We chose to use the following Linter: https://standardjs.com/

It is well documented, it has auto enforcement on save and it works with es6. Controversially, it removes semicolons, but this appears to be becoming standard practice in the industry. As a result, you can never start a line with (, [, or `


#### Technologies Used
(Marked in bold)

This project was built with:
**node.js** and **Mongodb** with mongoose for the server and **create-react-app** for the frontend.

We discussed among the team early in development about using **Firebase** as our database, but after consulting several other developers, we found that it didn't really add any value to our application (and indeed, increased the learning curve).

Some other dependencies we used include **Bootstrap-React** for our frontend design elements and **React-router-dom** for all our routing, which allows for a seamless flow between pages.

##### Image Uploads

For image upload, we used the **Cloudinary** upload widget, which allows for quick and easy access to your Cloudinary account (and allows third party users to upload direct to your Cloudinary account without requiring authorisation) and with some skillful tinkering, we were able to manipulate the uploaded file names to suit our needs.

##### Authentication

Passport combined with JWT tokens were used for authenticating the user on the frontend.

##### Stripe

It was decided early on in development to use Stripe as the payment mechanism, as it would provide a platform for easy transfers between our client and the factories using the application. Stripe Connect allows payments to be made between the client and others via the website.

There were some serious errors encountered with this, which began because we added authentication late in the game. Stripe Connect is designed to be the initial Oauth flow where the factory would sign in via Stripe, and then you would add their details from Stripe back into your database.
Unfortunately, because our users have access to direct deposits (and Stripe is non-compulsory), this caused problems for us.

The Stripe connect performs a handshake with stripe servers where we send a GET request to stripe(via and approved link associated with our website), then they send back an authorization code, which must be send back to stripe on a POST, and after that they return a stripe_id associated with a user, which is essentially a bank account number for the client.

As we based the entire application on React-Router, once we clicked on the link to goto stripe, we refresh the page and lost our state, and we were also not able to pass any information about the current_user after going away from our site and essentially coming back without any data.

We were able to save state of the current user email, only to have the entire process uprooted by stripe changing params on the requests to their endpoint.

In the end we were able to make payments via our customised invoice dashboard, but the recipients had to be hardcoded, as we could not dynamically update the database to have our stripe id, because the connect code was on our backend server, and the authentication token made from our email, is on the front end.

---

<a name="planning"/>

### 5. PLANNING
</a>

<a name = "userstories">

#### User Stories & Journeys
</a>

Our user stories are below (including those deemed mandatory ("MVP") and those that are added bonuses ("Sprinkles")).

![user stories](http://res.cloudinary.com/cherri/image/upload/v1516783097/userstories.png)

Our user journeys are below:

![user journeys](http://res.cloudinary.com/cherri/image/upload/v1516783364/Journey1_yrhhb3.jpg)

![user journeys](http://res.cloudinary.com/cherri/image/upload/v1516783362/Journey2_nfigju.jpg)

![user journeys](http://res.cloudinary.com/cherri/image/upload/v1516783364/Journey3_mdzv7w.jpg)

![user journeys](http://res.cloudinary.com/cherri/image/upload/v1516783364/Journey4_ywjv6p.jpg)

![user journeys](http://res.cloudinary.com/cherri/image/upload/v1516783364/Journey5_caa6tc.jpg)

<a name = "project">

#### Project Management & Client Communication
</a>

The following project schedule was prepared to ensure smooth workflow:

![planning project schedule](http://res.cloudinary.com/cherri/image/upload/v1516783780/planningschedule.png)

Tasks were also divided up (see Week 1 checklist) on Trello [here](https://trello.com/b/9XpIdeIb/team-gld-cherri-project).

This was our whiteboard for our last few days working on the project:

![Final week](/backend/public/finalrun.png)

Our client was kept informed of the project status and liaised with us (minutes of meeting is stored in a Google Drive made available to our teachers).

<a name = "client">

#### Client Communication
* [Client Communication](#client)

After an initial phone conversation, our first client meeting was held to determine project requirements,constraints and risks. We also spoke to her throughout the build to clarify project specifics or priorities and to provide updates on project progression. We met the client to handover the project and provide her project maintenance plans before securing final project sign-off. 
The diary of meeting minutes and other communication notes can be found here: https://c4coderacademy.atlassian.net/wiki/spaces/ES/pages/622605/Client+Interactions
 
<a name = "wireframes">

#### Wireframes
</a>

Home page (landing page) on mobile:

![Homepage](/backend/public/Home1.png)

Home page (second section) on mobile:

![Home](/backend/public/Home2.png)

Factory dashboard on mobile:

![Dash](/backend/public/dash.png)

Admin dashboard on mobile:

![Admin dashboard](http://res.cloudinary.com/cherri/image/upload/v1516936394/ADMINDASHBOARD_yy4sor.png)

Invoice details (for factory) on mobile:

![Invoice Details](http://res.cloudinary.com/cherri/image/upload/v1516936862/INVOICEDETAILS_ixkccf.png)

<a name = "erd">

### Entity Relationship Diagram (ERD)
</a>

We used Dbdesigner to plan our database.


##### Our Original ERD

![Our Original ERD](/backend/public/erd1.png)


##### Our Finalised ERD

![Our Finalised ERD](/backend/public/erd2.png)

---

<a name = "keyfeatures">

### 6. KEY FEATURES
</a>

Manufacturers:
* can sign up (including uploading their HKID and Incorporation Certificate as proof of identity);
* can log in;
* can upload their invoices and signed Account Receivable Purchase Agreement (so they agree to sell their unpaid invoices and keep the offer open for seven days);
* can connect their Stripe account;
* can see invoices that have been paid, declined, pending and expired.

Admin:
* can log in;
* can review the invoices and their statuses (including pending, approved, expired and declined);
* can review all the factories and their incorporation certificate and HKID; and
* can immediately purchase the invoice at 90% of its value (with payment being made through a choice of either bank deposit or online through Stripe).

---
<a name = "furtherwork">

### 7. FURTHER WORK
</a>

Some key future features we would like to see implemented include:

  * email notifications;
  * graph API to show paid payments (like how much has been earned month-to-month);
  * ability to filter through invoices on both dashboards;
  * potentially expand the platform to become a two-way market place with cryptocurrency payments; and
  * finalise deployment.

---
<a name = "tests">

### 8. TESTING
</a>

We have a testing suite inside the application. You can run tests with:

```
$ yarn test
```