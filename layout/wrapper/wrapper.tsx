import Header from "../Header/Header";


interface wrapperProps {
    children: React.ReactNode;
  }

export const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  return (
    <>
    <Header />
    <main>{children}</main>
    </>
  )
}