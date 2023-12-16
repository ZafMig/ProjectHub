import Header from "../Components/Header";
import classes from "./style.pages/projects.module.scss"
import { joinProject } from '../services/projectService';

const Projects = () => {

const handleJoinProject = async () => {
        try {
            // Вызываем функцию для присоединения к проекту
            const result = await joinProject();
            window.location.href = "/studentProjects"

            // Обработка результата, например, показ сообщения об успешном присоединении к проекту
            console.log('Успешно присоединились к проекту:', result);
        } catch (error) {
            // Обработка ошибки, например, вывод сообщения об ошибке
            console.error('Ошибка при присоединении к проекту:', error);
        }

    };
    

    return (
        <>
            <Header />

            <div className={classes["Main"]}>
                <div className={classes["Main__Projects"]}>
                    <h1 className={classes["Main__Projects-text"]}>Доступные проекты</h1>

                    <div className={classes['Main__Projects-blocks']}>
                        <p>имя проекта</p>
                        <p>описание проекта</p>
                        {/* Добавляем кнопку для присоединения к проекту */}
                        <button onClick={handleJoinProject}>Присоединиться к проекту</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
