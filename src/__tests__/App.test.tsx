import '@testing-library/jest-dom';
import { it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import App from '../App';

it('renders the app successfully', () => {
	render(() => <App />);

	expect(screen.getByText('Buchkin')).toBeInTheDocument();
});
