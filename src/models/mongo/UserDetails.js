const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserDetailSchema = new Schema({
    tutorProfile: {
        type: Schema.Types.Mixed,
        default: {
            lessonCount: {
                type: Number,
                default: 0
            }
        }
    },
    
    //- else is user profile
    address: String,
    age: Number,


    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs:  Number
    // }
});
// module.exports = mongoose.model('UserDetail', UserDetailSchema)
mongoose.model('UserDetail', UserDetailSchema)