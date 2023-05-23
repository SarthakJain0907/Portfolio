import Link from "next/link"
import Head from "next/head"
import Layout from '/components/layout'
import stylesWork from '/styles/work.module.css'


export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Work</title>
            </Head>
        
            <h1 className={stylesWork.heading}>Schoohouse.World, Tutor</h1>
            <ul>
                <li>Certifications: Pre-Algebra, Algebra 1, Sat Math.</li>
                <li>I have hosted 27 sessions, tutoring 34 learners from 7 different countries. My tutoring minutes are 1865.</li>
                <li>My most common feedbacks are: &apos;Friendly&apos;, &apos;Patient&apos;, &apos;Interactive&apos; and &apos;Good Explanations&apos;.</li>
                <li>Schoolhouse Profile: <a href='https://schoolhouse.world/u/19943'>here</a></li>
            </ul>
            <h1 className={stylesWork.heading}>Hemingwayd, Co-founder & Head of Technology</h1>
            <ul>
                <li>Hemingwayd is my passion project to help readers and writers connect.</li>
                <li>Supervised development and launch with 150+ beta users as a bootstrapped project.</li>
                <li>I began my coding journey while learning the languages from sources like Udemy and Youtube and created Hemingwayd.</li>
                <li>Created the full-stack web application from scratch in 4 months using HTML, CSS, JavasScript, PHP, and MySQL.</li>
                <li>The Website included 50000+ lines of code and more than 7 different features, including a library, bookmarking books, a newsletter, user feedback “console,” and a complex database structure of over 1000 books.</li>
            </ul>
        </Layout>
       
    );
}
