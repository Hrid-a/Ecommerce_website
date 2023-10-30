import ChartBox from "../ui/ChartBox.jsx";
import BarChartBox from "../ui/BarChartBox.jsx";
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
                <article> <BarChartBox {...barChartBoxVisit} /> </article>
                <article> <BarChartBox {...barChartBoxRevenue} /> </article>
            </section>
        </>
    )
}

export default Dashboard
