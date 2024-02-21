import Image from 'next/image'

const MainImages = () => {
	const IMAGES = [
		{
			src: '/images/IMAGE-1.jpg',
			alt: 'Digital Nomad, image 1',
			class: 'rotate-2',
		},
		{
			src: '/images/IMAGE-2.jpg',
			alt: 'Digital Nomad, image 2',
			class: '-rotate-2',
		},
		{
			src: '/images/IMAGE-3.jpg',
			alt: 'Digital Nomad, image 3',
			class: 'rotate-2',
		},
		{
			src: '/images/IMAGE-4.jpg',
			alt: 'Digital Nomad, image 4',
			class: '-rotate-2',
		},
		{
			src: '/images/IMAGE-5.jpg',
			alt: 'Digital Nomad, image 5',
			class: 'rotate-2',
		},
	]

	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
				{IMAGES.map((image, index) => (
					<div
						key={index}
						className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl ${image.class}`}
					>
						<Image
							className="absolute inset-0 h-full w-full object-cover"
							src={image.src}
							alt={image.alt}
							width={500}
							height={500}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default MainImages
