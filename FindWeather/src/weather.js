import React, {Component} from "react";
import './App.css'
class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            minTemp: null,
            maxTemp: null,
            city: null
        }
        this.search = this.search.bind(this)
    }

    search() {
        let appId = '8714aadc5b0cd4aeca0a9617d7fec43b'
        let searchCity = document.getElementById('city').value
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&appid="+appId)
            .then(res => res.json())
            .then(
                (result) => {

                    if (result.cod != '404') {
                        console.log(result)
                        this.setState({
                            temp: result.main.temp,
                            minTemp: result.main.temp_min,
                            maxTemp: result.main.temp_max,
                            city: searchCity//Delhi
                        })
                    }
                }
            )
    }

    render() {
        console.log("City2")
        if (this.state.city == null) {
            return (
                <div>
                    <input type="text" id="city" placeholder="Enter the City Name"/>
                    <button onClick={this.search}>Search</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3>Max temp:{this.state.maxTemp}</h3>
                    <h3>Min temp:{this.state.minTemp}</h3>
                </div>
            )
        }
    }
}
export default City
// Mounting creates the components.
//
//     Constructor assigns the memory to object.
//     It is called when the component is created.
//     Render is used to put the component to tree
//
// ComponentDidMount is invoked as soon as the component is rendered to the webpage or tree
//
// Update:
//     1)we can update only those things which are already present
