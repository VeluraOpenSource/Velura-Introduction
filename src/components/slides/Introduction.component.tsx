import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

export const Introduction = () => {
  return (
    <div className="full-page h-dvh flex items-center justify-center flex-col sm:bottom-section introduction-bg-img relative">
      <h1 data-aos="fade-up" className="heading text-[80px]">
        <a href="https://www.linkedin.com/company/velura-open-source">velura</a>
      </h1>
      <p data-aos="fade-down" className="paragraph text-[20px] text-center">
        where ideas become open
      </p>

      <div className="absolute bottom-20 inset-x-0 sm:right-auto bg-white/20 rounded-xl p-2 sm:left-10 flex mx-auto justify-center w-max items-center sm:flex-col gap-5">
        <a
          className="size-10"
          href="https://www.linkedin.com/company/velura-open-source"
        >
          <img src={linkedinIcon} alt="linkedin-icon" />
        </a>
        <a className="size-10" href="https://github.com/VeluraOpenSource">
          <img src={githubIcon} alt="github-icon" />
        </a>
      </div>
    </div>
  );
};
