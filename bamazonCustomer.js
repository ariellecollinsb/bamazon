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
    console.log("connected as id " + connection.threadId + "\n");
    afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    


});
inquirer
    .prompt([
        {
            type: 'submit',
            name: 'buy',
            message: 'What would you like to buy? Insert product id.',
            submit: "" ,

        },
        {
          type: 'submit',
          name: 'units',
          message: '... and how many units would you like to purchase?',
          submit: "" ,

      },
    ])
    .then(answers => {
        console.info(`You purchased: ${answers.units} of  ${answers.buy}`);

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            console.log(res);

            inquirer.prompt([
                {
                    type: 'list',
                    choices: function () {
                        var arr = []
                        for (var i = 0; i < res.length; i++) {
                            arr.push(res[i].item)

                        }
                        return arr
                    },
                    name: "item",
                    message: "What would you like to buy?"














// function updateProduct() {
//     console.log("Updating inventory...\n");
//     var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//             {
//                 product_name: "",
//             },
//             {
//                 stock_quantity: parseInt(""),
//             }
//         ],
//         function(err, res) {
//             if (err) throw err;
//             console.log(res.affectedRows + " products updated!\n");
//             deleteProduct();
//         }
//         );
//         console.log(query.sql);
//     }

//     function deleteProduct() {
//         console.log("Deleting sold out inventory...\n");
//         connection.query(
//             "DELETE FROM products WHERE ?",
//             {
//                 product_name: "",
//             },
//             function(err, res) {
//                 if (err) throw err;
//                 console.log(res.affectedRows + " products deleted!\n");
//                 // Call readProducts AFTER the DELETE completes
//                 readProducts();
//             }
//             );
//         }

//         function readProducts() {
//             console.log("Selecting all products...\n");
//             connection.query("SELECT * FROM products", function(err, res) {
//                 if (err) throw err;
//                 // Log all results of the SELECT statement
//                 console.log(res);
//                 connection.end();
//             });
//         }