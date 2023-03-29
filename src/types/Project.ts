export interface ContentfulResponse {
    portfolio: Portfolio;
}

export interface Portfolio {
    about:               About;
    techStackCollection: TechStack;
    linksCollection:     LinksCollection;
    projectsCollection:  ProjectsCollection;
}

export interface About {
    title:      string;
    profilePic: ProfilePic;
    // about:      string;
    description: Description;
}

export interface ProfilePic {
    url:         string;
    title:       string;
    description: string;
}

export interface LinksCollection {
    items: Link[];
}

export interface Link {
    name: string;
    url:  string;
}

export interface ProjectsCollection {
    items: Project[];
}

export interface Project {
    title:       string;
    subtitle?:   string;
    startDate:   string;
    endDate?:     string;
    description?: Description;
}

export interface Description {
    json: JSON;
}

export interface JSON {
    nodeType: string;
    data:     Data;
    content:  JSONContent[];
}

export interface PurpleContent {
    nodeType: string;
    value?:   string;
    marks?:   any[];
    data:     Data;
    content?: JSONContent[];
}

export interface JSONContent {
    nodeType: string;
    data:     Data;
    content:  PurpleContent[];
}

export interface Data {
}


export interface TechStack {
    items: TechItem[];
}

export interface TechItem {
    name:       string;
    categories: string[];
}
