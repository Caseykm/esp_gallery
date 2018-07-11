# ESP Gallery Website - Final group project
Final group project
Part A Questionnaire

### Client’s Requirements
#### 1. Who is your client?
ESP Gallery - contact Lou Steer

#### 2. What is your client’s need (i.e. challenge) that you will be addressing in your Project?
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
No current Website

#### 4. Describe the project will you be conducting and how your App will address the client’s needs.
The esp gallery website will have a virtual gallery that can be booked by artists. The virtual gallery will be on the landing page.  

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
Hardware will be

#### 8. Describe the architecture of your App.


#### 9. Explain the different high-level components (abstractions) in your App.
The different functionalities of the app are the sales function.


#### 10. Detail any third party services that your App will use.
Third party services will be: Stripe and maybe Paypal (Paypal is a sprinkle)

#### 11. Identify the database to be used in your app and provide a justification for your choice.


#### 12. Discuss the database relations to be implemented.
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

    * As an artist when I log in I want to be able to update /change the price and when I refresh the page I want to see the updated information.

* User
  * Item 2a
  * Item 2b


#### 15. Provide Wireframes for your App.
* Flow Chart

![flowchart](https://raw.githubusercontent.com/casscass/esp_gallery/development/README-images/preliminaryFlowChart.jpg)


* Wifeframs 
Wireframes where made with Figma and can be viewed online [here](https://www.figma.com/file/PU0NB9pOHF1cRj3zrTYRrLpC/ESP-gallery-wireframes
)

![mockup](https://github.com/casscass/artcloud/blob/master/app/assets/images/Wireframs.png)

#### 16. Describe the way Tasks are being allocated and tracked in your project.
Tasks are being alocated by who feels like doing somthing...People are choosing what hey want to do.
Tasks are being tracked useing Trello.

#### Trello
Trello board can be viewed [here](https://trello.com/b/NZm11i1D/c4-assignment)


Trello was initially used to maintain source control. So we endened up with somethings in trello and others in Confluence. This actually worked well for us as we were familier with trello and it provided a familier source control while we familierised ourselves with Confluence.

![trello](https://github.com/casscass/esp_gallery/blob/development/README-images/trello1.png)

##### Confluence jira
Confluenct was used in conjuction with Trello to maintain source control.

![confluence](https://github.com/casscass/esp_gallery/blob/development/README-images/confluence1.png)


#### 17. Discuss how Agile methodology is being implemented in your App.

#### 18. Provide an overview and description of your Source control process.
A. We set up a dummy project to practice commits working as a team
We are working on Github using a develop branch . Each feature has its own branch off the develope branch and is only merged when code works
The master brance on git hub is only being pushed to once code is full functional

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



