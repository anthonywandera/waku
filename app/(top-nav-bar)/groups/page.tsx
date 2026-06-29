import GroupCard from "@/components/group-card";
import { groups } from "@/data";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function BrowseGroupsPage() {
  return (
    <>
      <section
        style={{
          backgroundImage:
            "linear-gradient(to top,var(--background) 5%, transparent), linear-gradient(20deg,var(--background) 30%, color-mix(var(--background),transparent 40%)), url('https://i.pinimg.com/736x/7d/fb/e0/7dfbe0b36fa8c4b0570f92b17566aedf.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-12 pt-24 pb-8 -mt-12"
      >
        <h1 className="text-3xl font-bold mb-2">Browse Groups</h1>
        <p className="mb-4 text-muted">
          Find the perfect group and start watching for less.
        </p>
        <div className="flex items-center justify-between">
          <div className="border border-border backdrop-blur w-100 rounded-xl flex items-center bg-[color-mix(var(--elevated),transparent_50%)]">
            <label htmlFor="search" className="pl-4 text-2xl">
              <IoSearch />
            </label>
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Search groups, owners, or plans..."
              className="outline-none p-3 w-full"
            />
          </div>
          <button className="border border-border backdrop-blur rounded-xl py-2 px-4 flex gap-4 items-center bg-[color-mix(var(--elevated),transparent_50%)]">
            <span className="text-muted">Sort by:</span>
            <span className="flex gap-2 items-center">
              Recommended <RiArrowDropDownLine className="text-3xl" />
            </span>
          </button>
        </div>
      </section>
      <section className="px-12 pb-12">
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>
    </>
  );
}
