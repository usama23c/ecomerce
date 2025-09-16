// const HeaderDashed = ({ head1, head2, paragraph, classStyle }) => {
// 	return (
// 		<header id="section-header" className="text-capitalize">
// 			<h2 className={`d-flex gap-1 gap-sm-2 align-items-center justify-content-center ${classStyle}`}>
// 				<span className="c-light-gray">{head1}</span>{" "}
// 				<span className="c-d-gray">{head2}</span>{" "}
// 				<span className="line-span wd-40 ms-1"></span>
// 			</h2>
// 			{paragraph && <p className="c-gray px-3 fs-small">{paragraph}</p>}
			
// 		</header>
// 	);
// };

// export default HeaderDashed;


import PropTypes from "prop-types";
import { useMemo } from "react";

const HeaderDashed = ({ head1, head2, paragraph, classStyle = "" }) => {
  // Memoize the header content to prevent unnecessary re-renders
  const headerContent = useMemo(
    () => (
      <>
        <h2
          className={`flex items-center justify-center gap-2 md:gap-3 text-2xl md:text-3xl font-semibold text-center capitalize ${classStyle}`}
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <span className="text-gray-500">{head1 || "Welcome"}</span>
          <span className="text-gray-800">{head2 || "Explore"}</span>
          <span className="inline-block w-10 md:w-12 h-0.5 bg-pink-400 ml-2"></span>
        </h2>
        {paragraph && (
          <p
            className="text-gray-600 text-sm md:text-base mt-3 px-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {paragraph}
          </p>
        )}
      </>
    ),
    [head1, head2, paragraph, classStyle]
  );

  return (
    <header
      id="section-header"
      className="py-6 md:py-8 text-center"
      role="banner"
      aria-labelledby="header-title"
    >
      <div id="header-title">{headerContent}</div>
    </header>
  );
};

HeaderDashed.propTypes = {
  head1: PropTypes.string,
  head2: PropTypes.string,
  paragraph: PropTypes.string,
  classStyle: PropTypes.string,
};

export default HeaderDashed;
