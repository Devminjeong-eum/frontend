import { useCallback, useRef } from 'react';

/**
 * 일정 주기 동안 같은 함수가 Trigger 되지 않도록 debounce 처리된 함수를 반환하는 useDebounce
 * delay 내로 debounce 함수가 다시 호출될 경우, timeout 이 초기화되어 delay 만큼 기다려야 함.
 */
export const useDebounce = () => {
    const timer = useRef<NodeJS.Timeout>();

    const debounce = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <T extends (...args: any[]) => any>(callback: T, delay: number) =>
            (...args: Parameters<T>) => {
                clearTimeout(timer.current);
                timer.current = setTimeout(() => {
                    callback(...args);
                }, delay);
            },
        [],
    );

    return { debounce };
};