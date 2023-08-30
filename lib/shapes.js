// Classes for shapes

// Main Shape
class shape{
constructor(text,textColor,shapeColor,logoShape){
this.text = text,
this.textColor = textColor,
this.shapeColor = shapeColor,
this.logoShape = logoShape
}
}

class Circle extends shape{
constructor(text,textColor,shapeColor,logoShape){
super(text,textColor,shapeColor,"circle")
}
}





function shapeMaker(data){

    console.log(data)

const logoInfo = new data.logoShape(data.logoTxt,data.txtColor,data.shapeColor) 

 
console.log(logoInfo.logoShape)



return `test data`


}

module.exports = shapeMaker