const AssetsLink: React.FC = () => {
  return (
    <div className="hidden lg:flex w-full h-[80px] justify-center items-center bg-medigreen font-[16px] font-normal">
      <div className="flex items-center rounded-[24px] bg-[#DACFCE] bg-opacity-20 py-[13px] px-[28px] space-x-1">
        <span className="text-orange font-bold">Bridge Your Assets</span>
        <span className="text-white pl-2">from Conflux Core here:</span>
        <span>
          <a
            className="text-bluegreen underline"
            target="_blank"
            href="https://confluxhub.io/cross-space"
            rel="noreferrer"
          >
            confluxhub.io
          </a>
        </span>
        <span className="text-white pl-2">from Ethereum and Others here:</span>
        <div className="space-x-2">
          <span>
            <a
              className="text-bluegreen underline"
              target="_blank"
              href="https://cbridge.celer.network/"
              rel="noreferrer"
            >
              cbridge.celer.network
            </a>
          </span>
          <span>
            <a
              className="text-bluegreen underline"
              target="_blank"
              href="https://meson.fi"
              rel="noreferrer"
            >
              meson.fi
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AssetsLink;
