import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from 'react-router-dom';
import { FaSave, FaTrash, FaEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import {
    GridRowModes,
    DataGrid,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { Toaster, toast } from 'sonner';
import { deleteUser } from '../../redux/features/User/userSlice';




export default function FullFeaturedCrudGrid() {
    const initialRows = useLoaderData()
    const { error, message, isSuccess } = useSelector(state => state.user);
    const [rows, setRows] = useState(initialRows);
    const [rowModesModel, setRowModesModel] = useState({});
    const dispatch = useDispatch();

    if (isSuccess) {
        toast.success(message);
    } else if (!isSuccess && error) {
        toast.error(error);
    }


    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const handleEditClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const handleDeleteClick = (id) => () => {
        setRows(rows.filter((row) => row.id !== id));
        const deletedRow = rows.find(row => row.id === id);
        dispatch(deleteUser(deletedRow._id));
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        });

        const editedRow = rows.find((row) => row.id === id);
        if (editedRow.isNew) {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        // wirte the logic to delete the order update
        // const { _id, paymentInfo, orderStatus } = updatedRow;
        // dispatch(updateOrder({ _id, paymentInfo, orderStatus }))
        return updatedRow;
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {

            field: 'image',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => {
                return (<img className="image" src={params.row.image.url} alt="avatar" />);
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            type: 'text',
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            type: 'text',
        },
        {
            field: 'role',
            headerName: 'Role',
            type: 'text',
            editable: true,
            width: 150,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

                if (isInEditMode) {
                    return [
                        <>

                            <GridActionsCellItem
                                icon={<FaSave />}
                                label="Save"
                                sx={{
                                    color: 'primary.main',
                                }}
                                onClick={handleSaveClick(id)}
                            />
                            <GridActionsCellItem
                                icon={<ImCancelCircle />}
                                label="Cancel"
                                className="textPrimary"
                                onClick={handleCancelClick(id)}
                                color="inherit"
                            />
                        </>
                    ];
                }

                return [
                    <>
                        <GridActionsCellItem
                            icon={<FaEdit />}
                            label="Edit"
                            className="textPrimary"
                            onClick={handleEditClick(id)}
                            color="inherit"
                        />
                        <GridActionsCellItem
                            icon={<FaTrash />}
                            label="Delete"
                            onClick={handleDeleteClick(id)}
                            color="inherit"
                        />
                    </>
                ];
            },
        },
    ];

    return (
        <>
            <Toaster richColors position='top-center' />
            <div className='data-table'>


                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}

                />
            </div>
        </>
    );
}
