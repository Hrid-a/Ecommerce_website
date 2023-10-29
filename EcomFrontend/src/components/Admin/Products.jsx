import DataTable from "../ui/DataTable";
import { useLoaderData } from "react-router-dom";
import { Toaster } from "sonner";
import Dialog from "../Products/Dialog";
import moment from "moment/moment";
import ProductActions from "../ui/ProductActions";

const Products = () => {
    const { products } = useLoaderData();
    const columns = [
        { field: '_id', headable: true },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => {
                return (<img className="image" src={params?.row?.images?.[0]?.imageSrc} alt="avatar" />);
            }
        },
        {
            field: 'name',
            headerName: 'Title',
            type: 'text',
            width: 160,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'text',
            width: 150,
        },
        {

            field: 'createdAt',
            headerName: 'Created At',
            width: 180,
            renderCell: (params) =>
                moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
        },
        {
            field: 'stock',
            headerName: 'In Stock',
            type: 'boolean',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 300,

            renderCell: (params) => (
                <ProductActions {...{ params }} />
            )
        }

    ];

    return (
        <div>
            <Toaster richColors position="top-center" />
            <Dialog />
            <DataTable rows={products} columns={columns} />
        </div>
    )
}

export default Products