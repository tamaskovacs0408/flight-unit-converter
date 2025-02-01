import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useConverter from '../useConverter';

describe('useConverter', () => {
    it('should initialize with default values', () => {
        const mockFn = vi.fn((x) => x * 2);
        const { result } = renderHook(() => useConverter(mockFn));
        
        expect(result.current.convertedUnit).toBe(0);
    });

    it('should update converted value when setUnit is called', () => {
        const mockFn = vi.fn((x) => x * 2);
        const { result } = renderHook(() => useConverter(mockFn));

        act(() => {
            result.current.setUnit(10);
        });

        expect(mockFn).toHaveBeenCalledWith(10);
        expect(result.current.convertedUnit).toBe(20);
    });

    it('should recalculate when conversion function changes', () => {
        const mockFn1 = vi.fn((x) => x * 2);
        const mockFn2 = vi.fn((x) => x * 3);

        const { result, rerender } = renderHook(
            ({ fn }) => useConverter(fn),
            { initialProps: { fn: mockFn1 } }
        );

        act(() => {
            result.current.setUnit(10);
        });
        expect(result.current.convertedUnit).toBe(20);

        rerender({ fn: mockFn2 });
        expect(result.current.convertedUnit).toBe(30);
    });
});
