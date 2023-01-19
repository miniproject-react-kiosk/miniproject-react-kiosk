import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return <>{<Outlet />}</>;
}

// class App extends Component {
//   handleCreate = (data) => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div>
//         <div>
//           <>{<Outlet />}</>;
//         </div>
//         {/* <PhoneNumberForm onCreate={this.handleCreate} /> */}
//       </div>
//     );
//   }
// }

export default App;
