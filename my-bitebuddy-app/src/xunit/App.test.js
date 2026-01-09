
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
	test('renders NavigationBar', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	test('renders HeroSection, OrderOnlineSection, and AboutUs on home route', () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText('Little Lemon')).toBeInTheDocument();
		expect(screen.getByText(/Order Online/i)).toBeInTheDocument();
		expect(screen.getByText(/Chicago/)).toBeInTheDocument();
	});

	test('renders Footer', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByText(/©/i)).toBeInTheDocument();
	});
});
