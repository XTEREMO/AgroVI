import './Weather.css';

const data = [
    { level: 1000, altitude: '110 m' },
    { level: 975, altitude: '320 m' },
    { level: 950, altitude: '500 m' },
    { level: 925, altitude: '800 m' },
    { level: 900, altitude: '1000 m' },
    { level: 850, altitude: '1500 m' },
    { level: 800, altitude: '1900 m' },
    { level: 700, altitude: '3 km' },
    { level: 600, altitude: '4.2 km' },
    { level: 500, altitude: '5.6 km' },
    { level: 400, altitude: '7.2 km' },
    { level: 300, altitude: '9.2 km' },
    { level: 250, altitude: '10.4 km' },
    { level: 200, altitude: '11.8 km' },
    { level: 150, altitude: '13.5 km' },
    { level: 100, altitude: '15.8 km' },
    { level: 70, altitude: '17.7 km' },
    { level: 50, altitude: '19.3 km' },
    { level: 30, altitude: '22 km' },
];

const AltitudeMassage = () => {
    return (
        <div className="table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {data.map((row, index) => (
                            <th key={index}>Level (hPa): {row.level}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map((row, index) => (
                            <td key={index}>Altitude: {row.altitude}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AltitudeMassage;
