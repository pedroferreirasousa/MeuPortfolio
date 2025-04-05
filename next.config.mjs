import whithVideos from "next-videos";
import path from "path";
// import { NextConfig } from "next";
import { types } from "util";
import pkg from 'next';

const { NextConfig } = pkg;


/** @type {import('next').NextConfig} */
const nextConfig = {    
    /* config options here */

    sassOptions: {
        includePaths: [path.join(process.cwd(), "src/styles")],
        silenceDeprecations: ["legacy-js-api"],
    },

};

export default whithVideos(nextConfig,{
    assetsPrefix: "/media",
});
