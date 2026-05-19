import React from 'react';
import Link from 'next/link';

interface PageTitleProps {
  pageName: string;
}

// Server Component - no hooks or browser APIs
const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
    <section className="page-title" style={{backgroundImage: 'url(/assets/images/background/page-title.png)'}}>
		<div className="auto-container">
			<div className="title-outer text-center">
				<div className="h1 title">{pageName}</div>
				<ul className="page-breadcrumb">
					<li><Link href="#">Home</Link></li>
					<li>{pageName}</li>
				</ul>
			</div>
		</div>
	</section>
  );
};

export default PageTitle;