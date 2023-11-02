import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function DataTable({ rows, columns }) {



    return (
        <div className="data-table">

            <DataGrid
                className='data-grid'
                rowHeight={80}
                rows={rows}
                getRowId={(row) => row._id}
                columns={[...columns]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar,
                    quickFilterProps: { debounceMs: 500 }
                }}
                slotProps={{
                    toolbar: { showQuickFilter: true },
                }}

                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                })}

                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector

            />
        </div>

    );
}
