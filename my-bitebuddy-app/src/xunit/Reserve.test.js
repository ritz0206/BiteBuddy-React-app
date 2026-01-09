
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Reserve from '../Reserve';

const mockHandleFormDataTimeChange = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockNavigate,
}));

describe('Reserve Component', () => {
	const formDataTime = { date: '2026-01-26', time: ['18:00', '19:00'] };

	test('renders all form fields', () => {
		render(
			<MemoryRouter>
				<Reserve formDataTime={formDataTime} handleFormDataTimeChange={mockHandleFormDataTimeChange} />
			</MemoryRouter>
		);
		expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Submit Reservation/i })).toBeInTheDocument();
	});

	test('renders time options from formDataTime', () => {
		render(
			<MemoryRouter>
				<Reserve formDataTime={formDataTime} handleFormDataTimeChange={mockHandleFormDataTimeChange} />
			</MemoryRouter>
		);
		expect(screen.getByText('18:00')).toBeInTheDocument();
		expect(screen.getByText('19:00')).toBeInTheDocument();
	});

	test('calls handleFormDataTimeChange on date change', () => {
		render(
			<MemoryRouter>
				<Reserve formDataTime={formDataTime} handleFormDataTimeChange={mockHandleFormDataTimeChange} />
			</MemoryRouter>
		);
		fireEvent.change(screen.getByLabelText(/Date/i), { target: { name: 'date', value: '2026-01-27' } });
		expect(mockHandleFormDataTimeChange).toHaveBeenCalled();
	});
});
