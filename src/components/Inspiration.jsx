import React from "react";
import Integrity from "./Integrity";

export default function Inspiration() {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-1 justify-center items-center mb-10">
        <h5 className="text-primary font-bold">Meet Our Inspiration</h5>
        <h2 className="text-3xl font-bold">Our inspiration</h2>
        <p className="text-gray-600 text-center">
          Rooted in passion and dedication, Unisol finds inspiration in
          elevating medical advancements for transformative surgical
          <br /> solutions and patient care
        </p>
      </div>

      <div>
        <Integrity
          integerityPic={"../assets/images/integrity-pic.png"}
          Integrity={"Integerity"}
          integerityName={"Michelle Obama"}
          integerityText={
            "‘’We learned about honesty and integerity-that the truth matters... that you don't take shortcuts or play by your own set of rules... and success doesn't count unless you earn it fair and square.’’"
          }
        />

        <Integrity
          integerityPic={"/assets/images/kalam.png"}
          Integrity={"Goal"}
          integerityName={"Dr. A. P. J. Abdul Kalam"}
          integerityText={
            "‘’To succeed in your mission, you must have single-minded devotion to your goal’’"
          }
        />

        <Integrity
          integerityPic={"/assets/images/ellen.png"}
          Integrity={"Focus"}
          integerityName={"Ellen DeGeneres"}
          integerityText={
            "‘’Sometimes you can't see yourself clearly until you see yourself through the eyes of others.’’"
          }
        />

        <Integrity
          integerityPic={"/assets/images/kennedy.png"}
          Integrity={"Motivation"}
          integerityName={"John F. kennedy"}
          integerityText={
            "‘’Things do not happen. Things are made to happen.’’"
          }
        />

        <Integrity
          integerityPic={"/assets/images/truett.png"}
          Integrity={"People"}
          integerityName={"S. Truett Cathy"}
          integerityText={
            "‘’Putting people before profits is how we’ve tried to operate from the beginning.’’"
          }
        />
      </div>
    </div>
  );
}
