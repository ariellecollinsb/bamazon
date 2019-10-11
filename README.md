# Bamazon 

## Author

Arielle Collins

Email: ariellecollinsb@gmail.com

Github: https://github.com/ariellecollinsb

LinkedIn: https://www.linkedin.com/in/arielle-collins-bovatsek-10895899/


## Requirements

- Create an Amazon-like storefront that takes in orders via user input in the command line
- Deplete stock from the store's inventory based on units purchased
- Output result 

## Technologies Used

Mysql,  
Node.js,  
Inquirer.js,  
NPM command line utility + packages

## Functionality

App functionality depends on user input and table data.

- The table is printed to the screen.

- The user is prompted via Inquirer to provide an ID number referencing an item on the table, and then a number of units to be purchased.

- If the ID number does not exist, the user will be informed, and the app will restart. 
![restart](https://i.imgur.com/fu1LiuP.png)

- If the Unit count is not available, the user will be informed that there is insufficient quantities. 
![insufficient quantities](https://i.imgur.com/QAOppPB.png)

- If the ID and Unit are both on the table, the user will be told that they have purchased (x) of product_name. 
![product_name](https://i.imgur.com/SmKubmZ.png). 

- Once there are no errors, the function Update product, will update the number of items in inventory for each product.

## Future Development

I plan on completing the bonus aspects of this app in the future.






