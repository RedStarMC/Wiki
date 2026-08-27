import React, { useEffect, useRef, useState } from 'react';

const SponsorList = ({ sponsors = [] }) => {
    const [visible, setVisible] = useState([]);
    const cardRefs = useRef([]);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            setVisible(sponsors.map(() => true));
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisible((prev) => {
                            const next = [...prev];
                            next[index] = true;
                            return next;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -20px 0px' }
        );
        cardRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [sponsors]);

    useEffect(() => {
        setVisible(sponsors.map(() => false));
        const timer = setTimeout(() => {
            if (cardRefs.current.length && 'IntersectionObserver' in window) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            const index = Number(entry.target.dataset.index);
                            if (entry.isIntersecting) {
                                setVisible((prev) => {
                                    const next = [...prev];
                                    next[index] = true;
                                    return next;
                                });
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.15, rootMargin: '0px 0px -20px 0px' }
                );
                cardRefs.current.forEach((el) => el && observer.observe(el));
                return () => observer.disconnect();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [sponsors]);

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 max-w-6xl mx-auto my-8 px-4">
            {sponsors.map((sponsor, index) => {
                const isVisible = visible[index] || false;
                const delay = (index % 6) * 60;

                return (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        data-index={index}
                        className='bg-white dark:bg-[#1f262b] rounded-2xl p-5 text-center border border-gray-200 dark:border-[#354048] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-[#f08a7f]"}'
                        style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
                    >
                        {/* 名称：强制单行，不换行，且留足空间 */}
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 whitespace-nowrap overflow-visible">
                            {sponsor.name || '匿名赞助者'}
                        </div>

                        {/* 金额 + 日期 */}
                        {(sponsor.amount || sponsor.date) && (
                            <div className="flex justify-center gap-2 mt-1 flex-wrap">
                                {sponsor.amount && (
                                    <span className="text-xs bg-gray-100 dark:bg-[#2a333a] text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                        {sponsor.amount}
                                    </span>
                                )}
                                {sponsor.date && (
                                    <span className="text-xs bg-gray-100 dark:bg-[#2a333a] text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                                        {sponsor.date}
                                    </span>
                                )}
                            </div>
                        )}

                        {/* 留言 */}
                        {sponsor.message && (
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 static border-t border-dashed border-gray-200 dark:border-[#354048] pt-2">
                                “{sponsor.message}”
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SponsorList;