import Image from 'next/image'

import MainContent from '@/components/Index/MainContent'
import MainImages from '@/components/Index/MainImages'
import MainSkills from '@/components/Index/MainSkills'
import WorkExperience from '@/components/Index/WorkExperience'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<>
			<div className="fixed inset-0 flex justify-center sm:px-8">
				<div className="flex w-full max-w-7xl lg:px-8">
					<div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
				</div>
			</div>
			<div className="relative">
				<main>
					<MainContent />
					<MainImages />
					<div className="sm:px-8 mt-24 md:mt-28">
						<div className="mx-auto max-w-7xl lg:px-8">
							<div className="relative px-4 sm:px-8 lg:px-12">
								<div className="mx-auto max-w-2xl lg:max-w-5xl">
									<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
										<WorkExperience />
										<div className="space-y-10 lg:pl-16 xl:pl-24">
											<form
												action="/thank-you"
												className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
											>
												<h2 className="my-0 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
													<svg
														viewBox="0 0 24 24"
														fill="none"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
														aria-hidden="true"
														className="h-6 w-6 flex-none"
													>
														<path
															d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
															className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
														></path>
														<path
															d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
															className="stroke-zinc-400 dark:stroke-zinc-500"
														></path>
													</svg>
													<span className="ml-3">Stay up to date</span>
												</h2>
												<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
													Get notified when I publish something new, and
													unsubscribe at any div.
												</p>
												<div className="mt-6 flex">
													<input
														type="email"
														placeholder="Email address"
														aria-label="Email address"
														required
														className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
													/>
													<button
														className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
														type="submit"
													>
														Join
													</button>
												</div>
											</form>

											<MainSkills />

											<div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
												<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
													<svg
														viewBox="0 0 24 24"
														fill="none"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
														aria-hidden="true"
														className="h-6 w-6 flex-none"
													>
														<path
															d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
															className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
														></path>
														<path
															d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
															className="stroke-zinc-400 dark:stroke-zinc-500"
														></path>
													</svg>
													<span className="ml-3">Work</span>
												</h2>

												<ol className="mt-6 space-y-4">
													<li className="flex gap-4">
														<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
															<Image
																className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-fullr"
																src="/images/IMG_20210918_162318.jpg"
																alt="Picture of the author"
																width={40}
																height={28}
															/>
														</div>
														<dl className="flex flex-auto flex-wrap gap-x-2">
															<dt className="sr-only">Company</dt>
															<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
																eleven21
															</dd>
															<dt className="sr-only">Role</dt>
															<dd className="text-xs text-zinc-500 dark:text-zinc-400">
																Full-Stack Dev
															</dd>
															<dt className="sr-only">Date</dt>
															<dd
																className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
																aria-label="June 2022 until Jan 2023"
															>
																<div>June 2022</div>{' '}
																<span aria-hidden="true">—</span>{' '}
																<div>Jan 2023</div>
															</dd>
														</dl>
													</li>
													<li className="flex gap-4">
														<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
															<Image
																className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-fullr"
																src="/images/IMG_20210918_162318.jpg"
																alt="Picture of the author"
																width={200}
																height={200}
															/>
														</div>
														<dl className="flex flex-auto flex-wrap gap-x-2">
															<dt className="sr-only">Company</dt>
															<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
																destro.ai
															</dd>
															<dt className="sr-only">Role</dt>
															<dd className="text-xs text-zinc-500 dark:text-zinc-400">
																Founder (Tech)
															</dd>
															<dt className="sr-only">Date</dt>
															<dd
																className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
																aria-label="Jan 2021 until Apr 2022"
															>
																<div>Jan 2021</div>{' '}
																<span aria-hidden="true">—</span>{' '}
																<div>Apr 2022</div>
															</dd>
														</dl>
													</li>
													<li className="flex gap-4">
														<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
															<Image
																className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-fullr"
																src="/images/IMG_20210918_162318.jpg"
																alt="Picture of the author"
																width={200}
																height={200}
															/>
														</div>
														<dl className="flex flex-auto flex-wrap gap-x-2">
															<dt className="sr-only">Company</dt>
															<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
																practitionr.com
															</dd>
															<dt className="sr-only">Role</dt>
															<dd className="text-xs text-zinc-500 dark:text-zinc-400">
																Founder (Tech)
															</dd>
															<dt className="sr-only">Date</dt>
															<dd
																className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
																aria-label="May 2021 until Jan 2022"
															>
																<div>May 2021</div>{' '}
																<span aria-hidden="true">—</span>{' '}
																<div>Jan 2022</div>
															</dd>
														</dl>
													</li>
													<li className="flex gap-4">
														<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
															<Image
																className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-fullr"
																src="/images/IMG_20210918_162318.jpg"
																alt="Picture of the author"
																width={200}
																height={200}
															/>
														</div>
														<dl className="flex flex-auto flex-wrap gap-x-2">
															<dt className="sr-only">Company</dt>
															<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
																Neo Kumfurt Solutions
															</dd>
															<dt className="sr-only">Role</dt>
															<dd className="text-xs text-zinc-500 dark:text-zinc-400">
																Data Scientist
															</dd>
															<dt className="sr-only">Date</dt>
															<dd
																className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
																aria-label="Nov 2020 until Jan 2021"
															>
																<div>Nov 2020</div>{' '}
																<span aria-hidden="true">—</span>{' '}
																<div>Jan 2021</div>
															</dd>
														</dl>
													</li>
													<li className="flex gap-4">
														<div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
															<Image
																className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-fullr"
																src="/images/IMG_20210918_162318.jpg"
																alt="Picture of the author"
																width={200}
																height={200}
															/>
														</div>
														<dl className="flex flex-auto flex-wrap gap-x-2">
															<dt className="sr-only">Company</dt>
															<dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
																Jio Creative Labs
															</dd>
															<dt className="sr-only">Role</dt>
															<dd className="text-xs text-zinc-500 dark:text-zinc-400">
																Data Scientist
															</dd>
															<dt className="sr-only">Date</dt>
															<dd
																className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
																aria-label="May 2020 until Nov 2020"
															>
																<div>May 2020</div>{' '}
																<span aria-hidden="true">—</span>{' '}
																<div>Nov 2020</div>
															</dd>
														</dl>
													</li>
												</ol>
												<a
													className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
													href="/#"
												>
													Download CV
													<svg
														viewBox="0 0 16 16"
														fill="none"
														aria-hidden="true"
														className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
													>
														<path
															d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</>
	)
}
