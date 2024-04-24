import { NavButtonData } from "domain/model/NavButtonData"
import { UrlProvider } from "./UrlProvider"

const about: NavButtonData = {
    name: 'About',
    icon: '/asset/image/icon/person.svg',
    url: UrlProvider.about,
}
const projects: NavButtonData = {
    name: 'Projects',
    icon: '/asset/image/icon/projects.svg',
    url: UrlProvider.projects,
}
const blog: NavButtonData = {
    name: 'Blog',
    icon: '/asset/image/icon/blog.svg',
    url: UrlProvider.blog,
}
const socials: NavButtonData = {
    name: 'Socials',
    icon: '/asset/image/icon/socials.svg',
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