import React, { useState, useRef } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import { Toast } from 'primereact/toast';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { TabView,TabPanel } from 'primereact/tabview';
import {Password} from 'primereact/password';
import PrimeReact from 'primereact/api';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useHistory } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './Home';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');
  const [OTPCode, setOTPCode] = useState('');
  const [username, setUsername] = useState('');
  const toastRef = useRef();
  const options = ['Phone', 'Email'];
  const [activeIndex, setActiveIndex] = useState(0);
  let users = [{name: name, surname: surname, phone: phone, email: email, OTP: OTP}];
  PrimeReact.ripple = true;

  const onFormSubmit = (e) => {
    if (name && surname && phone && email) {
      toastRef.current.show({ severity: 'Created', summary: name + ' ' + surname, life: 3000 });
    }
   users = [{name: name, surname: surname, phone: phone, email: email, OTP: OTP}];
   setActiveIndex(1);
   e.preventDefault();   

  }
  
  const onFormLogin = (e) => {

  }

  const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

  return ( 
    
    <div className="App">
      
      <Toast ref={toastRef} />
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
{OTPCode === '1234' ? <HomeComponent/> : 
      <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
      <TabPanel header="Register">
    <form className="p-d-flex p-jc-center p-mt-4" onSubmit={onFormSubmit}>
      <div className="p-shadow-3 p-fluid p-grid p-lg-4 p-md-6">
      <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-user" />
                                    <InputText keyfilter="alphanum" inputId="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="name">Name</label>
        </span>
        </div>
      
        <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-user" />
                                    <InputText keyfilter="alphanum" inputId="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                               <label htmlFor="surname">Surname</label>
        </span>
        </div>
        <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-phone" />
                                    <InputText keyfilter="num" inputId="phone" label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor="name">Phone</label>
        </span>
        </div>
        <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-envelope" />
                                    <InputText keyfilter="email" inputId="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                               <label htmlFor="email">Email</label>
        </span>
        </div>
        <div className="p-field p-col-12">
                                <span className="p-input-icon-left">                                     
                                 <label className="" htmlFor="OTP">Send OTP</label>                                  
         <SelectButton id="OTP" value={OTP} options={options} onChange={(e) => setOTP(e.target.value)} />
        </span>
</div>
        
        <Button type="submit" label="Register" icon="pi pi-user-plus" onClick={() => onClick('displayBasic')} className="p-ml-2"/>
      </div>
      </form>
      </TabPanel>

  <TabPanel header="Login" >
  <form className="p-d-flex p-jc-center p-mt-4" onSubmit={onFormLogin}>
      <div className="p-shadow-3 p-fluid p-grid p-lg-4 p-md-6">
      <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-envelope" />
                                    <InputText keyfilter="email" inputId="username" label="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="username">Email</label>
        </span>
        </div>
      
        <div className="p-field p-col-12">
                                <span className="p-float-label p-input-icon-left">
                                    <i className="pi pi-lock" />
                                    <Password inputId="OTPCode" value={OTPCode} onChange={(e) => setOTPCode(e.target.value)} />
                               <label htmlFor="OTPCode">OTP</label>
        </span>
        </div>
        <h4>Enter 1234 For This Demo</h4>
        <Button type="submit" label="Login" icon="pi pi-sign-in" className="p-ml-2"/>
        </div>
        </form>
  </TabPanel>
      </TabView>
      }
      <div>
      <Dialog responsive={displayResponsive} header="Users" visible={displayBasic} style={{ width: '75vw' }} onHide={() => onHide('displayBasic')}>
                    
<div className="card">
                <DataTable value={users}>
                    <Column field="name" header="Name"></Column>
                    <Column field="surname" header="Surname"></Column>
                    <Column field="phone" header="Phone"></Column>
                    <Column field="email" header="Email"></Column>                    
                </DataTable>
            </div>
            </Dialog>
        </div>
        
    </div>
  );
  
}

export default App;
