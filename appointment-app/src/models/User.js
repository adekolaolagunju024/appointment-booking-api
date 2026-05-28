const mongoose = require('mongoose'); // Import mongoose module

mongoose.connect('mongodb://127.0.0.1:27017/SoftwareEngineering');// Connect to mongoDB database

const fields = {
    name: String,
    location: String,
    age: Number,    
} 
    
   //define database data type

   const Student = mongoose.model('Students', fields); // defining a collection of Students record
   
   const student = new Student({
    name:"Debs"
   });

   const student1 = new Student({
    name: "Davies"
});

   const student2= new Student({
    name:"Moses"
   });

student.save()
student1.save()
student2.save()