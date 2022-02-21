import Link from "next/link";
import Navbar from "./Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
}
