import { AbstractFractal, TreeFractal } from 'fractule'

const tree = new TreeFractal({
  scale: .5,
  // epsilon: .55 + Math.random() * .25,
  epsilon: .5,
  offset: 0,
  // width: 600,
  // height: 450,
  depth: 6
})

tree.randomize()
tree.draw()

console.log('tree should be drawn...')
