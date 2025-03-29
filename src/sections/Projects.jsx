import { PinContainer } from "../components/PinContainer";

const Projects = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-7xl font-medium tracking-tight">My latest work</h2>
      <div className="grid grid-cols-2 gap-6  overflow-hidden w-[1000px]">
        <div className="bg-black border rounded-xl p-6 border-white/[0.2]  ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab
            officia quaerat fugiat voluptas commodi quos tempore at, esse
            aspernatur quibusdam, ipsum animi in molestiae, doloremque suscipit
            minima sapiente cumque quam tempora. Rerum illo officiis totam, ab
            optio qui ratione fugit odit, at aut placeat expedita quibusdam
            asperiores, id illum.
          </p>
        </div>
        <div className=" bg-black border rounded-xl p-6 border-white/[0.2]  ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab
            officia quaerat fugiat voluptas commodi quos tempore at, esse
            aspernatur quibusdam, ipsum animi in molestiae, doloremque suscipit
            minima sapiente cumque quam tempora. Rerum illo officiis totam, ab
            optio qui ratione fugit odit, at aut placeat expedita quibusdam
            asperiores, id illum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Projects;
