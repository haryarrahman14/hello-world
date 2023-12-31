import { useDarkModeContext } from "@/hooks/DarkModeContex";

import Image from "next/image";
import linkedindark from "../../public/social-media/linkedin-dark.svg";
import linkedinlight from "../../public/social-media/linkedin-light.svg";
import emaildark from "../../public/social-media/email-dark.svg";
import emaillight from "../../public/social-media/email-light.svg";

import { Grid } from "@mui/material";

const Footer = () => {
  const { colorTheme } = useDarkModeContext();

  return (
    <div className="flex px-[16px] lg:px-[60px] py-[40px]">
      <Grid container alignItems="center" spacing="20px">
        <Grid item lg={3} md={12} xs={12}>
          <div className="flex flex-row items-end gap-[8px] ">
            <Image
              style={{
                height: "18px",
              }}
              alt="gmail"
              src={colorTheme == "light" ? emaillight : emaildark}
            />
            <p
              className="typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active cursor-pointer"
              onClick={() =>
                window.open("mailto:haryarrahman14@gmail.com", "_blank")
              }
            >
              haryarrahman14@gmail.com
            </p>
          </div>
        </Grid>

        <Grid item lg={3} md={12} xs={12}>
          <div className="flex flex-row items-end gap-[8px] ">
            <Image
              style={{
                height: "18px",
              }}
              alt="linkedin"
              src={colorTheme == "light" ? linkedinlight : linkedindark}
            />
            <p
              className="typography-h200 dark:hover:text-base-light dark:text-base-light-active text-base-dark-active hover:text-base-light-active cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/hary-arrahman",
                  "_blank"
                )
              }
            >
              hary-arrahman
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
