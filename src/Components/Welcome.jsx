import React from "react";

export default function Welcome() {
	return (
		<div className='lh-[100vh] flex bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]opacity-[60%]'>
			<div className='flex flex-1 flex-col justify-center gap-[20px] lg:pl-[180px] '>
				<h2 className='text-[#090909] font-[26px] extra-bold'>
					{" "}
					NEW ARRIVALS ONLY FOR EVERYONE
				</h2>
				<div>
					<div className='flex items-center gap-[20px]'>
						<p className='text-[#171717] lg:text-[100px] font-[700]'>new</p>
						<img src='./imgs/wave.png' alt='' className='w-[105px]' />
					</div>
					<p className='text-[#171717] lg:text-[100px] lg:font-[500]'>
						collection
					</p>
					<p className='text-[#171717] lg:text-[100px] lg:font-[500]'>
						for everyone
					</p>
				</div>
				<div className='flex justify-center items-center gap-[15px] lg:w-[310px] lg:h-[70px] rounded  mt-[30px] bg-[#ff4141] text-[white] lg:text-[22px] lg:font-[500] '>
					<div> Latest Collection</div>
					<img src='./imgs/Arrow right.png ' alt='' className='border-[]  ' />
				</div>
			</div>

			<div className='flex-1 flex items-[center] justify-center'>
				<img src='./imgs/8333079.png' alt='' />
			</div>
		</div>
	);
}
