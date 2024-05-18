

function SectionTitle({ title, subTitle, color }) {


  return (
    <div className="pb-10 flex flex-col  items-center gap-5">
      <h4 className="border-b-2 pb-2 text-yellow-400 px-10 italic">
        ----- {subTitle} -----
      </h4>
      <h2
        className={`text-3xl ${
          color === "white" ? "text-white" : ""
        } border-b-2 font-semibold pb-3 px-10 uppercase`}
      >
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
