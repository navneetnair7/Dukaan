const itemSubscribe = require("../models/ItemSubscription");

const addSubscription = async (req, res) => {
  try {
    addedItem = itemSubscribe.create(
      {
        ItemName: req.body.itemname,
        Subscription: req.body.subscription,
        Customer: req.params.customer,
        Store: req.body.store,
        Image: req.body.image
      },
      {
        fields: ["ItemName", "Subscription", "Customer", "Store", "Image"],
      }
    );
  } catch (err) {
    console.log(err);
  }
  if (!addedItem) {
    return res.status(500).json({ message: "Invalid Item" });
  } else {
    return res.status(201).json({ addedItem });
  }
};

const showProducts = async (req, res) => {
  try {
    itemSubscribe.findAll({
      attributes: ['ItemName', 'Subscription', 'Store', 'Image'],
      where: {
        Customer: req.params.name
      }
    }).then(result => {
      console.log(result);
      res.send(result)
    }) 
  }
  catch (err) {
    console.log(err);
  }
}

exports.addSubscription = addSubscription;
exports.showProducts = showProducts;