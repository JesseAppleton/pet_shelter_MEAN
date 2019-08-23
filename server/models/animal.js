const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    species: {
        type: String,
        required: [true, "Species is required"],
        minlength: [3, "Species must be 3 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "A Description is required"],
        minlength: [5, "Describe your animal better, jerk"]
    },
    skills1: { 
        type: String,
        required: [true, "All skills are required"]
    },
    skills2: { 
        type: String,
        required: [true, "All skills are required"]
    },
    skills3: { 
        type: String,
        required: [true, "All skills are required"]
    },
    isDisabled: Boolean
}, {timestamps: true});

mongoose.model("Animal", AnimalSchema);