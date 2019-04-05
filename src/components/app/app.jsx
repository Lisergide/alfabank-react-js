import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';

import * as newsActions from '../../action/newsActions';

import News from '../news/news';

import Heading from 'arui-feather/heading';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Spin from 'arui-feather/spin';
// import Icon from 'arui-feather/icon/brand/bank-2449';

import alfaLogo from "../../assets/logo-alfabank-cyr-h.svg";

function mapStateToProps(state) {
    const { user, news } = state;
    return { user, news };
}

function mapDispatchToProps(dispatch) {
    return {
        newsActions: bindActionCreators(newsActions, dispatch)
    }
}

class App extends React.Component {
    /*constructor(props) {
        super(props);

        // this.inputNewsTitle;

    }*/

    componentDidMount() {
        this.props.newsActions.showNews();
    }
    render() {
        if (this.props.news.isBusy) {
            return (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  icon={<Spin size='l' visible={true} />}
                  size='l'
                >
                  Загрузка...
                </Button>
              </div>
            );
        }

        return (
            <div className="container">
                <Heading size='l'>ReactJs Разработка от <img src={ alfaLogo } alt='alfa-logo' style={{ width: '270px' }} /></Heading>
                <Heading size='m'>Привет, меня зовут {this.props.user.name}!</Heading>
                <Heading size='m'>И я могу отображать новости за { this.props.news.year} год!</Heading>
                <div className="row" style={ { marginLeft: 0, marginBottom: '15px' } }>
                    <div className="col-md-4">
                        <Input 
                            size='m' 
                            label='Предложите новость'
                            width='available' 
                            ref={ (input) => {
                                this.inputNewsTitle = input;
                            } } />
                    </div>
                    <div className="col-md-4">
                        <Button 
                            size='m' 
                            view='extra'
                            width='available'
                            onClick={() => this.handleClick()}
                        >
                            Добавить новость
                        </Button>
                    </div>
                </div>

                <News items={this.props.news.items} onHandleClick={ this.handeNewsClick }/>
            </div>
        );
    }

    handleClick() {
        console.log('####: handleClick: ');
        let { news: { items }, newsActions: { newsAdd }} = this.props;

        items.push({
            title: this.inputNewsTitle.value,
            descr: 'Больше...'
        });

        this.inputNewsTitle.value = '';
        this.inputNewsTitle.focus();

        newsAdd(items);
    }

    handleNewsClick(params) {
        console.log('####: params: ', params);
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);