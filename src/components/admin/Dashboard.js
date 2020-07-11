import React from 'react';
import AdminLayout from '../../Hoc/adminLayout';

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="user_dashboard">
                <div>
                    <p style={{textAlign:"center"}}>
                    *rubal's admin pannel
                    </p>
                </div>
            </div>
        </AdminLayout>
         
    );
};

export default Dashboard;