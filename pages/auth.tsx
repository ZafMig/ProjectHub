import classes from "./style.pages/auth.module.scss";
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useRouter } from 'next/router';
import UIInput from "../Components/UIInputs";
import UIButton from "../Components/UIButton";

const Auth: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = { username, password };
        login(userData)
            .then(() => router.push('/'))
            .catch((error: any) => {
                // Обработка ошибки входа, например, вывод сообщения об ошибке
                console.error("Ошибка входа:", error);
                // Другие действия по обработке ошибки (показ сообщения об ошибке и т. д.)
            });
    };

    return (
        <div className={classes["Main"]}>
            <div className={classes["Main_Auth"]}>
                <h1 className={classes["Main__Auth-text"]}>Авторизация</h1>
                <form onSubmit={handleLogin}>
                    <div className={classes["Main__Auth__form-group"]}>
                        <UIInput
                            text={"Логин"}
                            value={username}
                            setValue={(e) => setUsername(e.currentTarget.value)}
                            type={"log"}
                        />
                        <UIInput
                            text={"Пароль"}
                            value={password}
                            setValue={(e) => setPassword(e.currentTarget.value)}
                            type={"password"}
                        />
                        <UIButton type="submit">
                            Войти
                        </UIButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
