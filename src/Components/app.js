import React from 'react'
import ReactDOM from 'react-dom';
import twemoji from 'twemoji';

class App extends React.Component {
		
	parseTwemoji (){
		const node = ReactDOM.findDOMNode(this);
		twemoji.parse(node);
	}

	componentDidMount() {
		this.parseTwemoji();
	}


	render(){
		return <div className="wrapper">

			<h1 className="title">
				Api Twemoji with React.js
			</h1>

			<div className="container-emojis">
				<ul className="list-emojis">
					<li>😂</li>
					<li>☀</li>
					<li>✏</li>
					<li>🎓</li>
					<li>🌏</li>
					<li>💑</li>
					<li>🙏</li>
					<li>📕</li>
					<li>🌉</li>
					<li>🗽</li>
					<li>🚍</li>
					<li>🚬</li>
					<li>🍟</li>
				</ul>
			</div>

		</div>
	}
}


ReactDOM.render(
	<App/>,
	document.getElementById('container')
);