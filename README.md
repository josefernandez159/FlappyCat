# The Flappy Cat

## :eyeglasses: Project Preview




[![Project Preview](https://uploaddeimagens.com.br/images/003/821/752/full/cheer_bee.png?1649659645)](https://cheer-bee.vercel.app/)

## Click on the image and go to the website

  I developed this system in two days, in order to solve a problem, I used front-end techniques with the help of a 'figma' of the entire project


![Badge](https://img.shields.io/badge/Font%20Awesome-4.7.0-blue?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Axios-0.18.0-%23072000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/react--router-4.2.0-%23072000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/react-16.4.0-%23000000?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Typescript-4.6.3-black?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Jest-27.5.1-black?style=for-the-badge&logo=appveyor)
![Badge](https://img.shields.io/badge/Jest-27.5.1-black?style=for-the-badge&logo=appveyor)

## :dart: Goals

The objective of this project was to create an area with two screens, where on the first page there would be an 'input' where the user would put his name, and an 'input' of a 'checklist' to inform if the user was in legal age, with both 'inputs', would enable the option to enter, where beer users will be able to check the names and data around the world, this data was taken from an 'API'.


## :hammer_and_wrench: Tools


-   [Html]
-   [Css]
-   [Npm](https://www.npmjs.com/)
-   [Javascript](https://www.javascript.com/)


## :desktop_computer: What i solved?

  I developed a system where I go through 2 requirements, put the name and inform if you are of legal age, with the two requirements completed, users enable the option to enter the site, when entering they are faced with a main screen with data from an API , data referring to breweries, I used a 'global stat' to store the username and appear on the second screen, to create this 'global stat', I developed a 'hook' that uses 'context' in a similar way to 'redux ', so I could create a context between the components and use 'state' to store and share the username, I used 'fontAwesome' and 'React Icons' for the icons, and I created routes with 'React router', to navigate between pages securely, and I created some mechanisms to only render page two, after having a username and confirming the age, the username is stored in a 'localstorage', so it can go to page 'main' and refresh or close the browser, and it will continue with the saved data, I created the option to delete the element, clicking on 'the trash', it which element is and deletes the element with the brewery. In addition, the entire project is fully responsive, I created a way in which the user tries to access the second page without authenticating, he will be redirected to a '404' page, as the system checks if he has the 'token' which is the name recorded in localStorage' and after clicking on exit in the menu the 'localStorage' is deleted



## :rocket: Running the project

➡️ **Project Download**
```bash
git clone https://github.com/josefernandez159/FlappyCat.git
```
➡️ **Accessing the project folder**
```bash
cd Cheer-bee
```

➡️ **Installing Dependencies**
```bash
yarn install | npm i | pnpm i
```
➡️ **Starting the project**
```bash
yarn start  | npm start | pnpm start
```

## :heavy_check_mark: Step completed 

-   [x] Create all functions
-   [x] responsibility, all devices.

