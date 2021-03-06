import {PropTypes} from 'react';

const s = require('./Layout.css');

const Renderer = ({ title, components, toc }) => (
	<div className={s.root}>
		<main className={s.wrapper}>
			<div className={s.content}>
				<div className={s.components}>
					{components}
					<footer className={s.footer}>
						Generated with <a className={s.link} href="https://github.com/sapegin/react-styleguidist">React Styleguidist</a>
					</footer>
				</div>
			</div>
			<div className={s.sidebar}>
				<h1 className={s.heading}>{title}</h1>
				{toc}
			</div>
		</main>
	</div>
);

Renderer.propTypes = {
	title: PropTypes.string.isRequired,
	components: PropTypes.object.isRequired,
	toc: PropTypes.node.isRequired
};

export default Renderer;
