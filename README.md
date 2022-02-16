# Grocery || ECommerce || ReactJS

An ECommerce website powered by CommerceJS and ReactJs

Contact OnDemandStartUps [OnDemandStartUps](https://ondemandstartup.com/) for customized solution

Grocery app is created in ReactJS. Its easy to deploy application and any one can deploy it with little effort.

## Run Locally

### 1. Clone repo

- Open https://bitbucket.org/mobnext/grocery-demo/src/master/
- Open terminal

```
$ git clone https://syedasher@bitbucket.org/mobnext/grocery-demo.git
$ cd <folder name>
```

### 2. Get CommerceJS keys and stripe key

Create account on [CommerceJS](http://commercejs.com/) website and get your api keys.

### 3. Create .env file

```
REACT_APP_CHEC_PUBLIC_KEY=pk_xxx
REACT_APP_STRIPE_PUBLIC_KEY=sk_xxx
```

### 4. Install NPM Packages

```
$ npm install
```

### 5. Run Application

```
$ npm start
```

### 6. Open ecommerce website

Open [http://localhost:3000](http://localhost:3000)

## Use Ecommerce Website

### 1. Create product

Create a product on [CommerceJS dashboard](https://dashboard.chec.io/products).

- Set SHIPPING OPTIONS to enabled
- Set Domestic (United States) to enabled

### 2. Place an order

- open website on http://localhost:3000
- select one product
- add to cart
- proceed to checkout
- confirm order

### 3. Check order

- open admin dashboard on https://dashboard.chec.io/orders
- find the last order
- check email to see the order

## Deploy on Netlify

### 1. Create Vercel account

- open [https://www.netlify.com](https://www.netlify.com)
- sign up and login to your account

### 2. Import github repo to netlify or Drag build folder

- Open https://app.netlify.com
- Click Import Project or drag the folder directly
- Click Import Git Repository

### 3. Enter env variable for CommerceJS

- Enter name:COMMERCE_PUBLIC_KEY_LIVE
- Enter value: your public key on Commercejs

### 4. Deploy

- click deploy button
- wait to complete deployment
- click Visit Site at the end

## Contributing Partner
- OnDemandStartUps [OnDemandStartUps](https://ondemandstartup.com/) is developing partner. Feel free to [contact](https://ondemandstartup.com/)

## License
- [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE)
