import React from "react";

export default function Integrity({
  integerityPic,
  Integrity,
  integerityName,
  integerityText,
}) {
  return (
    <div
      style={{ backgroundImage: 'url("/assets/images/integrity.png")' }}
      className="md:h-60 bg-cover"
    >
      <div className="flex gap-2.5 md:gap-10 justify-center items-center p-5 flex-col md:flex-row">
        <div className="flex-[1] flex justify-end items-center">
          <img
            src={integerityPic}
            alt={Integrity}
            className="md:w-60 md:h-52 w-[100px] h-[90px] p-1"
          />
        </div>

        <div className="md:flex-[2] flex flex-col md:pr-32 text-center md:text-start">
          <h2 className="text-xl font-bold">{Integrity}</h2>
          <h5 className="font-semibold">{integerityName}</h5>
          <p className="mt-2">
            {/* &#34;We learned about honesty and integrity-that the truth matters… that  you don&#39;t take shortcuts or play by  your own set of rules… and success doesn&#39;t count unless you earn it fair and square.&#34; */}
            {integerityText}
          </p>
        </div>
      </div>
    </div>
  );
}
