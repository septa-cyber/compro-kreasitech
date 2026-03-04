import React from "react";
import { BlogPost } from "@/data/blogData";
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
                <div className="prose prose-lg prose-slate hover:prose-a:text-violet-600 prose-headings:font-montserrat prose-p:font-montserrat prose-p:text-gray-600 prose-a:text-violet-600 max-w-none prose-img:max-h-[500px] prose-img:max-w-full prose-img:mx-auto prose-img:rounded-xl prose-img:object-contain">
                    <ReactMarkdown
                        components={{
                            img: ({ node, ...props }) => (
                                <figure className="my-8 flex flex-col items-center">
                                    <img {...props} />
                                    {props.alt && (
                                        <figcaption className="text-center text-sm text-gray-500 mt-2 font-montserrat px-4">
                                            {props.alt}
                                        </figcaption>
                                    )}
                                </figure>
                            )
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}

