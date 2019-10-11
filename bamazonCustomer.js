var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"

});

connection.connect(function (err) {
    if (err) throw err;
    afterConnection();
});

function afterConnection() {
    var query = connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(`Item ID || Product Name   || Department  || Price || Stock Quantity`);
        console.log(`-------------------------------------------------------------------`);
        for(var i = 0; i < res.length; i++){
            console.log(`${res[i].item_id.toString().padEnd(7)} || ${res[i].product_name.toString().padEnd(14)} || ${res[i].department_name.toString().padEnd(11)} || ${res[i].customer_price.toString().padEnd(5)} || ${res[i].stock_quantity}`)
            console.log(`-------------------------------------------------------------------`);
        }
        inquirer
        .prompt([
            {
                type: 'number',
                name: 'buy',
                message: 'What would you like to buy? Insert product id.',
            },
            {
                type: 'number',
                name: 'units',
                message: '... and how many units would you like to purchase?',
            }
        ])
        .then(answers => {
            var query = connection.query("SELECT stock_quantity, product_name FROM products WHERE ?", [
                {
                    item_id: answers.buy
                }
            ], function (err, res) {
                if (err) throw err;
                if (res.length === 0) {
                    console.log(`That item id does not exist! Please start over, and try again!`)
                    connection.end();
                } else if (answers.units <= 0 || answers.units > res[0].stock_quantity) {
                    console.log(`Insufficient Quantity!`)
                    connection.end();
                }
                else {
                    updateProduct(answers.buy, res[0].stock_quantity - answers.units)
                    console.info(`You purchased: ${answers.units} ${res[0].product_name}`);    
                }
            });
        });
    });
    }

function updateProduct(id, units) {
    console.log("Updating inventory...\n");
    connection.query(
        "UPDATE products SET stock_quantity = ? WHERE item_id = ?", 
        [units, id], 
        function (error, results, fields) {
            if (error){
                console.error(error.message);
                return;
            }
        });

    connection.end();
}