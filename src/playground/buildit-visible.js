
class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false
		}

		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

	}

	handleToggleVisibility() {

		this.setState((prevState) => {
			return {
				isVisible: !prevState.isVisible
			}
		});

	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				{
					this.state.isVisible && <h2>Showing some stuff!</h2>
				}
				<button onClick={this.handleToggleVisibility}>{this.state.isVisible ? 'Hide details' : 'Show Details'}</button>
			</div>

		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let isVisible = false;

// const toggleVisible = () => {
// 	isVisible = !isVisible;
// 	render();
// };

// const render = () => {

// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			{
// 				isVisible && <h2>Showing some stuff!</h2>
// 			}
// 			<button onClick={toggleVisible}>{isVisible ? 'Hide details' : 'Show Details'}</button>
// 		</div>
// 	);
// 	ReactDOM.render(template, appRoot);
// };

// render();
