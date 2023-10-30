import ChartBox from "../ui/ChartBox.jsx";
import BarChart from "../ui/BarChart.jsx";
import { FaUsers, FaSellsy } from "react-icons//fa";
import {
    chartBoxUser,
    chartBoxProduct,
    barChartBoxVisit,
    barChartBoxRevenue
} from "../../utils/data";

const Dashboard = () => {
    return (
        <>
            <section className="charts">
                <article >
                    <ChartBox {...chartBoxUser} icon={<FaUsers />} />
                </article>
                <article className="cart__box"> <ChartBox {...chartBoxProduct} icon={<FaSellsy />} /> </article>
                <article> <BarChart {...barChartBoxVisit} /> </article>
                <article> <BarChart {...barChartBoxRevenue} /> </article>
            </section>
        </>
    )
}

export default Dashboard
