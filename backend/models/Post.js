const mongoose = require('mongoose')
const validator = require('validator')

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true,
		validator:{
			validator: validator.isURL,
			message: 'Image should be valid URL'
		}
	},
	content: {
		type: String,
		required: true
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment',
	}]

}, {timestamps: true})


const Post = mongoose.model('Post', PostSchema)

module.exports = Post
