const { schema, model } = require('mongoose');
const moment = require('moment');


// CREATE A STUDENT MODEL
const UserSchema = new schema({

username: {
    type: String,
    unique: true,
    required: true,
    trim: true
},
email: {
    type: String,
    required: true,
    unique: true,
    max_length: 50, 
},
thoughts:[
    {
        type: schema.Types.objectId,
        ref:'Thought',
    },
],
friends: [
    {
    type: schema.Types.ObjectId,
    ref:'users',
    },
]
})