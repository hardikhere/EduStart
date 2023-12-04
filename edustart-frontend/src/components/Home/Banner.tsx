import Image from "next/image";
import Student1 from "@/assets/student1.svg";
import Student2 from "@/assets/student2.svg";
import Student3 from "@/assets/student3.svg";
import SearchFormHome from "@/components/Home/SearchFormHome";

export default function Banner() {
  return (
    <div className="rounded-b-large  flex bg-gradient-to-br from-blue-100 from-10%  via-white to-200% to-blue-100 w-full justify-center relative">
      <Image src={Student1} />
      <Image src={Student2} />
      <Image src={Student3} />
      <div className="absolute bottom-40">
        <SearchFormHome />
      </div>
    </div>
  );
}
