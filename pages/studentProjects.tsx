import classes from "./style.pages/studentProjects.module.scss"
import Header from "../Components/Header"

const Projects = () =>{
    return(
        <>
        <Header/>

        <div className={classes["Main"]}>
            <div className={classes["Main__Block"]}>
                <div className={classes["Main__Block-text"]}>
                    <h1>Действущие проекты</h1>
                    <div className={classes["Main__Block-works"]}>
                        <div className={classes["Main__Block-works__work"]}>
                            <p>Имя проекта</p>
                            <p>Опсание проекта</p>
                            <div className={classes["Main__Block-works__work-button"]}>
                                <p>Подробнее</p> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes["Main__Block__succes"]}>
                    <h1 className={classes["Main__Block__succes-text"]}>Выполненные работы</h1>

                    <div className={classes["Main__Block__succec-works"]}>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Projects;