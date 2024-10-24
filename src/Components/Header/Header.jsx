import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='md:w-10/12 w-11/12 mx-auto flex justify-between items-center py-8 border-b border-gray-400'>
            <h1 className="text-3xl font-bold  ">
            Knowledge Cafe
            </h1>

            <img className='w-10 h-10' src={Profile} alt="" />
            
        </div>
    );
};

export default Header;