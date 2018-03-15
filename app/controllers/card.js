const express = require('express')
const model = require('../models/card')
const { checkTokenMiddleware } = require("../auth/jwt");
const { isAdmin } = require("../auth/authorizations");

module.exports = express
  .Router()
  .get("/", (req, res) => {
    model
      .getCards()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .post("/", checkTokenMiddleware, isAdmin, (req, res) => {
    const { name } = req.body;
    model
      .createCard({ name })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .put("/:id", checkTokenMiddleware, isAdmin, (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    model
      .updateCard({ id, name })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .delete("/:id", checkTokenMiddleware, isAdmin, (req, res) => {
    const { id } = req.params;
    model
      .deleteCard(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });