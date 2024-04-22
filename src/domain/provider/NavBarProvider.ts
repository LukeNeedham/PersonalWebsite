import { NavButtonData } from "domain/model/NavButtonData"
import { UrlProvider } from "./UrlProvider"

const about: NavButtonData = {
    name: 'About',
    icon: '/asset/icon/person.svg',
    url: UrlProvider.about,
}
const projects: NavButtonData = {
    name: 'Projects',
    icon: '/asset/icon/projects.svg',
    url: UrlProvider.projects,
}
const blog: NavButtonData = {
    name: 'Blog',
    icon: '/asset/icon/blog.svg',
    url: UrlProvider.blog,
}
const socials: NavButtonData = {
    name: 'Socials',
    icon: '/asset/icon/socials.svg',
    url: UrlProvider.socials,
}

export const NavBarProvider = {
    about: about,
    projects: projects,
    blog: blog,
    socials: socials,
    datas: [
        about,
        projects,
        blog,
        socials,
    ]
}