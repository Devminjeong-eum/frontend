import { useEffect, useRef } from 'react';

interface PropsType {
    onClickOutside: (event: PointerEvent) => void;
}

/**
 * 특정 Element 외부를 클릭할 경우에 대한 로직을 리스너에 추가하는 Hook useOnClickOutside
 */
export const useOnClickOutside = <T extends HTMLElement = HTMLDivElement>({
    onClickOutside,
}: PropsType) => {
    const targetRef = useRef<T | null>(null);

    useEffect(() => {
        const eventListener = (event: PointerEvent) => {
            // NOTE : ref 에 element 가 없거나, 클릭한 대상이 ref의 자식 요소인지를 판별
            if (
                !targetRef.current ||
                targetRef.current.contains(event.target as Node)
            )
                return;
            onClickOutside?.(event);
        };
        document.addEventListener('pointerdown', eventListener);
        return () => document.removeEventListener('pointerdown', eventListener);
    }, [onClickOutside, targetRef]);

    return { targetRef };
};