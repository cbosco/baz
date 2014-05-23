var Lib = require('app/lib');

function App() {
    Lib.default();
    console.log('app.js included');
    if (typeof $ !== 'undefined') {
        console.log('jquery included');
    }
}

export default App;
