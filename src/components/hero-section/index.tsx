import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="my-10 grid place-content-center relative">
      <div className="md:max-w-screen-lg  2xl:max-w-7xl  gap-5 flex flex-col justify-center min-h-full px-6 md:px-10">
        <strong
          className={cn(
            "text-5xl md:text-8xl !leading-tight tracking-widest font-black  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
            "animate-fade-up animate-ease-in-out",
          )}
          style={{
            WebkitTextFillColor: "transparent",
          }}
        >
          AuctionClub
        </strong>
        <p className={cn("text-base md:text-2xl indent-8")}>
          Smart contract-based auction platform to provide a fair and reliable
          auction environment for traders. At present, the platform supports two
          models of British auction and American auction, and provides a variety
          of trading rules for sellers to freely combine. In addition, the
          platform implements a set of incentive mechanism to achieve positive
          feedback to the auctioneers, and actively participate in the auction,
          you can obtain the auction share and extract huge profits.
        </p>
      </div>
    </div>
  );
}
