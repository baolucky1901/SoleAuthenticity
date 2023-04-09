import Link from "next/link";

function Pagination() {
  return (
    <div
      style={{
        marginTop: "50px",
        textAlign: "center",
        alignItems: "center",
        fontWeight: "normal",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span style={{ fontSize: "normal", color: "black" }}>
        Hiển thị <span style={{ color: "orange", fontWeight: "bold" }}>1</span>{" "}
        tới <span style={{ color: "orange", fontWeight: "bold" }}>10</span> của{" "}
        <span style={{ color: "orange", fontWeight: "bold" }}>100</span> Mục
      </span>

      <div style={{ 
        display: "inline-flex", 
        justifyContent: "center",
        marginTop: "30px", 
        }}>
        <Link href="#">
          <i className="icon-left"></i>
        </Link>

        <Link href="#">
          <i style={{ paddingLeft: "50px" }} className="icon-right"></i>
        </Link>
      </div>
    </div>
  );
}

Pagination.defaultProps = {};

export default Pagination;
