import SafeHostLogo from "../assets/SafeHost-Logo.svg";

export function Header(){
    return(
      <div className="HeaderArea w-auto h-[8vh] flex items-center p-8 bg-blue-900 shadow border border-black" >
        <img src = {SafeHostLogo} alt = 'Logo do SafeHost' className="w-10 h-8 flex-shrink-0 hover:h-9 cursor-pointer"/>
        <strong className="text-white antialiased text-[25px]">Safe Host</strong>
      </div>  
    );
}