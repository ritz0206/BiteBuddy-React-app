
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs Component', () => {
	test('renders the restaurant name', () => {
		render(<AboutUs />);
		expect(screen.getByText('Little Lemon')).toBeInTheDocument();
	});

	test('renders the city', () => {
		render(<AboutUs />);
		expect(screen.getByText('Chicago')).toBeInTheDocument();
	});

	test('renders all about descriptions', () => {
		render(<AboutUs />);
		expect(screen.getAllByText(/Little Lemon|Mediterranean|dining is not just about food|Thank you for choosing/i).length).toBeGreaterThan(0);
	});

	test('renders the restaurant image', () => {
		render(<AboutUs />);
		const img = screen.getByAltText('About Us');
		expect(img).toBeInTheDocument();
	});
});
