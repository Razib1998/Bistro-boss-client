

const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div>
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase font-bold border-y-4 p-4 mb-6">{Heading}</h3>
        </div>
    );
};

export default SectionTitle;