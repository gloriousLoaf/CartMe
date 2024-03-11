# Cart•Me
## A Full Stack Ecommerce Site.

![GitHub language count](https://img.shields.io/github/languages/count/gloriousLoaf/CartMe)
![GitHub top language](https://img.shields.io/github/languages/top/gloriousLoaf/CartMe)

## Table of Contents
* [Description](#-description)
* [User Story](#-user-story)
* [Installation](#-installation)
* [Usage](#-usage)
* [Images](#-images)
* [Future Development](#-future-development)
* [License](#-license)
* [Tools](#-tools)
* [Resources](#-resources)
* [Questions](#-questions)
<p>&nbsp;</p>

#### Get straight to the business? **Visit** [CartMe](https://cartme.metcalf.dev/)  

#### **PayPal Sandbox** - Since this is a demo, please use the following dummy PayPal account at checkout:
* Email: sb-43qvoe5172906@personal.example.com
* Password: {K@)a9qX  

#### **CartMe Login** - Real cool, but not a real store.
* You may create your own CartMe login with whatever details you care to use, fake or real.
* I will never share or distribute any personal information you provide to CartMe.
* A lot of functionality can be tested without a login, but not checkout.
<p>&nbsp;</p>

## 📝 Description
CartMe is a MERN full stack ecommerce website. This web store was built to demonstrate the strength, security and scalability of this tech stack. With React, Redux and CSS libraries, this app can be quickly modified to offer a completely different or customized UI while remaining a clear and user-friendly UX.
<p>&nbsp;</p>

## 😃 User Story
> AS A busy person who needs to shop for supplies during the pandemic,  
> I WANT to visit an easy-to-use website,  
> SO THAT I can quickly checkout with PayPal and move on with life!
<p>&nbsp;</p>

## 💾 Installation
To start your own instance, clone this repository and run `npm install` from the root directory. Then `cd client` and run another install to complete the dependencies. The `/frontend/package.json` contains a preinstall script to run `npm-force-resolutions` to address a few critical security issues in the dependencies. This may need to be adjusted in time. See this block in that `package.json` and adjust as needed:  
```
  "resolutions": {
    "package-name": "^2.0.1"
  },
```
 I built this app to store data using **MongoDB Atlas** cloud hosting. Please [see their docs for information](https://docs.atlas.mongodb.com/) regarding setting up a cluster for this app. You will need to create a `.env` file and save your MONGO_URI to the file. Authorizing users relies on tokens from node package [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). When setting up tokens, remember to drop your JWT_SECRET into the `.env`. Lastly, the checkout process utilizes [PayPal's Developer](https://developer.paypal.com/developer/applications) sandbox. Login with your PayPal account, navigate to that URL and select *My Apps & Credentials* from the Dashboard to create a sandbox app. Their docs are thorough, dig in.  
 To develop and run the app:
* **Local Instance:** To test and develop locally, open a **Node** enabled terminal window, navigate to the root directory and run `npm run dev` to start the servers listening and connect to MongoDB. Unless altered, all data will hit your cloud database by default. This script tells npm *Concurrently* to start both servers listening at ports 3000 and 5000 respectively. Launch your browser, navigate to `localhost:3000` and begin using Me!
* **Web Instance:** Connect your MongoDB cloud cluster to you preferred cloud platform for website hosting. I used **[Render](https://docs.render.com/)** to deploy this app, go here to checkout 👉 **[CartMe](https://cartme.metcalf.dev/)** in action.
<p>&nbsp;</p>

## 📲 Usage
**Users** start their experience at the landing page, where products are available to view and review. They may browser by navigating around the site, or they can use the search box to find what they are looking for. Users may place items in their cart or remove them. In order to checkout, the user will have to create and account which automatically logs them in. The checkout process asks for a shipping address if the user has not already saved one, then their order can be placed. Afterwards, the user can make use of the PayPal button, connected to a sandbox API.  

**Admins** can do everything that Users can, as well as view and perform CRUD with products including image uploading with [multer](https://www.npmjs.com/package/multer), view and update user data (not passwords), and view and mark orders as shipped.
<p>&nbsp;</p>

## 📷 Images
<img src="https://github.com/gloriousLoaf/CartMe/blob/main/frontend/public/logo192.png" alt="Cart Me brand" height="225">
<p>&nbsp;</p>
<img src="https://github.com/gloriousLoaf/CartMe/blob/main/frontend/public/images/shoppingcart.png" alt="Shopping cart screen at CartMe website" height="350">
<p>&nbsp;</p>

## 🔮 Future Development
* **More Payment Methods** Stripe etc.
* **More Login Methods** Google, Facebook, Twitter etc.
* **More Search Methods** Search by brand, category, keyword tags.
* **UI Improvements** It looks nice now, but could be more eye catching.
<p>&nbsp;</p>

## 📜 License
**MIT** • *(If you fork and recreate this, please be kind and rebrand your version!)*
<p>&nbsp;</p>

## 🔨 Tools 
* [React](https://reactjs.org/), [React-Redux](https://react-redux.js.org/) and [React-Bootstrap](https://react-bootstrap.github.io/)
* [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/) and [Node](https://nodejs.org/)
* [PayPal Developer API](https://developer.paypal.com/developer/applications)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for authentication.
* [multer](https://www.npmjs.com/package/multer) for image file uploading.
<p>&nbsp;</p>

## ❔ Questions?
  * **David Metcalf**
  * **GitHub:** [gloriousLoaf](https://github.com/gloriousLoaf)
  * <hello@metcalf.dev>
  * Or hitup one of the contributors above!

<img src="https://github.com/gloriousLoaf.png" alt="GitHub Profile Pic" width="125" height="125">
<p>&nbsp;</p>

---

##### This markdown was created with [Readme Generator](https://github.com/gloriousLoaf/Readme-Generator)
