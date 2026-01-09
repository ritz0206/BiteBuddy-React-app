
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Confirmation from '../Confirmation';

describe('Confirmation Component', () => {
	test('renders reservation details when state is provided', () => {
		const state = { date: '2026-01-26', time: '18:00' };
		render(
			<MemoryRouter initialEntries={[{ pathname: '/confirmation', state }] }>
				<Routes>
					<Route path="/confirmation" element={<Confirmation />} />
				</Routes>
			</MemoryRouter>
		);
		expect(screen.getByText('Reservation Confirmed')).toBeInTheDocument();
		expect(screen.getByText(/Date:/)).toHaveTextContent('Date: 2026-01-26');
		expect(screen.getByText(/Time:/)).toHaveTextContent('Time: 18:00');
		expect(screen.getByAltText('Green Tick')).toBeInTheDocument();
	});

	test('renders fallback message when no state is provided', () => {
		render(
			<MemoryRouter initialEntries={[{ pathname: '/confirmation' }] }>
				<Routes>
					<Route path="/confirmation" element={<Confirmation />} />
				</Routes>
			</MemoryRouter>
		);
		expect(screen.getByText('No reservation details found.')).toBeInTheDocument();
	});
});
