import React from 'react'

const Progress = () => {
    return (
        <div className="white-container offset-lg-1 col-lg-10">
        <div className="heading">
            <h1 className="text-center">Skills Scale</h1>
        </div>
        <div className="text-left pl-3 pt-5">
            <div className="custom-progress-bar">
                <h4>
                    Frontend
                </h4>
                <div className="progress ">
                    <div className="progress-bar bg-success progress-bar-striped" role="progressbar"
                       style={{width: '0%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            </div>
            <div className="custom-progress-bar pt-5">
                <h4>
                    Backend
                </h4>
                <div className="progress">
                    <div className="progress-bar bg-success progress-bar-striped" style={{width: '0%'}}
                        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div className="custom-progress-bar pt-5">
                <h4>
                    DevOps
                </h4>
                <div className="progress">
                    <div className="progress-bar bg-success progress-bar-striped" style={{width: '0%'}}
                        role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            </div>
        </div>


    </div>
    )
}

export default Progress
