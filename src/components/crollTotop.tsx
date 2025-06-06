// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const MOBILE_BREAKPOINT = 768; // px

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
		if (isMobile) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location.pathname]); // trigger only on path change

	return null;
};

export default ScrollToTop;
