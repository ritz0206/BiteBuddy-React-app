
import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderOnlineSection from '../OrderOnlineSection';

describe('OrderOnlineSection Component', () => {
	test('renders specials header and menu button', () => {
		render(<OrderOnlineSection />);
		expect(screen.getByText('This week specials!')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Online menu/i })).toBeInTheDocument();
	});

	test('renders all special items', () => {
		render(<OrderOnlineSection />);
		expect(screen.getByText('Greek Salad')).toBeInTheDocument();
		expect(screen.getByText('Bruschetta')).toBeInTheDocument();
		expect(screen.getByText('Lemon Dessert')).toBeInTheDocument();
	});

	test('renders special item images', () => {
		render(<OrderOnlineSection />);
		expect(screen.getByAltText('Greek Salad')).toBeInTheDocument();
		expect(screen.getByAltText('Bruschetta')).toBeInTheDocument();
		expect(screen.getByAltText('Lemon Dessert')).toBeInTheDocument();
	});

	test('renders order delivery buttons', () => {
		render(<OrderOnlineSection />);
		expect(screen.getAllByRole('button', { name: /Order a Delivery/i }).length).toBe(3);
	});
});
