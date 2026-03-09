import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface ArticleSectionProps {
    articles: BlogPost[];
}

export default function ArticleSection({ articles }: ArticleSectionProps) {
    // Show only the latest 3 articles
    const displayArticles = articles.slice(0, 3);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-24">
                    <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-8">
                        <h2 className="font-h2">
                            Artikel Terbaru
                        </h2>
                        <p className="font-body-lg">
                            Artikel terbaru yang dapat membantu Anda dalam memahami berbagai topik dan tren terkini.
                        </p>
                    </div>
                    <Link href="/blog" className="px-6 md:px-8 py-3 md:py-4 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors duration-300">
                        <span className="font-btn text-white">Lihat Semua</span>
                    </Link>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayArticles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white flex flex-col rounded-none overflow-hidden group border border-gray-300 transition-shadow duration-300 hover:shadow-lg h-full"
                        >
                            {/* Image Side - Fixed Aspect Ratio */}
                            <div className="w-full aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={article.coverImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 p-6 flex flex-col items-start gap-4">
                                <div className="flex items-center gap-4">
                                    <span className={`${article.categoryColor} px-3 py-1 font-btn-sm tracking-wide rounded-[4px]`}>
                                        {article.category}
                                    </span>
                                    <span className="font-body-xs opacity-70">
                                        {new Date(article.date).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <h3 className="font-h5 line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="font-body-sm line-clamp-3">
                                    {article.excerpt || article.content.substring(0, 150) + "..."}
                                </p>

                                <div className="mt-auto pt-2">
                                    <Link href={`/blog/${article.slug}`} className="font-btn hover:text-violet-600 transition-colors duration-300 flex items-center gap-2 group/btn">
                                        Baca Selengkapnya
                                        <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

