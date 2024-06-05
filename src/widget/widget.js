import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget01.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)
    draw.circle().size(350).move(400,325).fill(nextColor()).opacity(0.2)
    draw.circle().size(265).move(250,325).fill(nextColor()).opacity(0.8)
}

export default widget