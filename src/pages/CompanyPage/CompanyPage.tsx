import * as React from 'react';

// Grid
import { AsideLeftContainer } from '../../components/LayoutContainers/AsideLeftContainer/AsideLeftContainer';
import { AsideRightContainer } from '../../components/LayoutContainers/AsideRightContainer/AsideRightContainer';
import { MainContainer } from '../../components/LayoutContainers/MainContainer/MainContainer';
import { ColumnsPageContainer } from '../../components/LayoutContainers/PageContainer/PageContainer';

//Route
import { Link } from 'react-router-dom';

//CSS
const CSS = require('./CompanyPage.styl');

// Types
import { Company } from '../../types'

//Components
import { BlueButton } from "../../components/common/Buttons/BlueButton/BlueButton"


interface CompanyPageProps {
  company: Company;
}

export class CompanyPage extends React.PureComponent<CompanyPageProps> {
  render() {
    return (
      <div>
        <ColumnsPageContainer>
          <AsideLeftContainer>
            <Link to={'#'}>
              <img src={this.props.company.logo} alt="logo" className={CSS.companyLogo} />
            </Link>
              <BlueButton className={CSS.applyButton}>{__t("companyPage.want")}</BlueButton>
          </AsideLeftContainer>

          <MainContainer>
            <h3>MainContainer</h3>
          </MainContainer>

          <AsideRightContainer>
            <h3>AsideRightContainer</h3>
          </AsideRightContainer>
        </ColumnsPageContainer>
      </div>
    );
  }
}
