import NewsList from "@/Components/Homepage/NewsList";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";
import React from "react";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    console.log("props : ", props);
    return (
        <div className=" min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar></Navbar>
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-strecth items-center gap-4 p-4">
                <NewsList news={props.news.data}></NewsList>
            </div>
            <div className="flex justify-center flex-col lg-flex-row lg:flex-wrap lg:items-strecth items-center gap-4 p-4">
                <Paginator meta={props.news.meta}></Paginator>
            </div>
        </div>
    );
}
