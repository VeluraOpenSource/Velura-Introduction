import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';

export const Introduction = () => {
  return (
    <div className="full-page sm:bottom-section introduction-bg-img relative flex h-dvh flex-col items-center justify-center">
      <h1 data-aos="fade-up" className="heading text-[80px]">
        <a href="https://www.linkedin.com/company/velura-open-source">velura</a>
      </h1>
      <p data-aos="fade-down" className="paragraph text-center text-[20px]">
        where ideas become open
      </p>

      <div className="absolute inset-x-0 bottom-20 mx-auto flex w-max items-center justify-center gap-5 rounded-xl bg-white/20 p-2 sm:right-auto sm:left-10 sm:flex-col">
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
