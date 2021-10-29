import { Badge } from 'primereact/badge';
import { Component, useRef } from 'react';
import { Knob } from 'primereact/knob';
import { SpeedDial } from 'primereact/speeddial';
import { Avatar } from 'primereact/avatar';
import { Calendar } from 'primereact/calendar';
import { Slider } from 'primereact/slider';



export class HomeComponent extends Component {
    
    constructor(props) {
        super(props);
        
    this.items = [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    
                }
            }
        ];
        this.basicData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'STEPS',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'CALORIES',
                    backgroundColor: '#FFA726',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.state = {
            goal: 10,
            weight: 50,
            sedentry: 45,
            time: 30,
            value5: [20,80],
            value6: 50
        };
    }
   

    render() {
        
        
        return ( <div className="p-fluid p-grid p-jc-center p-col">
         
         <Avatar style={{ background: 'transparent', color: 'white', 
         position: 'fixed', top: '10px', right: '10px', border: '2px outset silver',
        borderRadius: '50%'}} size="large" 
         icon="pi pi-user" />
  
<div className="card p-shadow-3 p-col-3">
<h3>STEPS</h3>            
<Knob value={2574} min={0} max={7000}  />
<Badge value="2" className="p-mr-2"></Badge>
                </div>
               
                <div className="card p-shadow-3 p-col-3">
                <h3>CALORIES (KCAL)</h3>            
<Knob value={127} min={0} max={500}  />
<Badge value="5" className="p-mr-2"></Badge>
                </div>
                <div className="card p-shadow-3 p-col-3">
<h3>DISTANCE (KM)</h3>            
<Knob value={2.35} min={0} max={10}  />
<Badge value="1" className="p-mr-2"></Badge>
                </div>
               
                <div className="card p-shadow-3 p-col-3">
                <h3>BPM</h3>            
<Knob value={95} min={0} max={120}  />
<Badge value="8" className="p-mr-2"></Badge>
                </div>
                <SpeedDial style={{ position: 'fixed', bottom: '10px', right: '10px'}} direction="left" model={this.items} />
                
                <div className="p-fluid p-grid p-col-12">
                <div className="card p-shadow-3 p-col p-my-3 p-mx-3">
                <h3>GOALS</h3>
                <h5>DISTANCE {this.state.goal} KM</h5>
                <Slider value={this.state.goal} onChange={(e) => this.setState({ goal: e.value })} />
                <h5>WEIGHT {this.state.weight} KG</h5>
                <Slider value={this.state.weight} onChange={(e) => this.setState({ weight: e.value })} />
                <h5>EXERCISE TIME {this.state.time} MIN</h5>
                <Slider value={this.state.time} onChange={(e) => this.setState({ time: e.value })} />
                <h5>SEDENTRY REMINDER {this.state.sedentry} MIN</h5>
                <Slider value={this.state.sedentry} onChange={(e) => this.setState({ sedentry: e.value })} />
                </div>
                <div className="card p-shadow-3 p-col p-my-3 p-mx-3">
                <h3>CALENDAR</h3>
                <Calendar className="p-my-3" value={new Date()} showButtonBar inline showWeek monthNavigator yearNavigator yearRange="2010:2030"></Calendar>
                </div>
                </div>
                </div>
               
               
                );
    }
}