// Pick a tag to do our code in
// then lets set up js in this tag
const container = document.querySelector('section')

const params = {
  width:500,
  height:500,
}

const two = new Two(params)
two.appendTo(container)
//  We want to add a square
const shape = two.makeRectangle(150, 150, 200, 200)
shape.fill = '#f9bc31'
shape.noStroke()
shape.rotation = Math.PI *0.25

// Lets listen for any update
two.bind("update",function () {
  // shape.rotation = shape.rotation + 0.05
shape.rotation +=0.05
})



two.play()
