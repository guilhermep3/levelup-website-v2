import { TrainersData } from "@/data/trainers";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Trainers = () => {
	const trainers = TrainersData;

	return (
		<section id="trainers" className="relative bg-black overflow-hidden">
			<div className="containerStyle">
				<h1 data-aos="fade-down" className="sectionTitleStyle">
					Nossos <span className="sectionTitleSpanStyle">Treinadores</span>
				</h1>
				<h2 className="sectionSubtitleStyle">
					Os 4 treinadores mais experientes dentre os mais de 50 do nosso time
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-6 py-14 place-items-center">
					{trainers.map((trainer, index) => (
						<div key={index} data-aos="zoom-in">
							<div className="group w-72 rounded-xl overflow-hidden bg-zinc-900/80 backdrop-blur 
								border border-zinc-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/20"
							>
								<div className="relative w-full flex justify-center items-end pt-6"
									style={{ background: "radial-gradient(circle at 50% 30%, rgba(255,115,0,0.35), #060606 75%)" }}>
									<img src={`trainers/${trainer.image}`} alt={trainer.name}
										className="relative w-full scale-105 transition-transform duration-300 group-hover:scale-110" />
								</div>
								<div className="bg-[#060606] p-4">
									<div className="flex items-end gap-3">
										<p className="text-lg font-bold">{trainer.name}</p>
										<span className="text-(--secondary-color) text-sm font-semibold">+{trainer.experience} exp</span>
									</div>
									<p className="my-2 text-sm text-zinc-400">{trainer.role}</p>
									<div
										className="flex items-center gap-2 mt-3 font-semibold text-sm group-hover:text-(--secondary-color) transition"
									>
										<a href="#">Ver mais</a>
										<FaLongArrowAltRight className="text-lg transition-transform group-hover:translate-x-1" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
