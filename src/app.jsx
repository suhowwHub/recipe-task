import { useState } from "react"
import styles from "./app.module.css"
import data from "./data.json"

export const App = () => {
	const [steps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)
	const isFirstStep = activeIndex === 0
	const isLastStep = activeIndex === steps.length - 1
	const content = steps[activeIndex].content

	const prevButtonHendler = () => {
		if (!isFirstStep) setActiveIndex((currentIndex) => currentIndex - 1)
	}
	const nextButtonHendler = () => {
		if (!isLastStep) setActiveIndex((currentIndex) => currentIndex + 1)
		else resetHendler()
	}
	const paginationHendler = (index) => setActiveIndex(index)
	const resetHendler = () => setActiveIndex(0)

	const setClasses = (index, activeIndex) => {
		return [
			// prettier-ignore
			styles["steps-item"],
			index < activeIndex ? styles.done : " ",
			index === activeIndex ? styles.active : " ",
		]
			.join(" ")
			.trim()
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>{content}</div>
					<ul className={styles["steps-list"]}>
						{steps.map((step, index) => (
							<li className={`${setClasses(index, activeIndex)}`} key={step.id}>
								<button
									className={styles["steps-item-button"]}
									onClick={() => paginationHendler(index)}>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles["buttons-container"]}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={prevButtonHendler}>
							Назад
						</button>
						<button className={styles.button} onClick={nextButtonHendler}>
							{isLastStep ? "Начать сначала" : "Далее"}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
