const mysql = require('mysql');
// connection configurations
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'course_catalog'
});

// connect to database
connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

// Create and Save a new course
exports.create = (req, res) => {
    // Validate request
    if (!req.body.description) {
        return res.status(400).send({
            message: "Description can not be empty"
        });
    }
    var params = req.body;
    connection.query("INSERT INTO course SET ? ", params,
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: true,
                message: 'New Course has been created successfully.'
            });
        });
};

// Retrieve and return all course from the database.
exports.findAll = (req, res) => {
    connection.query('select * from course',
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'All Course Get Data'
            });
        });
};

// Find a single course with a id
exports.findOne = (req, res) => {

    connection.query('select * from course where Id=?',
        [req.params.id],
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'Get Single Course'
            });
        });
};
// Search Course by Name
exports.search_filter = (req, res) => {
    // Validate request
    if (!req.body.search) {
        return res.status(400).send({
            message: "Search can not be empty"
        });
    }
    var params = req.body;
    connection.query('select * from course where name like ?',
    '%'+[params.search]+'%',
    function (error, results, fields) {
        if (error) throw error;
        return res.send({
            data: results,
            message: 'Search Filter'
        });
    });

};
// Sort Course by Price/Rating/Category_Id
exports.sort_filter = (req, res) => {
    // Validate request
    if (!req.body.sort) {
        return res.status(400).send({
            message: "Sort can not be empty"
        });
    }
    var params = req.body;
    if(params.sort=='price'){
    var query='select * from course order by price asc';
    }else if(params.sort=='rating'){
        var query='select * from course order by rating asc';
    }else if(params.sort=='category'){
        var query='select * from course order by category_id asc';
    }else{
        var query='select * from course';
    }
    connection.query(query,
    function (error, results, fields) {
        if (error) throw error;
       return res.send({
        data: results,
        message: 'Sort Filter'
    });
    });

};

// Create and Save course to user
exports.user_to_course = (req, res) => {
    // Validate request
    if (!req.body.user_id) {
        return res.status(400).send({
            message: "Description can not be empty"
        });
    }
    if (!req.body.course_id) {
        return res.status(400).send({
            message: "Couser Id can not be empty"
        });
    }
    var params = req.body;
    connection.query("INSERT INTO user_course SET ? ", params,
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: true,
                message: 'User to Course has been created successfully.'
            });
        });
};

// Retrieve and return all course from the database.
exports.user_list = (req, res) => {
    connection.query('select * from users',
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'All Users Get Data'
            });
        });
};

exports.user_course = (req, res) => {
    connection.query('SELECT uc.id,u.name,u.mobile,u.email,u.address,u.created_at,uc.course_id,c.name as c_name,uc.status,uc.progress FROM users u inner JOIN user_course uc ON u.id=uc.user_id inner JOIN course c ON uc.course_id=c.id',
        function (error, results, fields) {
            if (error) throw error;
            return res.send({
                data: results,
                message: 'All Users to course Get Data'
            });
        });
};

exports.user_course_status = (req, res) => {
    // Validate request
   
    var status = req.body.status;
    var id = req.body.id;

    connection.query('update user_course set status = ? where id = ?',
    [status,id],
    function (error, results, fields) {
        if (error) throw error;
        return res.send({
            data: results.affectedRows,
            message: 'User to course update'
        });
    });

};