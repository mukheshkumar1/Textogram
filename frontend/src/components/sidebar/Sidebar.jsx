import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import ProfileButton from "./ProfileButton"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <div className="flex justify-between items-center mt-4">
        <LogoutButton />
        <ProfileButton />
      </div>
    </div>
  )
}

export default Sidebar
