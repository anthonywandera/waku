// Import icons
import { IoMdSearch, IoMdClose } from "react-icons/io";

export default function Search() {
  return (
    <div>
      <form
        className={`px-2 rounded flex items-center gap-1.5 bg-[var(--theme-background-tint)]`}
      >
        <input
          name="query"
          placeholder="search"
          type="text"
          className="focus:outline-none"
          required
        />
        <button>
          <IoMdSearch />
          <IoMdClose />
        </button>
      </form>
    </div>
  );
}
