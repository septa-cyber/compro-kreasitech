import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogData";

interface ArticleMetaProps {
    post: BlogPost;
    previousPost?: BlogPost;
    nextPost?: BlogPost;
}

export default function ArticleMeta({ post, previousPost, nextPost }: ArticleMetaProps) {
    return (
        <section className="bg-[#F4F4F7] pb-16 border-t border-gray-100 pt-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-montserrat hover:bg-violet-50 hover:text-violet-600 transition-colors cursor-pointer"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {previousPost ? (
                        <Link href={`/blog/${previousPost.slug}`} className="bg-white group flex flex-col gap-2 p-6 rounded-2xl border border-gray-200 hover:border-violet-200 hover:shadow-sm transition-all text-left">
                            <span className="text-xs font-semibold text-gray-400 font-montserrat uppercase tracking-wider">Artikel Sebelumnya</span>
                            <h4 className="text-md font-medium font-montserrat text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                                {previousPost.title}
                            </h4>
                        </Link>
                    ) : (
                        <div className="hidden md:block"></div>
                    )}

                    {nextPost && (
                        <Link href={`/blog/${nextPost.slug}`} className="bg-white group flex flex-col gap-2 p-6 rounded-2xl border border-gray-200 hover:border-violet-200 hover:shadow-sm transition-all text-right items-end">
                            <span className="text-xs font-semibold text-gray-400 font-montserrat uppercase tracking-wider">Artikel Selanjutnya</span>
                            <h4 className="text-md font-medium font-montserrat text-gray-900 group-hover:text-violet-600 transition-colors line-clamp-2">
                                {nextPost.title}
                            </h4>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
