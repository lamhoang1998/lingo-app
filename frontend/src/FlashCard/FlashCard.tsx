import style from "./FlashCard.module.css";

export default function FlashCard() {
	return (
		<div className={style.flashCard}>
			<nav>
				<ul className={style.flashCardNav}>
					<li>deck</li>
					<li>new deck</li>
				</ul>
			</nav>
		</div>
	);
}
