CREATE DATABASE recipeapi;

CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    title CHAR(20),
    description VARCHAR(255),
    ingredients_name VARCHAR(255),
    instructions VARCHAR(255),
    prep_time INT,
    cook_time INT,
    total_time INT ,
    servings INT,
    cuisine text,
    meal_type text,
    difficulty text,
    author_name CHAR(20)
);