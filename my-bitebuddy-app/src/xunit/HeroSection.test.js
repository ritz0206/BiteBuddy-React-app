
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
	test('renders restaurant name and city', () => {
		render(
			<MemoryRouter>
				<HeroSection />
			</MemoryRouter>
		);
		expect(screen.getByText('Little Lemon')).toBeInTheDocument();
		expect(screen.getByText('Chicago')).toBeInTheDocument();
	});

	test('renders description', () => {
		render(
			<MemoryRouter>
				<HeroSection />
			</MemoryRouter>
		);
		expect(screen.getByText(/family owned Mediterranean restaurant/i)).toBeInTheDocument();
	});

	test('renders Reserve A Table button', () => {
		render(
			<MemoryRouter>
				<HeroSection />
			</MemoryRouter>
		);
		expect(screen.getByRole('link', { name: /Reserve A Table/i })).toBeInTheDocument();
	});

	test('renders hero image', () => {
		render(
			<MemoryRouter>
				<HeroSection />
			</MemoryRouter>
		);
		expect(screen.getByAltText('Mediterranean Food')).toBeInTheDocument();
	});
});
