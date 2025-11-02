import Navbar from '../Navbar';
import { ThemeProvider } from '../ThemeProvider';

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-20 p-8">
          <div id="home" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg mb-8">
            <h2 className="text-2xl font-bold">Home Section</h2>
          </div>
          <div id="about" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg mb-8">
            <h2 className="text-2xl font-bold">About Section</h2>
          </div>
          <div id="skills" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg mb-8">
            <h2 className="text-2xl font-bold">Skills Section</h2>
          </div>
          <div id="projects" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg mb-8">
            <h2 className="text-2xl font-bold">Projects Section</h2>
          </div>
          <div id="experience" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg mb-8">
            <h2 className="text-2xl font-bold">Experience Section</h2>
          </div>
          <div id="contact" className="h-96 flex items-center justify-center bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-bold">Contact Section</h2>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
