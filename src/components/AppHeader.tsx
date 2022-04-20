interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
  const long = title.length >= 5
  const short = title.length < 5 
    return (
      <header>
        {long &&<h1>{title}</h1>}
        {short && <><h1>{title}</h1> <p>(The title is a work-in-progress)</p></>} 
      </header>
    )
}
