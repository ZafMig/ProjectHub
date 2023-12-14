import classes from "./style.pages/account.module.scss"
import Header from "../Components/Header"

const Account = () =>{
    return(
       <>
       <Header/>

       <div className={classes["Main"]}>
        <div className={classes["Main__Account"]}>
            <div className={classes["Main__Account-block"]}>
                <h1 className={classes["Main__Account-block__text"]}>Портфолио</h1>
                <img width="100" height="100" src="https://img.icons8.com/ios/50/user-male-circle--v1.png" alt="user-male-circle--v1"/>
            </div>

        </div>

       </div>
       </>
    )
}

export default Account;