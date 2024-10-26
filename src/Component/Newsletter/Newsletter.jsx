import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <div className=" back-img h-full">
        <div className="flex flex-col gap-2 justify-center items-center p-20">
          <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
          <p className="text3xl pt-3 text-gray-400">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-4 mt-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="py-2 pl-2 pr-16 border-2 rounded-xl w-full"
            />
            <button className="bg-gradient-to-r from-red-500 to-orange-400 p-4 font-bold rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
