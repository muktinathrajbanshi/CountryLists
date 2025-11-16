export const CountryCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;
    return <li className="country-card card">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt="flags.alt" />

            <div className="countryInfo">
                <div className="card-title"></div>
            </div>
        </div>
    </li>;
};