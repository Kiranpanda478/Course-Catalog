module.exports = (app) => {
    const course = require('../controllers/course.controller.js');

    // Create a new course
    app.post('/course', course.create);

    // Retrieve all course
    app.get('/course', course.findAll);

    // Retrieve a single course by id
    app.get('/course/:id', course.findOne);

  

    // Search course
    app.post('/search_filter', course.search_filter);
    // Sort course
    app.post('/sort_filter', course.sort_filter);


  // User to course link
  app.post('/user_to_course', course.user_to_course);

     // Retrieve all course
     app.get('/user_list', course.user_list);

    app.get('/user_course', course.user_course);
    app.post('/user_course_status', course.user_course_status);
    app.post('/user_create', course.user_create);
}