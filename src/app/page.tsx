

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems:'center',
      flexDirection:"column",
      border:"1px solid red",
      height:"100vh"
    }}>
      <div>
        <h1>TODO APP</h1>
        <input type="text" />
        <button type="button"> OK </button>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div>
          <input type="checkbox" name="box1" value="" />
          <label > go to collage </label>
        </div>

        <div>
          <input type="checkbox" name="box1" value="" />
          <label > go to collage </label>
        </div>
        <div>
          <input type="checkbox" name="box1" value="" />
          <label > go to collage </label>
        </div>
        <div>
          <input type="checkbox" name="box1" value="" />
          <label > go to collage </label>
        </div>
      </div>
    </div>

  );
}
