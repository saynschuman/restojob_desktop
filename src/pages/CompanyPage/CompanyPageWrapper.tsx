import * as React from "react"
import { CompanyPage } from "./CompanyPage"
import {companyMock1} from "../../mocks";

export class CompanyPageWrapper extends React.PureComponent {
    render() {
        return (
            <CompanyPage company={companyMock1} />
        )
    }
}
