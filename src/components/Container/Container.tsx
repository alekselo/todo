
import { ReactNode } from "react";
import style from "./style.module.scss";


type Props = {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Container;