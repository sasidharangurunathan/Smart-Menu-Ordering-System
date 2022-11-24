import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

Reactotron.configure() // we can use plugins here -- more on this later
    .connect() // let's connect!
const reactotron = Reactotron.configure({ name: 'Visibility ' })
    .use(reactotronRedux())
    .connect() //Don't forget about me!

export default reactotron;