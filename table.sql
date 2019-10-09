DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  customer_price  INTEGER NOT NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("FLoral Perfume", "Fragrance", "35", "100");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Sunglasses", "Accessories", "50", "20");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Ankle Boots", "Foot Wear", "75", "20");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Scarf", "Accessories", "20", "100");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Fluffy Socks", "Hoisery", "20", "100");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Leggings", "Hosiery", "20", "50");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Flip Flops ", "Foot Wear", "75", "20");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("HeadBand", "Accessories", "20", "100");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Perfume Cream", "Fragrance", "20", "100");

INSERT INTO products (product_name, department_name, customer_price, stock_quantity)
VALUES ("Shapewear", "Lingerie", "40", "50");