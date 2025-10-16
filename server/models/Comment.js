import mongoose from 'mongoose';

//schema create
const commentSchema= new mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId, //type= object id
        ref: 'blog',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    isApproved:{
        type:Boolean,
        default: false
    }
},{timestamps:true});

// model create
const Comment=mongoose.model('comment', commentSchema);


export default Comment;