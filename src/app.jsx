import { useState } from "react"
import styles from "./app.module.css"
import data from "./data.json"
import { PaginationStep } from "./pagination-step"

export const App = () => {
	const [steps, setSteps] = useState(data)

	const paginationList = steps.map((step, index) => (
		<li className={styles["steps-item"]}>
			<button className={styles["steps-item-button"]}>{index + 1}</button>
			{step.title}
		</li>
	))

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles["steps-list"]}>{paginationList}</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button}>Назад</button>
						<button className={styles.button}>Далее</button>
					</div>
				</div>
			</div>
		</div>
	)
}
