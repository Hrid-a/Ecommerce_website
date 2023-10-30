import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

const ChartBox = (props) => {
    const { icon, title, number, dataKey, percentage, chartData, color } = props;
    return (
        <div className="chart__box">
            <div className="box__info">
                <div className="header">
                    <span>{icon}</span>
                    <h4 className="title">{title}</h4>
                </div>

                <p className="number">{number}</p>
                <a style={{ color: [color] }}>View all</a>

            </div>
            <div className="chart__info">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip contentStyle={{ backgroundColor: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 12, y: 60 }} />
                            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart__details">
                    <span className="percentage" style={{ color: percentage < 0 ? "red" : "limegreen" }}>{percentage}%</span>
                    <span className="date">this month</span>
                </div>

            </div>
        </div>
    )
}

export default ChartBox;