import { Typography } from "../../components/Typography/Typography";
import styles from './Main.module.scss'; // Проверьте путь!

interface MainPageProps {
  testProp: string;
}

export const MainPage = ({ testProp }: MainPageProps) => {
  console.log('Styles object:', styles); // Должен вывести объект с классами
  return (
    <div className={styles.root}>
      <Typography variant="h1" color="black" align="center">
        {testProp}
      </Typography>
    </div>
  );
};