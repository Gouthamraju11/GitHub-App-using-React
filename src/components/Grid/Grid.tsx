import { AgGridReact } from 'ag-grid-react';
import { useNavigate } from 'react-router-dom';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { IRepoModel } from '../../models/IRepoModel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    marginLeft: "200px",
    marginRight: "200px",
    height: "480px",
    flex: 1
  },
  viewButton: {
    backgroundColor: '#4CAF50',
    color: 'White',
    border: '2px solid #4CAF50',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  }
});

export function Grid({ repos }: any) {
  const navigate = useNavigate();
  const classes = useStyles();

  const viewClicked = (params: any) => {
    const jsonData1: IRepoModel[] = repos;
    let newrepo;
    jsonData1.map(item => item.full_name === params.value ? newrepo = item : '');
    navigate("/details", { state: { repoItem: newrepo } });
  }

  const columns = [
    { headerName: 'Name', field: 'full_name', sortable: true },
    { headerName: 'Description', field: 'description', sortable: true },
    { headerName: 'Owner', field: 'owner.login', sortable: true },
    { headerName: 'Created on', field: 'created_at', sortable: true, valueFormatter: (params: any) => formatDate(params.value) },
    { headerName: 'Updated on', field: 'updated_at', sortable: true, valueFormatter: (params: any) => formatDate(params.value) },
    {
      headerName: "Action", field: "full_name", cellRenderer: (field: any) => {
        return <div>
          <button className={classes.viewButton} onClick={() => viewClicked(field)}>View</button>
        </div>;
      }
    }
  ]

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(dateString));
  }

  return (
    <div className={`${classes.container} ag-theme-alpine`}>
      <AgGridReact rowData={repos}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
}
