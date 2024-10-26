const Footer = () => {
  return (
    <div className="pt-60">
      <div className="w-full h-full bg-[#06091A] pt-44">
        <div className="flex justify-center items-center pb-16">
          <img src="../../../assets/logo-footer.png" alt="" />
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-16 items-center text-white pb-16">
          <div className="">
            <h4 className="text-lg font-bold">About Us</h4>
            <div>
              <p className="text-gray-400 text-sm pt-3 w-4/6">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <div>
              <ul className="pl-2 text-gray-400 pt-3 text-sm">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h4 className="text-lg font-bold">Subscribe</h4>
              <p className="text-sm text-gray-400 w-4/6 py-3">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
                className="p-3 rounded-l-xl"
              />
              <button className="btn bg-red-500 text-white font-bold p-4 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 text-gray-400 py-4 text-center">@2024 Your Company All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
