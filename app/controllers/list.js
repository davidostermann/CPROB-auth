const express = require('express')
const model = require('../models/list')
const { checkTokenMiddleware } = require("../auth/jwt");
const { isAdmin } = require("../auth/authorizations");

module.exports = express
  .Router()
  .get("/full", (req, res) => {
    model
      .getFullLists()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .get("/", (req, res) => {
    model
      .getLists()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .post("/", checkTokenMiddleware, isAdmin, (req, res) => {
    const { name } = req.body;
    model
      .createList(name)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .put("/:id", checkTokenMiddleware, isAdmin, (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    model
      .updateList({ id, name })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .delete("/:id", checkTokenMiddleware, isAdmin, (req, res) => {
    const { id } = req.params;
    model
      .deleteList(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });