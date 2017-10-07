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

router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author', 'publishDate'];
    for(let i=0; i< requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!field in req.body)) {
        const message = `Missing \`${field}\` in request body`;
        console.error(message);
        return res.status(400).send(message);
      }
      const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
      res.status(201).json(item);
    }
});
