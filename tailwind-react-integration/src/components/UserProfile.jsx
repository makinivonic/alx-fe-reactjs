function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg mx-auto my-10 rounded-lg shadow-lg">
      <img
        className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto"
        src="/vite.svg"
        alt="User"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-3 sm:my-4">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
