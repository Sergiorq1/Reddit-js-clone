const Post = require('../models/post');

module.exports = (app) => {

    // CREATE
    app.post('/posts/new', (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
      const post = new Post(req.body);
  
      // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
      post.save(() => res.redirect('/'));
    });
    
    app.get('/', (req, res) => {
        Post.find({}).lean()
          .then((posts) => res.render('posts-index', { posts }))
          .catch((err) => {
            console.log(err.message);
          })
      })
  
};
