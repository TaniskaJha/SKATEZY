# SKATEZY - Skateboard Renting Website

SKATEZY is a skateboard renting website that allows users to rent two kinds of skateboards: longboards and cruisers. The website is built using Next.js and features an integrated payment gateway using Stripe.The website is equipped with latest User Interface and provides a smooth User Experience. 
The website is LIVE on the link : https://skatezy-11.vercel.app

![mainpg](./skatezycollage.jpg)

## Payment Gateway

Stripe's platform allows businesses to accept payments over the internet securely, making it easier for companies to conduct online transactions and handle financial operations.
![mainpg](./payment.png)


## Technologies Used

- Next.js
- Stripe Payment Gateway

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/skatezy.git`
2. Navigate to the project folder: `cd skatezy`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env.local` file in the root of the project
   - Add your Stripe API keys to the `.env.local` file:

     ```
     STRIPE_SECRET_KEY=your_stripe_secret_key
     STRIPE_PUBLIC_KEY=your_stripe_public_key
     ```

5. Start the development server: `npm run dev`
6. Open your browser and go to: `http://localhost:3000`

## Features

- Users can browse available skateboards and view details.
- Users can rent skateboards by selecting the rental period and making a payment.
- Integrated payment gateway using Stripe for secure and convenient transactions.
- Admin dashboard to manage skateboard inventory and view rental orders.

## Folder Structure


