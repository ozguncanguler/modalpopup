import "../../../../pstyle.scss";

const Button = (props: any) => {
  console.log(typeof props.onClick);
  console.log(props.onClick);
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
