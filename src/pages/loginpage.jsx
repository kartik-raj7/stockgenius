import React, { useState } from 'react'
import style from '../styles/loginpage.module.scss'
import { Typography } from 'antd'
const loginpage = () => {
const [login,setLogin] = useState(true);
const handletoggleLogin=()=>{
    setLogin(!login);
}
  return (
    <div className={style.loginpage}>
    <div className={style.loginbox}>
    {login?
    <>
    <h2 className={style.logintext}>Login</h2>
    <form>
      <div className={style.userbox}>
        <input type="text" name="" required=""/>
        <label>Email</label>
      </div>
      <div className={style.userbox}>
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <div className={style.userbox}>
        <input type="password" name="" required=""/>
        <label>Confirm Password</label>
      </div>
      
      <a href="/myportfolio">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
      <Typography className={style.togglelogin} >Already have an account <span onClick={handletoggleLogin}>signin</span>?</Typography>
    </form>
    </>:<>
    <h2 className={style.logintext}>Login</h2>
    <form>
      <div className={style.userbox}>
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div className={style.userbox}>
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
      <Typography className={style.togglelogin} >Dont have an account <span onClick={handletoggleLogin}>signup</span>?</Typography>
    </form>
    </>}
  </div>
  </div>
  )
}

export default loginpage