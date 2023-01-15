// // src/shared/Layout.js

// import React from "react";

// const HeaderStyles = {
//   width: "100%",
//   background: "White",
//   height: "50px",
//   display: "flex",
//   alignItems: "center",
//   paddingLeft: "20px",
//   color: "yellow",
//   fontWeight: "600",
// };
// const FooterStyles = {
//   width: "100%",
//   height: "50px",
//   display: "flex",
//   background: "White",
//   color: "yellow",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "15px",
// };

// const layoutStyles = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   minHeight: "90vh",
// };

// function Header() {
//   return (
//     <div style={{ ...HeaderStyles }}>
//       <span>ORDER</span>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div style={{ ...FooterStyles }}>
//       <span>HH99 Burger</span>
//     </div>
//   );
// }

// function Layout({ children }) {
//   return (
//     <div>
//       <Header />
//       <div style={{ ...layoutStyles }}>{children}</div>
//       <Footer />
//     </div>
//   );
// }

// export default Layout;
