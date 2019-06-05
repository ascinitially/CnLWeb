var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {

    // db.Deal.findAll({include: [db.User]}).then(function (results) {
    //   console.log(results)

    //   let openDeals = [];
    //   let pendingDeals = [];
    //   let closedDeals = [];

    //   for (let i in results) {
    //     if (results[i].status == 'open') {
    //       openDeals.push(results[i])
    //     } else if (results[i].status == 'pending') {
    //       pendingDeals.push(results[i])
    //     } else if (results[i].status == 'closed') {
    //       closedDeals.push(results[i]);
    //     }
    //   }

    //   deals = { openDeals: openDeals, pendingDeals: pendingDeals, closedDeals: closedDeals }
    //   console.log(deals)
    //   res.render("home", deals)

    // });
    res.render("home")
  });
    
    app.get("/contact", function (req, res) {
      res.render("contact");
    })

    app.get("/home", function (req, res) {
      res.render("home");
    })

    app.get("/portfolio", function(req,res) {
      res.render("portfolio");
    })
    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
};
