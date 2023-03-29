require('dotenv').config();

let app = require('./index');
let port =  process.env.PORT || 8372;

app.listen(port, '192.168.77.125', function() {
    console.log('Express server listening on port ' + port);
});
