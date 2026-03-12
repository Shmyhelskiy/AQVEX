export const Footer = () => {
  return (
    <footer className="flex justify-between">
      <div className="flex items-center gap-[15px]">
        <img
          src="./footer-lable.svg"
          alt="footer logo"
          width={40}
          height={40}
        />
        <div className="bg-[#F1F2F4] rounded-xl pl-2.5 pr-[9px] pt-2 pb-[5px]">
          <img
            src="./made-in-uk.svg"
            alt="Made in Ukraine"
            width={39}
            height={29}
          />
        </div>
        <p className="font-klein text-text-secondary leading-[140%] ">
          AQVEX © 2026 | Все права защищены
        </p>
      </div>

      <div className="flex items-center gap-[22px]">
        <img src="./mastercard.svg" alt="Mastercard" width={77} height={34} />
        <img src="./visa.svg" alt="Visa" width={69} height={34} />
        <img src="./apple-pay.svg" alt="Apple pay" width={69} height={34} />
        <img src="./google-pay.svg" alt="Google pay" width={64} height={34} />
      </div>
    </footer>
  );
};
