"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FeaturedWork = () => {
    const featureWork = [
        {
            title: "App Concept: Information Architecture",
            roles: ["UX Strategy", "User Flows"],
            image: "/images/featured-work/img-1.png"
        },
        {
            title: "Learning Tool Interface Design",
            roles: ["Product Planning", "Feature Organization"],
            image: "/images/featured-work/img-2.png"
        },
        {
            title: "Workflow Mapping & Prototypes",
            roles: ["UX Design", "Wireframing"],
            image: "/images/featured-work/img-3.png"
        },
        {
            title: "Product Strategy Case Study",
            roles: ["Product Thinking", "Documentation"],
            image: "/images/featured-work/img-4.png"
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            <Button asChild variant={"outline"} className="h-auto">
                                <Link href={"/"} className="py-3 px-5">
                                    Download Portfolio
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork?.map((value: any, index: number) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    <Link href={"/"} className="overflow-hidden">
                                        <Image
                                            src={value?.image}
                                            alt="Image"
                                            width={490}
                                            height={300}
                                            className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <Link href={"/"}><h4>{value?.title}</h4></Link>
                                        <div className="flex">
                                            <p>{value?.roles?.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedWork