import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>This is home page</h1>
      <Image src="/window.svg" alt="Window" width={200} height={200} />
    </>
  );
}
