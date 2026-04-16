import MissionHeader from "@/components/mission/MissionHeader";
import MissionList from "@/components/mission/MissionList";

export default function HomePage() {
  return (
    <div className="bg-[#F5F6F8] min-h-full">
      <MissionHeader />
      <MissionList />
    </div>
  );
}
