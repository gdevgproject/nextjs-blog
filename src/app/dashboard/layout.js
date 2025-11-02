export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: "250px",
          borderRight: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        {/* Render nội dung sidebar */}

        {children["@sidebar"]}
      </aside>
      <main style={{ flex: 1, padding: "1rem" }}>
        {/* Render nội dung chính */}
        {children["@content"]}
      </main>
    </div>
  );
}
