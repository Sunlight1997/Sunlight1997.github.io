const getProjectProps = (props) => {
    const { slug, tagline, description, img, name, tags, github, category, featured, url, selected } = props;
    return {
        slug, tagline, description, img, name, tags, github, category, featured, url, selected
    }
}

export default getProjectProps;