// const user = {
// 	name: 'Daniel Micaletti Jr',
// 	age: 38,
// 	location: 'P-Town'
// };

// function getLocation(location){
// 	if(location){
// 		return <p>Location: {location}</p>;
// 	}
// }

// const templateTwo = (
// 		<div>
// 			<h1>{user.name ? user.name : 'Anonymous'}</h1>
// 			{user.age >= 18 && <p>Age: {user.age}</p>}
// 			{getLocation(user.location)}
// 		</div>
// 	);

// -------------------------------------
 
// let count = 0;

// const addOne = () => {
// 	console.log('addOne');
// 	count++; 
// 	renderCounterApp();
// };

// const minusOne = () => {
// 	console.log('minusOne');
// 	count--; 
// 	renderCounterApp();
// };

// const resetCount = () => {
// 	console.log('reset count');
// 	count = 0;
// 	renderCounterApp();
// };

// const renderCounterApp = () => {
// 	const templateTwo = (
// 		<div>
// 			<h1>Count: {count}</h1>
// 			<button onClick={addOne}>+1</button>
// 			<button onClick={minusOne}>-1</button>
// 			<button onClick={resetCount}>reset</button>
// 		</div>
// 	);

// 	ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();


// --------------- with add state ----------

class Counter extends React.Component {

	constructor(props) {
		super(props);

		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);

		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('count');
			const count = parseInt(json, 10);

			if(!isNaN(count)) {
				this.setState(() => ({ count }))
			}
		} catch(e) {
			// pass
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.count !== this.state.count) {
			const json = JSON.stringify(this.state.count);
			localStorage.setItem('count', json);
		}

	}

	handleAddOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		});
	}

	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		});
	}

	handleReset() {
		this.setState(() => {
			return {
				count: 0
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+ 1</button>
				<button onClick={this.handleMinusOne}>- 1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById('app'));





















