const WorkExperience = () => {
	const WORK_EXPERIENCE = [
		{
			company: 'INXAIT CORP',
			company_headquarter: 'Bogotá, Colombia',
			role: 'Tecnology Coordinator',
			period: 'December 2022 - Present',
			description:
				'Specialized company in CRM (Client Relationship Managment) and relational marketing platforms, working with clients like Chevrolet, Dunkin Donuts and Loreal. During this time I participated in the following projects:',
		},
		{
			company: 'INXAIT CORP',
			company_headquarter: 'Bogotá, Colombia',
			role: 'Software Developer',
			period: 'August 2019 - September 2022',
			description:
				'Specialized company in CRM (Client Relationship Managment) and relational marketing platforms, working with clients like Chevrolet, Dunkin Donuts and Loreal. During this time I participated in the following projects:',
		},
		{
			company: 'PMK',
			company_headquarter: 'Bogotá, Colombia',
			role: 'Software Developer',
			period: 'December 2018 - August 2019',
			description:
				'Is a company that make e-learning products. During this time I participated in the following projects:',
		},
		{
			company: 'XYBER GROUP',
			company_headquarter: 'Bogotá, Colombia',
			role: 'Web developer',
			period: 'December 2017 - November 2018',
			description:
				'Xyber group is a company that make software for 3rd parties like e-commerce sites and websites. During this time I participated in the following projects:',
		},
		{
			company: 'HABITEMOS SAS',
			company_headquarter: 'Bogotá, Colombia',
			role: 'Web developer',
			period: 'April 2014 - November 2017',
			description:
				'This company offers a software that provides comunication between horizontal property admin and users. During this time I participated in the following projects:',
		},
	]

	return (
		<div className="flex flex-col gap-16">
			{WORK_EXPERIENCE.map((work, index) => (
				<article className="group relative flex flex-col items-start">
					<h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
						<div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
						<a href="/articles/startup-founders-would-you-rather-have-a-10x-better-product-or-10x-better-distribution">
							<span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
							<span className="relative z-10">
								{`Company: ${work.company}, Role: ${work.role}`}
							</span>
						</a>
					</h2>
					<div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5">
						<span
							className="absolute inset-y-0 left-0 flex items-center"
							aria-hidden="true"
						>
							<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
						</span>
						{work.period}
					</div>
					<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
						{work.description}
					</p>
					<div
						aria-hidden="true"
						className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
					>
						Read article
						<svg
							viewBox="0 0 16 16"
							fill="none"
							aria-hidden="true"
							className="ml-1 h-4 w-4 stroke-current"
						>
							<path
								d="M6.75 5.75 9.25 8l-2.5 2.25"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
				</article>
			))}
		</div>
	)
}

export default WorkExperience
