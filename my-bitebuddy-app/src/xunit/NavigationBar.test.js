
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from '../NavigationBar';

jest.mock('../useScrollControl', () => () => true);

describe('NavigationBar Component', () => {
	test('renders logo image', () => {
		render(<NavigationBar />);
		expect(screen.getByAltText('Logo')).toBeInTheDocument();
	});

	test('renders navigation links', () => {
		render(<NavigationBar />);
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Menu')).toBeInTheDocument();
		expect(screen.getByText('About Us')).toBeInTheDocument();
		expect(screen.getByText('Login')).toBeInTheDocument();
	});

	test('header is visible when showHeader is true', () => {
		const { container } = render(<NavigationBar />);
		const header = container.querySelector('header');
		expect(header).toHaveStyle('transform: translateY(0)');
	});
});
