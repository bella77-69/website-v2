import shop from "../../assets/projects/shop.jpg";
import food from "../../assets/projects/food.jpg";

export const OthprjData = [
  {
    id: 1,
    name: "E-commerce App",
    github: "https://github.com/bella77-69/shopping-cart",
    desc: "A Shopping Cart Project in React JS. Used React-faker to generate realistic data. User can add products to cart, leave reviews on products, and checkout. I also added functionality to app with sorting and filtering products by search.",
    demo: {
      image: shop,
      half: true,
      name: "PREVIEW",
    },
    half: false,
    features: ["Shopping-cart", "Filter Products", "Rating"],
    techs: ["React.js", "Bootstrap", "React-bootstrap", "React-Router", "Faker", "React-Icons"],
  },
  {
    id: 2,
    name: "Food-Recipe App",
    github: "https://github.com/bella77-69/food-recipe-app",
    desc: "A Recipe App that users can search by Name, ingredients, category, popular ingredients such as chicken or beef, or get a random recipe. When a recipe is selected the user recives full recipe instructions along with video instructions as well.   ",
    demo: {
      image: food,
      half: true,
      name: "PREVIEW",
    },
    half: false,
    features: ["Recipies", "Get information", "Recipe Videos", "Food Information",],
    techs: ["React", "React-Router", "Sass", "API", "Materialize-css"],
  },
];
