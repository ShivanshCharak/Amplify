import { InfiniteMovingCards } from "./ui/infinite-moving-card";
function MusicSchoolTestimonials(){
    const testimonials = [
        {
          quote: "Joining Amplify Music Academy was the turning point in my musical journey. The instructors are not only skilled but also passionate about teaching. I've grown so much as a pianist!",
          name: "Alice Thompson",
          title: "Piano Student"
        },
        {
          quote: "The guitar lessons at Amplify Music Academy are top-notch. The teachers break down complex techniques into manageable steps, making learning enjoyable and rewarding.",
          name: "James Wilson",
          title: "Guitar Student"
        },
        {
          quote: "I never thought I could sing opera until I started training at Amplify Music Academy. The vocal instructors here are phenomenal, and the environment is so supportive.",
          name: "Sophia Rodriguez",
          title: "Opera Singer"
        },
        {
          quote: "Amplify Music Academy has not only taught me to play the drums but has also instilled in me a deep appreciation for rhythm and musicality. It's been an incredible journey!",
          name: "David Lee",
          title: "Drum Student"
        },
        {
          quote: "Enrolling my child in Amplify Music Academy was the best decision. The progress they've made in learning the violin is remarkable, and they look forward to every lesson.",
          name: "Emma Johnson",
          title: "Parent"
        }
      ];
           
    return(
       <div className="h-[40rem] w-full dark:bg-black">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Heat our Harmony, Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
       </div>
    )
}
export default MusicSchoolTestimonials;
