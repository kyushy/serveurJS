import React, { Component } from 'react';

// Composant fonctionnel
function Hobby(props) {
  const liStyle = {
    backgroundColor: props.index % 2 === 0 ? 'lightpink' : 'red'
  };
    return(
      <li style={liStyle} onClick={() => props.HobbyWasClicked(props.hobbyName.name)}>
        {props.hobbyName.name}
      </li>
    )
}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.getRequest = this.getRequest.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);

    this.state = {
      page: 1,
	  restaurants: []
    };
  }

  componentWillMount() {
    this.getRequest();
  }

  getRequest() {
    let url = "http://localhost:8080/api/restaurants?page=1&pagesize=20";
    let _this = this;

    fetch(url)
        .then(function(responseJSON) {
            responseJSON.json()
            .then(function(res) {
                console.log(res.data);;
                _this.setState({ test : res.data });
            });
        })
        .catch(function (err) {
            console.log(err);
    });
}

  nextPage() {
    let current = this.state.page;
    this.setState( { page : current + 1 });
  }

  prevPage() {
    let current = this.state.page;
    this.setState( { page : current - 1 });
  }

  render() {
	
	let list = this.state.restaurants.map(
		(el, index) => {
			return <div><td>el.name</td><td>el.cuisine</td></div>
		}
	);
		
    return (
      <div className="App">
		<table>
			<thead>
			<tr>
				<th>Name</th>
				<th>Cuisine</th>
			</tr>
			</thead>
			<tbody>
				<tr>
					{list}
				</tr>
			</tbody>
		</table>
		<button name="Precedent" type="button" onClick={this.prevPage} width="100" height="25"/>
		<button name="Suivant" type="button" onClick={this.nextPage} />
      </div>
    );
  }
}

export default App;