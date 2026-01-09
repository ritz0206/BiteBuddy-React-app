
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
	test('renders logo image', () => {
		render(<Footer />);
		expect(screen.getByAltText('Logo')).toBeInTheDocument();
	});

	test('renders location section', () => {
		render(<Footer />);
		expect(screen.getByText('Location')).toBeInTheDocument();
		expect(screen.getByText('123 Main Street')).toBeInTheDocument();
		expect(screen.getByText('Chicago, IL 60601')).toBeInTheDocument();
	});

	test('renders contact section', () => {
		render(<Footer />);
		expect(screen.getByText('Contact')).toBeInTheDocument();
		expect(screen.getByText(/info@example.com/)).toBeInTheDocument();
		expect(screen.getByText(/\+1 234 567 890/)).toBeInTheDocument();
	});

	test('renders social media links', () => {
		render(<Footer />);
		expect(screen.getByText('Social Media')).toBeInTheDocument();
		expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(4);
	});
});
