import React, { Component } from 'react';
import Viewer from '@phuocng/react-pdf-viewer';
import pdf from "../assets/samples.pdf"

export class ReportRenderer extends Component {
    render() {
        return (
            <div>
                <Viewer fileUrl={pdf}/>
            </div>
        )
    }
}

export default ReportRenderer;
