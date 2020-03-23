import React, { Component } from 'react';
import TabBar from '../../components/TabBar';
import SearchWallet from '../../components/SearchWallet';
import SingleStockGeneral from '../../components/SingleStockGeneral';
import { loadAllDailyHistory, loadD } from '../../services/addhistory';

export class AllStocksView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchquery: '',
      wallet: this.props.user.wallet,
      stocks: []
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(searchquery) {
    this.setState({ searchquery });
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    const stocks = await loadAllDailyHistory();
    this.setState({ stocks });
  }

  render() {
    return (
      <section className="page__allstocks">
        <h1>Trakker</h1>

        <SearchWallet searchquery={this.state.searchquery} updateSearch={this.updateSearch} />
        {this.state.stocks
          .filter(search =>
            search.name.toUpperCase().includes(this.state.searchquery.toUpperCase())
          )
          .map(element => {
            //console.log('ELEMENT', element);
            const currentPrice = element.dailyClosingPrices[0][1];
            const oldPrice = element.dailyClosingPrices[1][1];
            const changeMargin = ((currentPrice - oldPrice) / oldPrice) * 100;
            return <SingleStockGeneral single={element} margin={changeMargin} {...this.props} />;
          })}

        <TabBar {...this.props} />
      </section>
    );
  }
}

export default AllStocksView;
