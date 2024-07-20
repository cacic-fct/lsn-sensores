import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [daisyui, flowbite]
};
