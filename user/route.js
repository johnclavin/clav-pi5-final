
const jrouter = require('express').Router();
let user = require('../user/model.js');

jrouter.route('/').get((req, res) => {
    user.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

jrouter.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new user({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

jrouter.route('/:id').get((req, res) => {
    user.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

jrouter.route('/:id').delete((req, res) => {
  user.findByIdAndDelete(req.params.id)
      .then(() => res.json('user deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

jrouter.route('/:id').put((req, res) => {
  user.findById(req.params.id)
      .then(user => {
          user.username = req.body.username;

          user.save()
              .then(() => res.json('user updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = jrouter;

