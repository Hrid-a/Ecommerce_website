import Barchart from "../ui/BarChart"
import ChartBox from "../ui/ChartBox"
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
                <article> <Barchart {...barChartBoxVisit} /> </article>
                <article> <Barchart {...barChartBoxRevenue} /> </article>
            </section>
        </>
    )
}

export default Dashboard
