import { useState } from "react"
import styles from "./app.module.css"
import data from "./data.json"

export const App = () => {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles["steps-content"]}>
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles["steps-list"]}>
						<li className={styles["steps-item"] + " " + styles.done}>
							<button className={styles["steps-item-button"]}>1</button>
							Шаг 1
						</li>
						<li className={styles["steps-item"] + " " + styles.done}>
							<button className={styles["steps-item-button"]}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles["steps-item"] + " " + styles.done + " " + styles.active
							}>
							<button className={styles["steps-item-button"]}>3</button>
							Шаг 3
						</li>
						<li className={styles["steps-item"]}>
							<button className={styles["steps-item-button"]}>4</button>
							Шаг 4
						</li>
					</ul>
					<div className={styles["buttons-container"]}>
						<button className={styles.button}>Назад</button>
						<button className={styles.button}>Далее</button>
					</div>
				</div>
			</div>
		</div>
	)
}
