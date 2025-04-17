// Import icons
import { IoMdSearch, IoMdClose } from "react-icons/io";

export default function Search() {
  return (
    <dialog
      className="fixed rounded left-1/2 top-24 -translate-x-1/2 p-2 bg-[var(--theme-background-tint)] text-[var(--theme-color-text)]"
      open
    >
      <form
        className={`px-2 rounded flex items-center mx-16 gap-1.5 bg-[var(--theme-background-shade)]`}
      >
        <input
          name="query"
          placeholder="search"
          type="text"
          className="focus:outline-none w-96"
          required
        />
        <button>
          <IoMdSearch />
          <IoMdClose />
        </button>
      </form>
    </dialog>
  );
}
