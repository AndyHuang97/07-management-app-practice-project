import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelect";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    // flex -> allows to place children elements horizontally instead of stacking them vertically
    <main className="h-screen my-8 flex gap-8"> 
      <ProjectsSidebar/>
      <NoProjectSelected/>
    </main>
  );
}

export default App;
