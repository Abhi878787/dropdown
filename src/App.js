import React from "react";
import { Dropdown } from 'rsuite'
import '../node_modules/rsuite/dist/rsuite.min.css';
  
class App extends React.Component {
    render() {
        return (
            <div>
                <h4>React Suite Dropdown Menu Props</h4>
                <Dropdown title="Select Weekday">
		<Dropdown.Item>Monday</Dropdown.Item>
		<Dropdown.Item>Tuesday</Dropdown.Item>
		<Dropdown.Item>Wednesday</Dropdown.Item>
		<Dropdown.Item>Thursday</Dropdown.Item>
		<Dropdown.Item>Friday</Dropdown.Item>
		<Dropdown.Item>Saturday</Dropdown.Item>
		<Dropdown.Item>Sunday</Dropdown.Item>
	</Dropdown>
            </div>
        );
    }
}
  
export default App;