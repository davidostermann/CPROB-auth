const express = require('express')
const model = require('../models/user')
const { checkTokenMiddleware } = require('../auth/jwt')
const { isAdmin } = require('../auth/authorizations')
const { ownAccount } = require("../auth/authorizations");

module.exports = express
  .Router()
  .get("/", checkTokenMiddleware, (req, res) => {
    model
      .getUsers()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  // .post('/', (req, res) => {
  //   const { lastname, firstname } = req.body;
  //   model.createUser({ firstname, lastname })
  //     .then(result => res.send(result))
  //     .catch(err => console.log(err))
  // })
  /**
   * Move a card
   */
  .put(
    "/:userId/card/:cardId/list",
    checkTokenMiddleware,
    ownAccount,
    (req, res) => {
      const { userId, cardId } = req.params;
      const { listId } = req.body;
      model
        .setListCard({ userId, cardId, listId })
        .then(result => res.json(result))
        .catch(err => res.json(err));
    }
  )
  /**
   * Add a card to a user
   */
  .post("/:userId/card", checkTokenMiddleware, ownAccount, (req, res) => {
    const { userId } = req.params;
    const { cardId } = req.body;
    model
      .addCard({ userId, cardId })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .put("/:id", checkTokenMiddleware, ownAccount, (req, res) => {
    const { id } = req.params;
    const { firstname, lastname } = req.body;
    model
      .updateUser({ id, firstname, lastname })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  })
  .delete("/:id", checkTokenMiddleware, isAdmin, (req, res) => {
    const { id } = req.params;
    model
      .deleteUser(id)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });