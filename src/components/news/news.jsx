import React from 'react';

import Toogle from '../toogle/toogle';

class News extends React.Component {
    constructor(props) {
        console.log('####: constructor');
        super(props);

        this.state = {
            visible: false,
        }
    }

    componentWillMount() {
        console.log('####: componentWillWount');
    }

    render() {
        console.log('####: render');
        const { items } = this.props;

        return items.length === 0
            ? <div> У вас нет новостей! </div>
            : this.renderContent()
    }

    renderContent() {
        return (
            <div>
                {this.renderNews()}
                <p>
                    У вас есть {this.props.items.length} новости!
                </p>
            </div>
        );
    }

    renderNews() {
        return this.props.items.map((item, index) => {
            return (
                <div className={'news card'} key={index}>
                    <h2 className={'news__title card-title'}>
                        {item.title}
                    </h2>
                    <div className={'news__descr card-text'}>
                        {item.descr}
                    </div>
                    <Toogle title={ 'Подробнее...' }>
                        <p className={ 'lead' }>
                            Полное описание...
                        </p>
                    </Toogle>
                </div>
            );
        });
    }

    componentDidMount() {
        console.log('####: componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('####: componentWillReceiveProps');
    }

    shouldComponentUpdate() {
        console.log('####: shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('####: componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('####: componentDidUpdate');
    }

}

export default News;