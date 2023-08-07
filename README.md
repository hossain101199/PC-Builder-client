[![LinkedIn][linkedin-shield]][linkedin-url]

# PC Builder Website

The PC Builder website is a web application that allows users to build their own custom PCs by selecting PC components from a wide range of categories. The website is built using Next.js and incorporates both SSG (Static Site Generation) and SSR (Server-Side Rendering) implementations for seamless user experience and performance optimization.

## Built With

- `Next.js`
- `Redux`
- `NextAuth`

## Features

- The website features a navigation bar with a button named "PC Builder."
- Clicking on the "PC Builder" button redirects the user to the PC Builder page where they can start building their PC.
- The navbar also includes a "Categories" dropdown with various PC component categories, each having a corresponding route.
- The home page showcases random PC components as Featured Products.
- Each featured product card displays essential properties such as Image, Product Name, Category, Price, Status, and Rating.
- Users can click on any featured product to view its detailed product page.
- The home page includes 6 Featured Category sections corresponding to CPU / Processor, Motherboard, RAM, Power Supply Unit, Storage Device, and Monitor.
- Each featured category is clickable and redirects the user to a page displaying products of that category.
- Users can click on any product to view its detailed product page.
- The Product Detail page provides comprehensive information about each PC component.
- Details include Image, Product Name, Category, Status, Price, Description, Key Features, Average Rating, Individual Rating, and Reviews.
- Users can access reviews and ratings to make informed decisions about the component.
- The PC Builder page allows users to build their custom PC by selecting components from different categories.

- Each category has a "Choose" button.
- Clicking on the "Choose" button redirects the user to a page displaying components of the specific category.

- Users can click on the "Add" button on any component to add it to their PC build.

- Users must select at least 5-6 components before the "Complete Build" button becomes active.
- Clicking on the "Complete Build" button shows a success alert, indicating that the PC build is complete.

- The PC Builder page is a protected/private route, accessible only to logged-in users.

- The entire application is designed to be responsive and provides an enjoyable user experience on both mobile and desktop devices.

## Installation

To install and run PCB locally, follow these steps:

Clone the repository

```sh
git clone https://github.com/hossain101199/PC-Builder-client.git
```

Install dependencies

```sh
 npm install
```

Start the development server

```sh
npm run dev
```

The application will be accessible on http://localhost:3000.

## Contact

If you have any questions or feedback, feel free to contact me:

- Mohammad Hossain - [Linkedin](https://www.linkedin.com/in/hossain1011/) - fshossain10@gmail.com

## Project Link

You can also check out the live version of the application on [...](https://).

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hossain1011/
