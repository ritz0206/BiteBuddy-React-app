
import { renderHook, act } from '@testing-library/react';
import useScrollControl from '../useScrollControl';

describe('useScrollControl hook', () => {
	beforeEach(() => {
		window.scrollY = 0;
		Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 1000 });
	});

	test('should show header initially', () => {
		const { result } = renderHook(() => useScrollControl());
		expect(result.current).toBe(true);
	});

	test('should show header when scrolling up', () => {
		const { result } = renderHook(() => useScrollControl());
		act(() => {
			window.scrollY = 200;
			window.dispatchEvent(new Event('scroll'));
			window.scrollY = 100;
			window.dispatchEvent(new Event('scroll'));
		});
		expect(result.current).toBe(true);
	});

	test('should hide header when scrolling down past threshold', () => {
		const { result } = renderHook(() => useScrollControl());
		act(() => {
			window.scrollY = 0;
			window.dispatchEvent(new Event('scroll'));
			window.scrollY = 150;
			window.dispatchEvent(new Event('scroll'));
		});
		expect(result.current).toBe(false);
	});
});
