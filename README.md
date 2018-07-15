# ESP Gallery Website - Final group project
Final group project
Part A Questionnaire

### Client’s Requirements
#### 1. Who is your client?
ESP Gallery - contact Lou Steer

#### 2. What is your client’s need (i.e. challenge) that you will be addressing in your Project?

Our client, ESP Gallery, needs a user friendly, aesthetically inviting online art platform allowing users to display, sell or buy artwork and for enthusiasts to view art. Our client wants to receive a commission on all art sales processed by the site. Also, a hireable, main gallery section (i.e. the homepage), is needed for artists who want more exposure for their art. It is important that the site promotes the same sense of community, for which ESP Gallery is known. The site admin must be able to alter key aspects of the site.

The client has outlined the need for an online gallery website that can be booked by artist with the following features:
  * An easily navigable site
  * Virtual gallery and shop
  * Easy for users to buy
  * Sound muted / no noise so people can sneakily look and buy from website at work. Without being sprung!
  * A for hire gallery space that artists can hire/book - To be called 'Virtual Gallery'
  * A shop that sells artworks
  * Artist able to sign up and upload images of artwork, price & text. Artists able to  add/edit/destroy  images, text, price
    * Ability for artists to input artwork dimensions and properties (requirement)
    * Must be easy to upload artworks - ease of usability for admin and demographic.
    * Disclaimer agreement for artists to show that they understand shipping responsibilities.
  * Artists to have artwork on site but not necessarily for sale
  * Log in page for artists - administrator will use too

#### 3. Describe the client’s current setup and data.
There is no current website or data. The gallery sells no art at the moment. It only has an online presence through Facebook and Instagram.  

#### 4. Describe the project will you be conducting and how your App will address the client’s needs.

The ESP Gallery App uses MongoDB, Express, React, Node, Bootstrap, Sendgrid, stripe, cloudinary, atlas, and passport technologies.
The app will fulfil the client needs, as described in question 2 by:

  * providing a beautiful, well designed site that promotes community through the thoughtful use of html, css, bootstrap, images, and appropriate text and fonts.

  * providing registration/login so that art buyers, sellers and site admin can use the site. We will use Passport to manage this functionality.

  * providing pages that allow art listings to be created and provides fields for entering and editing key information about the art.
  
  * allowing the buying and selling of art through online payments managed by Stripe Connect. Stripe Connect will also be used to allow ESP Gallery to take it's 30% required commission on all sales. The gallery would like more payment options, so we will implement Paypal if there is enough time to address this need.

  * allowing artists to have their art displayed in the Gallery by providing the Gallery admin the ability to upload the artist's work to the gallery when requested.

  * setting up a special Admin Account that gives this user type the ability to: create, edit and delete all user-generated content and to create, edit and delete key website content, and to view sales records.

  * displaying a disclaimer agreement for artists to show that they understand shipping responsibilities.

  * providing no automatic audio play, so people can use the site without drawing the attention of others.


#### 5. Identify and describe the software (including databases) to be used in your App.

1. **front end:**

  * **React.js**
  
  Provides stateful components for interactive UI

2. **back end:**

  * **Node.js**
  
  Event driven server environment
  
  
  * **MongoDB**
  
  Database that uses a document-oriented data model. Stores JSON-like document models that map to objects in the application code
  
  * **Mongoose**
  
  Database modeling for MongoDB
  
  * **Express.js**
  
  Node.js application framework to help organize the application into an MVC architecture on the server side.


#### 6. Identify and describe the network setup you will use in your development.
Network will be: 

#### 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on.

The client does not have the capacity to run her own server so the app will run on third party providers. The setup will be as follows:
 
Our database, MongoDB will be hosted by mLab which is a cloud database hosting service located in San Francisco, California.

The App will be deployed on Heroku. Heroku is a cloud platform service located in San Francisco, California.

Amazon Simple Storage Service (AWS S3) will be used to store the App's images.  It is a cloud computing web service offered by Amazon Web Services and provides fast, reliable and scalable object storage. 
The AWS we are using is located in West Virginia however, there are locations globally and we are currently looking into whether we should use one closer to Sydney.  

#### 8. Describe the architecture of your App.

We have decided on a model, view, controller, layered architecture pattern. The app uses MongoDB, above which, is our backend layer containing our models, business logic and data types. We have utilised Mongoose and Express for this.  Our controllers transform and manipulate the data between this model layer and the front-end view layer, which is built with React JS and uses HTML/CSS, Javascript, and bootstrap.  
This architecture allows compartmentalisation of the app's different functions, aiding the building process so that changes in one layer or function aren't affected by other layers.

#### 9. Explain the different high-level components (abstractions) in your App.
We have three models: Users, Artworks and Gallery.  

The "user" model represents art buyers, sellers, and site admin.  All these users are able to sign in to  accounts. Site admin have extra permissions which allow the management of data on the site.  Users are able to create art listings, which enable them to sell artwork, and other users are able to buy this artwork.  Users that wish to be known as artists, are able to populate their profile with information about themselves and their art.  

"Artworks", discussed above, is another model that represent art that is/was for sale, or art shown on the gallery page.  It has data such as images, description, id, and a boolean depending on if it's in the gallery.    
The Gallery abstraction is basically the home page and let's artists pay the gallery to show their art on this page.  They will also be able to display their personal artist profile or other info.  

Buying/selling is another abstraction that is not a model and is done so through another abstraction, "listing".   


#### 10. Detail any third party services that your App will use.
Third party services will be: Stripe and maybe Paypal (Paypal is a sprinkle)

#### 11. Identify the database to be used in your app and provide a justification for your choice.
The database we will be using is MongoDB. It stores data in JSON-like documents which can have different fields, allowing the database structure to change over time. As a distributable database, it provides horizontal scaling, high availability and geographic distribution. Additionally, its ability to handle ad hoc queries, indexing and real-time aggregation allow for easy access to the database throughout the structure of the app.


#### 12. Discuss the database relations to be implemented.

The models that we will be using in our database are users, artwork, and gallery.  The gallery, which is a singleton resource, has two foreign keys, one that relates to the artwork's primary key, and one that relates to the user primary key so that the artwork and artist shown in the gallery can be identified.  The artwork, has a foreign key, which relates to the user primary key, which allows artworks to be associated to it's user(a.k.a. artist/seller).

#### 13. Provide your database schema design.

Data base relations are as follows:

#### 13. Provide your database schema design.
![erd](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/ERD_C4.png)

#### 14. Provide User stories for your App.
User Stories
* Artist 

    * As an artist I want to be able to sign up to esp gallery website so that I can use the website. 

    * As an artist that has already signed up. I want to be able to go to the website and log in using my password anytime I feel like it.

Ability to change my information on my Profile Page
    * As an artist who has signed up I want to be  able to change/update my information and when I refresh the page I want to see the updated information.

We used Dbdesigner to design our database schema as follows:

![erd](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/ERD_C4.png)

#### 14. Provide User stories for your App.
# User Stories

## User
* As a user, I want to be able to easily buy artwork in an easy efficient manner, so that I can have a wonderful consumer experience.
* As a user, I want to be able to search for an artist to find art that I am looking for.
* As a user, I want the ability to access a list past orders so that I can find relevant information.
* As a user, I want to be able to search for different styles of art so I can buy everything that I want.
* As a user, I want to be able to see more detailed information on prospective art to help inform my decision making.
* As a user, I want to be able to update my personal information to make sure its current.
* As a user, I want to view and receive new information about upcoming exhibits so that I know what's happening in the art scene.

## Artist or seller
* As an artist or seller, I want to be able to easily sign up and create a profile so that I can upload pictures of my art.
* As an artist, I want to be able to sell my artwork to increase my profits so that I can continue creating art.
* As an artist, I want to be able to exhibit my art so that I can showcase my work and increase my exposure.
* As an artist, I want to be able to provide a description of my artwork so that I can engage more people with my art.
* As an artist, I would like a historical section so that people can still view my art after an exhibition has finished.
* As an artist, I want to be able to update information on my art so that I can change the price_description_photos etc.
* As an artist, I want to be able to easily find information on exhibiting my work.
* As an artist, I want the application process for exhibiting art to be efficient and easy to use.
* As an artist, I want to see what dates are available in the Virtual Gallery so I can book a time for my own exhibition.
* As an artist, I want to know what my obligations are for selling my work on the website.
* As an artist, who has sold art through the website, I want to know what happens if art is damaged in transit. Who is responsible and can I keep the sale money.

## Admin
* As admin, I want the ability to manage content to maintain site quality. This includes the ability to delete inappropriate content.
* As admin, I want the ability to post art images to the site's gallery, so that I can create exhibits for my paying customers.
* As admin, I want to be able to receive commission from transactions so that I can continue to provide a service.
* As admin, I want to be able to display information about ESP Gallery, to provide some background on the company, and to promote a sense of community.

#### 15. Provide Wireframes for your App.
* Flow Chart

![flowchart](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/preliminaryFlowChart.jpg)



* Wifeframes 
Wireframes were made with Figma and can be viewed online here:(https://www.figma.com/file/PU0NB9pOHF1cRj3zrTYRrLpC/ESP-gallery-wireframes
* Wifeframs 
Wireframes where made with Figma and can be viewed online [here](https://www.figma.com/file/PU0NB9pOHF1cRj3zrTYRrLpC/ESP-gallery-wireframes
)

![mockup](https://github.com/casscass/artcloud/blob/master/app/assets/images/Wireframs.png)

#### 16. Describe the way Tasks are being allocated and tracked in your project.

#### Trello


Tasks initially, were broadly distributed with two people on the front-end and two on the backend. Trello was then implemented to keep all tasks organised and the project progressing.  Team members created a Trello board and put all tasks in the "to do" section. After that team members could take ownership of a task by putting their name to it, move it to doing, and then put it in completed when they are done.  

The Trello board can be viewed [here](https://trello.com/b/NZm11i1D/c4-assignment) or here:

![trello](https://github.com/casscass/esp_gallery/blob/development/README-images/trello1.png)

Additionally, a Trello powerup called TeamGantt is being used to monitor progress as pictured below:
![gantt](https://github.com/casscass/artcloud/blob/master/app/assets/images/gantt.png)

Trello board can be viewed [here](https://trello.com/b/NZm11i1D/c4-assignment)


Trello was initially used to maintain source control. So we endened up with somethings in trello and others in Confluence. This actually worked well for us as we were familier with trello and it provided a familier source control while we familierised ourselves with Confluence.

![trello](https://github.com/casscass/esp_gallery/blob/development/README-images/trello1.png)

##### Confluence jira
Confluence was used in conjuction with Trello to maintain source control.

![confluence](https://github.com/casscass/esp_gallery/blob/development/README-images/confluence1.png)



#### 17. Discuss how Agile methodology is being implemented in your App.

Agile methodology was used to complete our project as follows:

A)  Sprints
These were as implemented as follows:
June 25 - July 2 Team building, planning and research
July 2-July 11 Part A questionnaire and rough draft of Markdown for part B
July 11- July 21 Development phase 
July 21 - July 24 Project review and delivery to client, Finalise docs and code, presentation planning

B) Collaboration with the customer
We managed client satisfaction ensuring that the product met her needs 
by keeping her updated on the progress and seeking her input on the website throughout our sprints.  

C) Commitment to the delivery of working software as frequently as possible. 

D)  Commitment to team morale
Motivation is key in Agile.  Being mindful of a positive team environment and being supportive will ensure teammates can be trusted to get their jobs done.

E)  Implementing a communication plan that utilizes face-to-face communication to best transfer information within our team.

F) Every day we have a team meeting so we could find out how to increase team effectiveness and to ensure we are constantly moving in the right direction. 

G) We self-organize by using the Trello board and team meetings to direct our focus

#### 18. Provide an overview and description of your Source control process.

We will be using a Git Feature Branch Workflow. Each individual decides on a feature to work on, creates a feature branch on their local machine and commits their changes to this branch as they progress. Once the feature is completed, the individual rebases their code from the main branch, resolves any conflicts, and then submits a merge request to the main branch. Once the feature is reviewed it is either approved and merged into the main branch, or rejected and marked for revision. 

#### 19. Provide an overview and description of your Testing process.
We will use Webpack for testing

#### 20. Discuss and analyse requirements related to information system security.

#### 21. Discuss methods you will use to protect information and data.
Operating systems and applications can always be reinstalled, but data is unique--making it the most important thing on your computer or network
    
* Backup data early and often. 
    * Data is pushed to Github by team members as they finish/install code/package/feature

* When we depoly
    * We will be looking into options like Wizard Mode to simplify the process of creating and restoring backups for the website.
    * We will be advising our client to store a copy of the backup offsite in case of fire, tornado, or other natural disaster that can destroy the original data.

* Use file-level and share-level security
    * Permissions will be set on the data files and folders.
    * Permissions will be set for user accounts, users and admin. We will allow or deny various levels of access from read-only to full control.

* Password-protect
    * When users Sign-Up their information will be protected by their password.

* Encryption keys 
    * Encryption keys for stripe and sendgrid will be stored in .gitignore file so they will not be published on git hub.

* User-info
    * ESP Gallery has a no-share information policy. They do not share user information with third parties.


#### 22. Research what your legal obligations are in relation to handling user data



## Style Guide
### Clients logo
![logo](https://github.com/casscass/esp_gallery/blob/development/README-images/ESP-GalleryBigLogo600x300.jpg)


### Colour Scheme
Colour scheme can be viewed [here](https://coolors.co/f9f8f8-ffffff-337f96-444444-adadad)

![colour scheme](https://github.com/casscass/esp_gallery/blob/development/README-images/ESP-ColourScheme.png)

### Fonts




