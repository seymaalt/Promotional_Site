
export default function InputUrl() {
  return (
    <div
      style={{
        position: "relative",
        width: "400px",  
        alignItems: "center",
      }}
    >
      <div>
      <p  style={{
            backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
            backgroundClip: "text",
            color: "transparent",
            fontSize:"24px"
          }}>BUSINESS NAME</p>
      <input
        type="text"
        style={{
          borderRadius: "30px",
          padding: "15px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          width: "100%",
          height: "25px",
        }}
        placeholder="Your business name"
      />
      </div>
      <div>
      <p  style={{
            backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
            backgroundClip: "text",
            color: "transparent",
            fontSize:"24px"
          }}>DESCRIPTION</p>
      <textarea
        type="text"
        style={{
          borderRadius: "30px",
          padding: "15px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          width: "100%",
          height: "125px",
        }}
        placeholder=""
      />
       <button
        style={{
          borderRadius: '30px',
          padding: '10px 60px',
          backgroundImage: "linear-gradient(45deg, #7040e2, #906ad7, #ad92cb)",
          color: 'white',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          height: '50px',
          top: '50%',
          marginTop:"20px"
        }}
      >
        Generate
      </button>
      </div>
    </div>
  );
}
