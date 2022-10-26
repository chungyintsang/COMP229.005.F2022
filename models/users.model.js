// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

let mongoose = require('mongoose');
let crypto = require('crypto');

//Create a model class
let usersSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            match: [/.+\@.+\..+/, "Please enter a valid email address"]
        },
        username: {
            type: String,
            unique: true,
            required: 'Username is required',
            trim: true
        },
        password: {
            type: String,
            validate: [(password) => {
                return password && password.length > 6;
            }, 'Password should be at least 6-character long']
        },
        //Attribute to enhace the encryption
        salt: String,
        age: Number,
        gender: String,
        created: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

// Middleware pre. Before save
usersSchema.pre('save', function(next) {
    if (this.password) {
        //random collectors to create different coombinations using salt
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// Middleware post. After save, do encryption
usersSchema.post('save', function(next){
    console.log('The user "' + this.username + '" details were saved.');
});

usersSchema.methods.hashPassword = function(password){
    return crypto.pdkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64'); //sha512: alglorithhm used to encrypt
};

usersSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

usersSchema.statics.findUniqueUsername = function(username, suffix,
    callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

usersSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

module.exports = mongoose.model('Users', usersSchema);