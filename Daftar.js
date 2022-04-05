import React, { useState } from "react";
import { Link } from "react-router-dom";

var Recaptcha = require("react-recaptcha");

var callback = function() {
    console.log('Done!!!!');
};

var verifyCallback = function(response) {
    console.log(response);
};

const Daftar = () => {
    const [picname, setPicname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [servicegroup, setServiceGroup] = useState('');
    const [servicetype, setServiceType] = useState('');
    const [channel, setChannels] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const onChangePicname = (e) => {
        const value = e.target.value
        setPicname(value)
    }

    const onChangeCompany = (e) => {
        const value = e.target.value
        setCompany(value)
    }

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangeServiceGroup = (e) => {
        const value = e.target.value
        setServiceGroup(value)
    }

    const onChangeServiceType = (e) => {
        const value = e.target.value
        setServiceType(value)
    }

    const onChangeChannels = (e) => {
        const value = e.target.value
        setChannels(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const onChangeRePassword = (e) => {
        const value = e.target.value
        setRePassword(value)
    }

    return ( <
        div >
        <
        form action = " "
        method = "post" >
        <
        div className = "Logo" >
        <
        center >
        <
        h3 > FORM DAFTAR < /h3>  <
        img src = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-hand-drawn-cartoon-list-plant-illustration-png-image_5357532.jpg"
        alt = "ikonlogin"
        className = "ikon"
        height = "100"
        width = "300" / >
        <
        /center>

        <
        div className = "container" >
        <
        div className = "row justify-content-center" >
        <
        div className = "md-col-6" >
        <
        div className = "card p-4" >
        <
        div className = "card-body" >
        <
        div className = "form-group" >

        <
        label > PIC Name < /label> <
        input type = "text"
        placeholder = "Masukkan PIC Name"
        className = "form-control"
        value = { picname }
        onChange = { onChangePicname }
        />

        <
        label > Company Name < /label> <
        input type = "text"
        placeholder = "Masukkan Company"
        className = "form-control"
        value = { company }
        onChange = { onChangeCompany }
        />

        <
        label > Email < /label> <
        input type = "email"
        placeholder = "Masukkan Alamat Email"
        className = "form-control"
        value = { email }
        onChange = { onChangeEmail }
        />

        <
        label > Username < /label> <
        input type = "text"
        placeholder = "Masukkan Username"
        className = "form-control"
        value = { username }
        onChange = { onChangeUsername }
        />

        <
        div >
        Service Group:
        <
        /div>

        <
        div >

        <
        input type = "radio"
        id = "radio1"
        value = { servicegroup }
        onChange = { onChangeServiceGroup }
        /> <
        label
        for = "radio1" > Shared < /label>  

        <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio2"
        value = { servicegroup }
        onChange = { onChangeServiceGroup }
        /> <
        label
        for = "radio2" > Dedicated < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio3"
        value = { servicegroup }
        onChange = { onChangeServiceGroup }
        /> <
        label
        for = "radio3" > On Prem < /label>  <
        /div>

        <
        div >
        Service Type(Jika memilih Dedicated dan On Prem):
        <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio1"
        value = { servicetype }
        onChange = { onChangeServiceType }
        /> <
        label
        for = "radio1" > FAQ < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio2"
        value = { servicetype }
        onChange = { onChangeServiceType }
        /> <
        label
        for = "radio2" > Transactional < /label> <
        /div>

        <
        div >
        Channels:
        <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio1"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        label
        for = "radio1" > WhatsApp < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio2"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        label
        for = "radio1" > Telegram < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio3"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        label
        for = "radio1" > Slack < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio4"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        label
        for = "radio1" > Coster < /label> <
        /div>

        <
        div >
        <
        input type = "radio"
        id = "radio5"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        label
        for = "radio5" > Custom: < /label> <
        input type = "textarea"
        id = "radio5"
        value = { channel }
        onChange = { onChangeChannels }
        /> <
        /div>

        <
        label > Password < /label> <
        input type = "password"
        placeholder = "Masukkan Password"
        className = "form-control"
        value = { password }
        onChange = { onChangePassword }
        />

        <
        label > Re - Confirm Password < /label> <
        input type = "password"
        placeholder = "Masukkan Password"
        className = "form-control"
        value = { repassword }
        onChange = { onChangeRePassword }
        />

        <
        div >
        <
        center >
        <
        Recaptcha sitekey = "6Lc9h0IfAAAAACL7URGFTaBJi4KuwYMAf9VpEJvH"
        render = "explicit"
        verifyCallback = { verifyCallback }
        onloadCallback = { callback }
        /> <
        /center>

        <
        /div>

        <
        button className = "btn-primary" > Daftar < /button> 

        <
        span className = "bdaf" > Jika sudah punya akun ? < Link to = '/' > Login < /Link>disini</span >

        <
        /div>

        <
        /div>


        <
        /div> <
        /div> <
        /div> <
        /div>  <
        /div>  <
        /form>  <
        /div>
    )
}

export default Daftar