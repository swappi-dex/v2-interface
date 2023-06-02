import CalculateImage from "@assets/images/calculate.png";

export default function Staking() {
  return (
    <div className="mt-15 max-w-900px mx-auto rounded-lt-3xl rounded-rb-3xl shadow-container lt-sm:mx-3">
      <div className="flex pt-5 px-5 items-center pb-2">
        <h5 className="text-base uppercase tracking-widest text-ink-green mr-2 font-medium">
          Staking
        </h5>
        <p className="border-l-[3px] border-[#C8E3B3] h-3">&nbsp;</p>
        <p className="text-xs text-windy px-1 mt-[2px]">
          Stake PPI to boost your farming.
        </p>
      </div>

      <div
        id="farm-page"
        className="bg-white p-4 rounded-3xl rounded-tr-none rounded-bl-none relative"
      >
        <div className="py-5 px-6 border border-[#D9ECCA] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 rounded-xl from-[#ECFBFE] to-[#F8FECA] bg-gradient-to-r">
          <div className="flex w-full flex-1 flex-col">
            <label className="text-xs sm:text-sm text-[#2A3D4A] opacity-60">
              Total Staked PPI
            </label>
            <span className="text-lg text-[#2A3D4A] font-medium break-all">
              54,786,128.5597
            </span>
            <span className="text-xs text-[#2A3D4A] font-medium">
              ~ $1,834,494.07
            </span>
          </div>

          <div className="flex w-full flex-1 items-center">
            <div className="flex flex-col">
              <span className="text-sm text-ink-green font-medium">
                22.81 % of all circulating PPI
              </span>
              <span className="text-sm text-ink-green font-medium">
                Average Stake Duration: 7.72 months
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#D9ECCA] mt-4 overflow-hidden border-b-0">
          <ul>
            <li className="text-sm border-b border-[#D9ECCA] text-center">
              <div className="py-5 px-6 flex flex-wrap sm:flex-nowrap justify-between sm:items-center from-[#FAFAEA] to-[#FBFFDF] bg-gradient-to-r sm:space-x-4">
                <div className="w-full sm:w-2/5 flex flex-col justify-between h-auto sm:h-28">
                  <div className="flex flex-col space-between text-left space-y-1 mb-4 sm:mb-0">
                    <label className="text-xs">
                      Stake your PPI to boost your LP farming rewards and
                      increase your Launchpad score.
                    </label>
                  </div>
                  <button
                    id="staking-button-5"
                    className="btn bg-linear-orange-green"
                  >
                    Connect Wallet
                  </button>
                </div>
                <div className="hidden w-3/5 sm:w-1/3 sm:flex justify-between ml-8 h-auto sm:h-28">
                  <div className="flex flex-col items-end justify-center">
                    <div className="mx-2 flex items-center justify-between space-x-2">
                      <img className="h-16" src={CalculateImage} alt="icon" />
                    </div>
                    <a
                      className="text-sm text-orange underline font-medium mt-3"
                      id="simulator"
                      href="#/simulator"
                    >
                      Simulate your staking strategy →
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
