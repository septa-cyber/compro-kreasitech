import React from "react";
import { BlogPost } from "@/app/data/blogData";
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
    post: BlogPost;
}

export default function ArticleContent({ post }: ArticleContentProps) {
    return (
        <article className="bg-white pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cover Image */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-sm aspect-[21/9] relative">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-slate hover:prose-a:text-violet-600 prose-headings:font-montserrat prose-p:font-montserrat prose-p:text-gray-600 prose-a:text-violet-600 max-w-none">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
