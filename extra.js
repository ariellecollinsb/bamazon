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

function deleteProduct() {
    console.log("Deleting sold out inventory...\n");
    connection.query(
        "DELETE FROM products WHERE ?",
        {
            product_name: "",
        },
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products deleted!\n");
            // Call readProducts AFTER the DELETE completes
            readProducts();
        }
        );
    }

    function readProducts() {
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            console.log(res);
            connection.end(); 