import { BarChart, ResponsiveContainer, Bar, Tooltip } from "recharts";


const BarChart = (props) => {
    const { title, color, dataKey, chartData } = props;
    return (
        <div className="bar-chart">
            <h4 className="title">{title}</h4>
            <div className="chart">
                <ResponsiveContainer width="99%" height="100%" minWidth="1px">
                    <BarChart width={150} height={40} data={chartData}>
                        <Tooltip
                            cursor={false}
                            contentStyle={{ backgroundColor: '#2a3447', border: 'none' }}
                            labelStyle={{ display: 'none' }}
                        />

                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChart;