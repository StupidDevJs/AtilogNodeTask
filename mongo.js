const mongoose = require('mongoose');

const manSchema = new mongoose.Schema({
    name: String
});

//adding methods to prororype of class Man. must do it before compilation with mongoose.model
manSchema.methods.speak = function() {
    console.log('this.name>>>>', this.name)
    const greeting = this.name ? `${this.name} greeting you` : 'Bye';
    console.log(greeting)
};

//compilation with mongoose.model
 const Man = mongoose.model('Man', manSchema);

const dima = new Man ({name:'Dima'});

dima.save((err,dima)=>{
    if (err) return console.error(err);
    dima.speak();
})

Man.find(function (err, manSchsema) {
    if (err) return console.error(err);
    console.log(manSchsema);
  })

module.exports = { Man }