export default function InputUrl({ onClick }) {
  return (
    <div className="buildButtonDiv">
      <button
        onClick={onClick}
        style={{
          position: "absolute",
          borderRadius: "30px",
          padding: "10px 20px",
          backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
          color: "white",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          height: "50px",
          transform: "translateY(-50%)",
        }}
      >
        Build A Free Website
      </button>
    </div>
  );
}
