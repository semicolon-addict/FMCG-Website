import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window to top only when the product category slug changes.
// Example: navigating from /products/namkeens to /products/sweets will scroll to top.
// Navigations between non-category routes (or other route changes) won't trigger scrolling.
const ScrollToTop = () => {
		const { pathname } = useLocation();
		const prevCategoryRef = useRef(null);
		const prevPathRef = useRef(null);

	useEffect(() => {
		// Extract the category slug when path is /products/:category
		const match = pathname.match(/^\/products\/([^/]+)/);
		const currentCategory = match ? match[1] : null;

			// If we just entered a category (currentCategory defined) and it's different
			// from the previous category, scroll to top.
			const isAboutOrContact = pathname === '/about' || pathname === '/contact';

			if (currentCategory && prevCategoryRef.current !== currentCategory) {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			} else if (isAboutOrContact && prevPathRef.current !== pathname) {
				// Also scroll when navigating to /about or /contact (and path changed)
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}

			// Update previous category and path for the next navigation
			prevCategoryRef.current = currentCategory;
			prevPathRef.current = pathname;
	}, [pathname]);

	return null;
};

export default ScrollToTop;
