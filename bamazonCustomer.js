const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });

connection.connect(function(err) {
    if (err) throw err;
    // afterConnection();
    start();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
function start() {
    inquirer
    .prompt([
      {
        name: "newOrder",
        type: "rawlist",
        message: "What is the ID of the product you would like to buy?",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
      },
   
    ])
    .then(function(inquirerResponse) {

       if (inquirerResponse.newOrder==="1") {
            console.log()
            grand();
           
       }
       if (inquirerResponse.newOrder==="2") {
            hairGel();
            return;
        }
       if (inquirerResponse.newOrder==="3") {
            sandals();
            return;
        }
       if (inquirerResponse.newOrder==="4") {
            pencils();
            return;
        }
        if (inquirerResponse.newOrder==="5") {
            console.log()
            iPhone();   
       }
       if (inquirerResponse.newOrder==="6") {
            fordEscape();
            return;
        }
       if (inquirerResponse.newOrder==="7") {
            tShirt();
            return;
        }
       if (inquirerResponse.newOrder==="8") {
            lemonade();
            return;
        }     
        if (inquirerResponse.newOrder==="9") {
            console.log()
            noteBook();
           
       }
       if (inquirerResponse.newOrder==="10") {
            coffee();
            return;
        }
          
    });
}
function grand() {
    var query = "SELECT * FROM products WHERE product_name, [100Grand]";
//    console.log("Product Name: 100Grand Quantity: " + query)
   var newQuantity = stock_quantity-answer.stock_quantity;
    inquirer
      .prompt({
          type: "input",
          name: "stock_quantity",
          message:"How many do you want to buy?"
      })
      .then(function(answer){
        connection.query(query, function(err, res) {
            for (var i = 0; i < answer.length; i++) { 
                console.log("Product Name: " + "100 Grand" + " || New Quantity: " + newQuantity);
            };
        });
        // start();
    });
    console.log(query.sql);
};

function hairGel(){
    var query = "SELECT * FROM products WHERE product_name, [hair gel]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "hair gel" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function sandals(){
    var query = "SELECT * FROM products WHERE product_name, [sandals]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "sandals" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function pencils(){
    var query = "SELECT * FROM products WHERE product_name, [pencils]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "pencils" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function iPhone(){
    var query = "SELECT * FROM products WHERE product_name, [iphone]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "iphone" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function fordEscape(){
    var query = "SELECT * FROM products WHERE product_name, [ford escape]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "ford escape" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function tShirt(){
    var query = "SELECT * FROM products WHERE product_name, [t-shirt]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "t-shirt" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function lemonade(){
    var query = "SELECT * FROM products WHERE product_name, [lemonade]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "lemonade" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function noteBook(){
    var query = "SELECT * FROM products WHERE product_name, [notebook]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "notebook" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};

function coffee(){
    var query = "SELECT * FROM products WHERE product_name, [coffee]";
    //    console.log("Product Name: 100Grand Quantity: " + query)
       var newQuantity = stock_quantity-answer.stock_quantity;
        inquirer
          .prompt({
              type: "input",
              name: "stock_quantity",
              message:"How many do you want to buy?"
          })
          .then(function(answer){
            connection.query(query, function(err, res) {
                for (var i = 0; i < answer.length; i++) { 
                    console.log("Product Name: " + "coffee" + " || New Quantity: " + newQuantity);
                };
            });
            // start();
        });
        console.log(query.sql);
};
