import Image from "next/image";
import NAVBAR from "./components/navbar/navbar";
import HERO from "./components/hero/page";
import CONTAINER from "./components/container/container";
import "./page.css"

export default function Home() {

  return (
    <>
      <NAVBAR />
      <HERO />
      <div className="conatiner-boxes-x">
        <h1 className="heading-2">
          Popular Color Palettes
          Collection of 1000+ color palettes.
          Pick your perfect color palette for your next dream project.
        </h1>

        <div className="conatiner-boxes">
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
          <CONTAINER customstyle={{ backgroundColor1: "#08daff", backgroundColor2: "#ff0866", backgroundColor3: "#ff9808", backgroundColor4: "#569682" }} />
        </div>
      </div>
    </>
  );
}
