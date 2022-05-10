const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = 
  "sk_test_51KwrioE5iVJGok76e2SWoU2SkUlF3q6zdbe7LCvMta9K7TthMiCvIY7PdjjBJogu16zv2soMuA024c6z1oPzgJIA00xYGdEVEB";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;