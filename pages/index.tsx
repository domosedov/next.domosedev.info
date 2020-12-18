import Head from "next/head";

export default function Home() {
  const handleClick = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    const response = await fetch("https://api.domosedev.info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "Hello World" }),
      credentials: "include",
      // mode: "cors",
    });

    console.log(await response.json());
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hii</h1>
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
