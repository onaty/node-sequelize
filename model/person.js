module.exports=function (sequelize, DataTypes){
 var Person = sequelize.define("Person",{
name:{
    type: DataTypes.STRING,
    allowNull:false,
    validate:{
        len:[1,100]
    }
},
email:{
    type: DataTypes.STRING,
    allowNull:false
}
 });
 return Person;
};
