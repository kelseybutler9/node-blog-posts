const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

BlogPosts.create(
  'Blog Post 1', 'Content of 1st', 'Me', '10/7/2017');

BlogPosts.create(
    'Blog Post 2', 'Content of 2nd', 'Me', '10/20/2017');

router.get('/', (req, res) => {
      res.json(BlogPosts.get());
});
