import profile from '../../assets/images/profile.png'
const Header = () => {

    
    return (
        <header className="flex justify-between items-center p-4 max-w-6xl mx-auto border-b-2">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt=""  />
        </header>
    );
};

export default Header;