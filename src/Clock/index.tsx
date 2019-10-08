import React from 'react';
import {connect} from "react-redux";
import './index.css';
import {Dispatch} from "redux";
import {CoffeeShopActions} from "../CoffeeShop/actions";
import * as actions from "../CoffeeShop/actions";
import {RootState} from "../reducers";
import {getCurrentTime} from "../CoffeeShop/selectors";

interface OwnProps {
    currentTime: number;
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

const SECOND = 1000;

class Clock extends React.Component<Props> {
    private readonly timer: NodeJS.Timeout;
    constructor(props: Props) {
        super(props);
        this.timer = setInterval(() => props.tick(), SECOND);
    }
    render() {
        const {currentTime} = this.props;
        return (
            <div className="clock">
                {currentTime} seconds
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    currentTime: getCurrentTime(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CoffeeShopActions>) => ({
    tick: () => dispatch(actions.tick()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Clock);
